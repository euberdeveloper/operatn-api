import * as passport from 'passport';
import { Handler } from 'express';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import authService from '@/services/auth.service';
import CONFIG from '@/config';
import { UserNotAuthenticatedError } from '@/errors';

export const authenticate: Handler = function authenticate(req, res, next) {
    passport.authenticate('jwt', { session: false }, function (error, user, info) {
        if (info) {
            const error = new UserNotAuthenticatedError();
            next(error);
        } else {
            next();
        }
    })(req, res, next);
};

export default function (): Handler {
    passport.use(
        new LocalStrategy((username, password, done) => {
            async function authenticate() {
                const utente = await authService.verifyUsernameAndPassword(username, password);
                return utente;
            }

            authenticate()
                .then(user => done(null, user))
                .catch(error => done(error, null));
        })
    );

    passport.use(
        new JwtStrategy(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: CONFIG.SECURITY.JWT.PASSWORD
            },
            (jwtPayload, done) => {
                async function authenticate() {
                    const utente = await authService.verifyUserWithJwt(jwtPayload);
                    return utente;
                }

                authenticate()
                    .then(user => done(null, user))
                    .catch(error => done(error, null));
            }
        )
    );

    return passport.initialize();
}
