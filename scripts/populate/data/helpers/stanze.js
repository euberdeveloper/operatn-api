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

function getFabbricato(a, fabbricatiRaw) {
    const f = fabbricatiRaw.find(f => a.id_anagrafica_fabbricato === f.id);
    return {
        connect: {
            old_code: +f.codice_fabbricato
        }
    };
}


async function main() {
    await client.connect();
    const fabbricatiRaw = (await client.query('SELECT * FROM "anagrafica_fabbricato"')).rows;
    const alloggiRaw = (await client.query('SELECT * FROM anagrafica_alloggio A, tipo_stanza T WHERE A.id_tipo_stanza = T.id;'))
        .rows
        .filter(el => el.posto_letto !== 'B' && !(el.numero_stanza === 'EA0C03' && el.validita_dal.toISOString() === '2007-10-31T23:00:00.000Z'));

    const alloggi = alloggiRaw.map(a => ({
        fabbricato: getFabbricato(a, fabbricatiRaw),
        unita_immobiliare: a.codice_unita_immobiliare,
        numero_stanza: a.numero_stanza,
        tipo_stanza: {
            connect: {
                tipo_stanza: a.descrizione
            }
        },
        centro_di_costo: null,
        gestione_diretta: a.gestione_diretta === 'S',
        handicap: a.handicap === 'S',
        bagno: a.presenza_bagno === 'S',
        piano: a.descrizione_piano,
        valida_dal: a.validita_dal ?? new Date('1000-01-01'),
        valida_al: a.validita_al
    }));
    fs.writeFileSync(path.join(__dirname, './stanze.json'), JSON.stringify(alloggi, null, 2));
    await client.end();
}
main();