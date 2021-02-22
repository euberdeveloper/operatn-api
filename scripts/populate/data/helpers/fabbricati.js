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
    return str.toUpperCase().charAt(0) + str.toLowerCase().slice(1);
}

function getIndirizzo(str) {
    let words = str.split(' ');
    words = words.slice(0, words.length - 1).map(w => capitalize(w));
    return words.join(' ');
}

function getCivico(str) {
    const words = str.split(' ');
    return words.slice(words.length - 1).join('');
}

async function main() {
    await client.connect();
    const fabbricatiRaw = await client.query('SELECT * FROM "anagrafica_fabbricato" F, "tipo_residenza" T WHERE F.id_tipo_residenza = T.id');
    const fabbricati =  fabbricatiRaw.rows.map(f => ({
        codice: '' + Math.random(),
        nome: f.descrizione_fabbricato,
        provincia: f.provincia,
        comune: capitalize(f.comune),
        indirizzo: getIndirizzo(f.indirizzo),
        numero_civico: getCivico(f.indirizzo),
        cap: '' + f.cap,
        id_tipo_fabbricato: +f.id_tipo_residenza
    }));
    fs.writeFileSync(path.join(__dirname, './fabbricati.json'), JSON.stringify(fabbricati, null, 2));
    await client.end();
}
main();