export * from './errors';
export * from './db-types';
export * from './api';

import { OperaTN } from './api';

async function main() {
    const api = new OperaTN();
    const result = await api.auth.login({username: 'admin', password: 'password'});
    console.log(result)
}
main();
