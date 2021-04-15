const { OperaTN } = require('./bundled');
const api = new OperaTN();

async function main() {
    console.log(await api.auth.login({ username: 'admin', password: 'ciao' }));
}
main();