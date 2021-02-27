import * as passport from 'passport';
import { Handler } from 'express';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import utenteSerivice from '@/services/utente.service';
import CONFIG from '@/config';

export default function (): Handler {
    passport.use(
        new LocalStrategy((username, password, done) => {
            async function authenticate() {
                const utente = await utenteSerivice.verifyUsernameAndPassword(username, password);
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
                    const utente = await utenteSerivice.verifyUserWithJwt(jwtPayload);
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
