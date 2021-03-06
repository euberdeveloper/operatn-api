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
const client2 = new Client({
    connectionString: `postgresql://postgres:${process.env.DATABASE_PASSWORD}@localhost:5432/alloggi-opera?schema=test`
});

function getFabbricato(a, fabbricatiRaw) {
    const f = fabbricatiRaw.find(f => a.id_anagrafica_fabbricato === f.id);
    return {
        connect: {
            oldCode: +f.codice_fabbricato
        }
    };
}

function getIdFabbricato(a, fabbricatiRaw, fabbricatiNewRaw) {
    const f = +fabbricatiRaw.find(f => a.id_anagrafica_fabbricato === f.id).codice_fabbricato;
    return +fabbricatiNewRaw.find(el => +el.old_code === f).id;
}


async function main() {
    await client.connect();
    await client2.connect();
    const fabbricatiRaw = (await client.query('SELECT * FROM "anagrafica_fabbricato"')).rows;
    const fabbricatiNewRaw = (await client2.query('SELECT * FROM test.fabbricato')).rows;
    const alloggiRaw = (await client.query('SELECT * FROM anagrafica_alloggio A, tipo_stanza T WHERE A.id_tipo_stanza = T.id;'))
        .rows
        .filter(el => el.posto_letto !== 'B' && !(el.numero_stanza === 'EA0C03' && el.validita_dal.toISOString() === '2007-10-31T23:00:00.000Z'));

    const alloggi = alloggiRaw.map(a => ({
        fabbricato: getFabbricato(a, fabbricatiRaw),
        unitaImmobiliare: a.codice_unita_immobiliare,
        numeroStanza: a.numero_stanza,
        tipoStanza: {
            connect: {
                tipoStanza: a.descrizione
            }
        },
        centroDiCosto: null,
        gestioneDiretta: a.gestione_diretta === 'S',
        handicap: a.handicap === 'S',
        bagno: a.presenza_bagno === 'S',
        piano: a.descrizione_piano,
        validaDal: a.validita_dal ?? new Date('1000-01-01'),
        validaAl: a.validita_al
    }));
    const postiLetto = [];
    for (const a of alloggiRaw) {
        if (a.postoLetto === '') {
            postiLetto.push({
                stanza: {
                    connect: {
                        idFabbricatoUnitaImmobiliareNumeroStanza: {
                            idFabbricato: getIdFabbricato(a, fabbricatiRaw, fabbricatiNewRaw),
                            unitaImmobiliare: a.codice_unita_immobiliare,
                            numeroStanza: a.numero_stanza
                        }
                    }
                },
                postoLetto: 'A'
            });
        }
        else {
            postiLetto.push({
                stanza: {
                    connect: {
                        idFabbricatoUnitaImmobiliareNumeroStanza: {
                            idFabbricato: getIdFabbricato(a, fabbricatiRaw, fabbricatiNewRaw),
                            unitaImmobiliare: a.codice_unita_immobiliare,
                            numeroStanza: a.numero_stanza
                        }
                    }
                },
                posto_letto: 'A'
            });
            postiLetto.push({
                stanza: {
                    connect: {
                        idFabbricatoUnitaImmobiliareNumeroStanza: {
                            idFabbricato: getIdFabbricato(a, fabbricatiRaw, fabbricatiNewRaw),
                            unitaImmobiliare: a.codice_unita_immobiliare,
                            numeroStanza: a.numero_stanza
                        }
                    }
                },
                posto_letto: 'B'
            });
        }
    }
    fs.writeFileSync(path.join(__dirname, './stanze.json'), JSON.stringify(alloggi, null, 2));
    fs.writeFileSync(path.join(__dirname, './posti_letto.json'), JSON.stringify(postiLetto, null, 2));
    await client.end();
    await client2.end();
}
main();