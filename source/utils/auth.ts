import * as passport from 'passport';
import { Handler } from 'express';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import authService from '@/services/auth.service';
import CONFIG from '@/config';
import logger from '@/utils/logger';
import { InvalidCredentialsError, UserNotAuthenticatedError } from '@/errors';

export const authenticateJwt: Handler = function authenticate(req, res, next) {
    passport.authenticate('jwt', { session: false }, function (_error, user, info) {
        if (info) {
            logger.warning('Error in jwt authentication', info);
            const error = new UserNotAuthenticatedError();
            next(error);
        } else {
            req.user = user;
            next();
        }
    })(req, res, next);
};

export const authenticateLocal: Handler = function authenticate(req, res, next) {
    passport.authenticate('local', { session: false }, function (err, user, _info) {
        if (err) {
            const error = new InvalidCredentialsError();
            next(error);
        } else {
            req.user = user;
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
                algorithms: [CONFIG.SECURITY.JWT.ALGORITHM],
                secretOrKey: CONFIG.SECURITY.JWT.PUBLIC_PASSWORD,
                issuer: CONFIG.SECURITY.JWT.ISSUER
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
