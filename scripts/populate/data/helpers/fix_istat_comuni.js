const axios = require('axios');

function addCiphers(istat) {
    const missing = 6 - istat.length;
    return [...Array(missing)].map(() => '0').join('') + istat;
}

async function main() {
    const comuni = (await axios.get(`http://localhost:3000/api/comuni`, { headers: { Authorization: 'SECRETS' } })).data;
    const noGoodComuni = comuni.filter(c => c.codiceIstat.length !== 6);
    for (const c of noGoodComuni) {
        console.log(c)
        const rightIstat = addCiphers(c.codiceIstat);
        await axios.patch(`http://localhost:3000/api/comuni/${c.id}`, { codiceIstat: rightIstat}, { headers: { Authorization: 'SECRETS' } })
    }
}
main();
