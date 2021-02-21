import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
    path: path.join(__dirname, '..', '..', '.env')
});

const CONFIG = {
    SECURITY: {
        SALT_ROUNDS: +process.env.SECURITY_SALT_ROUNDS
    }
};

export default CONFIG;