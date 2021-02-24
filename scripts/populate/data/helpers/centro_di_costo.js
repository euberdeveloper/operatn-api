const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
    path: path.join(__dirname, '..', '..', '..', '..', '.env')
});

const client = new Client({
    connectionString: `postgresql://postgres:${process.env.DATABASE_PASSWORD}@localhost:5432/alloggi-opera?schema=test`
});

function getIdFabbricato(old_code, fabbricatiRaw) {
    return +fabbricatiRaw.find(el => +el.old_code === old_code).id;
}


async function main() {
    await client.connect();
    const fabbricatiRaw = (await client.query('SELECT * FROM test."fabbricato"')).rows;
    
    const text = fs.readFileSync(path.join(__dirname, 'centro_di_costo.csv'), 'utf-8');
    const data = text
        .split('\n')
        .slice(1)
        .map(row => row.split('\t'))
        .filter(row =>  row && row.length > 3)
        .map(el => ({
            id_fabbricato: getIdFabbricato(+el[0], fabbricatiRaw),
            unita_immobiliare: el[2].trim(),
            n_stanza: el[4].trim(),
            centro_di_costo: el[5].trim()
        }));


    for (const el of data) {
        await client.query(`UPDATE test.stanza SET centro_di_costo = '${el.centro_di_costo}' WHERE id_fabbricato = ${el.id_fabbricato} AND unita_immobiliare = '${el.unita_immobiliare}' AND numero_stanza = '${el.n_stanza}'`);
    }

    await client.end();
}
main();