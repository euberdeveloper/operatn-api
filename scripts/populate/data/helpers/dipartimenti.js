const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
    path: path.join(__dirname, '..', '..', '..', '..', '.env')
});

const client = new Client({
    connectionString: `postgresql://postgres:${process.env.DATABASE_PASSWORD}@localhost:5432/alloggi-opera?schema=public`
});

function capitalize(str) {
    return str.toUpperCase().charAt(0) + str.toLowerCase().slice(1).trim();
}

function getSigla(str) {
    const parts = str.split(' - ');
    return parts.length > 1 ? parts[1].trim() : null;
}

function getNome(str) {
    return str.split(' - ')[0].trim();
}

function getVia(str) {
    return str.split(' ').slice(0, str.split(' ').length - 1).join(' ').trim();
}

function getCivico(str) {
    return str.split(' ')[str.split(' ').length - 1].trim();
}

function getSito(str) {
    return str.replace('http://', 'https://').trim();
}

async function main() {
    await client.connect();
    const dipartimentiRaw = await client.query('SELECT * FROM unitn_dipartimenti');
    const dipartimenti = dipartimentiRaw.rows.map(d => ({
        codice: d.codice,
        sigla: getSigla(d.descrizione),
        nome: getNome(d.descrizione),
        comune: capitalize(d.citta),
        cap: '' + d.cap,
        indirizzo: getVia(d.via),
        n_civico: getCivico(d.via),
        provincia: d.prov,
        sito_web: getSito(d.url_sito_web)
    }));
    fs.writeFileSync(path.join(__dirname, './dipartimenti.json'), JSON.stringify(dipartimenti, null, 2));
    await client.end();
}
main();