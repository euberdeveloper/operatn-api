const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { Sesso } = require('@prisma/client');

dotenv.config({
    path: path.join(__dirname, '..', '..', '..', '..', '.env')
});

const client = new Client({
    connectionString: `postgresql://postgres:${process.env.DATABASE_PASSWORD}@localhost:5432/alloggi-opera?schema=public`
});

function getEmail(str) {
    return str.toLowerCase();
}

function capitalize(str) {
    return str.toUpperCase().charAt(0) + str.toLowerCase().slice(1);
}

function getCodiceFiscale(p, documentoIdentitaRaw) {
    return documentoIdentitaRaw.find(el => el.id_anagrafica_persona === p.id)?.codice_fiscale;
}

function getResidenza(p, residenzeRaw) {
    const data = residenzeRaw.find(el => el.id_anagrafica_persona === p.id);
    if (data.id != '781') {
        if (data.indirizzo == null) console.log(data)
        const indirizzo = data.indirizzo.split(',').length > 1 ? data.indirizzo.split(',').slice(0, data.indirizzo.split(',').length - 1).join('').trim() : data.indirizzo;
        const civico = data.indirizzo.split(',').length > 1 ? data.indirizzo.split(',')[data.indirizzo.split(',').length - 1] : '';
        return {
            create: {
                stato: data.stato || 'IGNOTO',
                provincia: data.provincia,
                comune: capitalize(data.comune),
                cap: '' + data.cap,
                indirizzo: indirizzo,
                n_civico: civico
            }
        };
    }
    else {
        return {
            create: {
                stato: 'IGNOTO',
                provincia: 'IGNOTO',
                comune: 'IGNOTO',
                cap: '00000',
                indirizzo: 'IGNOTO',
                n_civico: 'IGNOTO'
            }
        };
    }
}

function getConto(p, anagraficaBancariaRaw) {
    const data = anagraficaBancariaRaw.find(el => el.id_anagrafica_persona === p.id);
    return data ? {
        create: {
            iban: data.iban,
            banca: data.descrizione_banca,
            swift_bic: data.swift_bic,
            aba: data.aba,
            agenzia: data.agenzia,
            transit_code: data.transit_code
        }
    } : undefined;
}

function getDomicilio(p, domicilioRaw) {
    const data = domicilioRaw.find(el => el.id_anagrafica_persona === p.id);
    if (data && data.cap !== null) {
        const indirizzo = data.indirizzo.split(',').length > 1 ? data.indirizzo.split(',').slice(0, data.indirizzo.split(',').length - 1).join('').trim() : data.indirizzo;
        const civico = data.indirizzo.split(',').length > 1 ? data.indirizzo.split(',')[data.indirizzo.split(',').length - 1] : '';
        return {
            createMany: {
                data: [{
                    stato: data?.stato ?? 'IGNOTO',
                    provincia: data?.provincia ?? 'IGNOTO',
                    comune: data.comune ? capitalize(data.comune) : 'IGNOTO',
                    cap: '' + data.cap,
                    indirizzo: indirizzo,
                    n_civico: civico
                }]
            }
        };
    }
    else {
        return undefined;
    }
}

function getDocumento(p, documentoIdentitaRaw) {
    const data = documentoIdentitaRaw.find(el => el.id_anagrafica_persona === p.id);
    return data && data.tipo && data.ente ? {
        create: {
            tipo: data.tipo,
            numero: data.numero,
            ente: data.ente,
            data_scadenza: new Date('1000-01-01'),
            data_rilascio: data.data_rilascio,
            documento: 'FILE'
        }
    } : undefined;
}

function dataToTuple(el) {
    return [
        el?.persona?.create?.nome,
        el?.persona?.create?.cognome,
        el?.persona?.create?.codice_fiscale,
        el?.persona?.create?.sesso,
        el?.persona?.create?.data_nascita,
        el?.email,
        el?.telefono_principale,
        el?.telefono_secondario,
        el?.foto,
        el?.cittadinanza,
        el?.persona?.create?.luogo_di_nascita?.create?.stato,
        el?.persona?.create?.luogo_di_nascita?.create?.provincia,
        el?.persona?.create?.luogo_di_nascita?.create?.comune,
        el?.persona?.create?.residenza?.create?.stato,
        el?.persona?.create?.residenza?.create?.provincia,
        el?.persona?.create?.residenza?.create?.comune,
        el?.persona?.create?.residenza?.create?.cap,
        el?.persona?.create?.residenza?.create?.indirizzo,
        el?.persona?.create?.residenza?.create?.n_civico,
        el?.persona?.create?.domicili?.createMany?.data?.[0].stato,
        el?.persona?.create?.domicili?.createMany?.data?.[0].provincia,
        el?.persona?.create?.domicili?.createMany?.data?.[0].comune,
        el?.persona?.create?.domicili?.createMany?.data?.[0].cap,
        el?.persona?.create?.domicili?.createMany?.data?.[0].indirizzo,
        el?.persona?.create?.domicili?.createMany?.data?.[0].n_civico,
        'DIPARTIMENTO IGNOTO',
        el?.conto_corrente?.create?.iban,
        el?.conto_corrente?.create?.banca,
        el?.conto_corrente?.create?.swift_bic,
        el?.conto_corrente?.create?.aba,
        el?.conto_corrente?.create?.agenzia,
        el?.conto_corrente?.create?.transit_code,
        el?.documento_identita?.create?.tipo,
        el?.documento_identita?.create?.numero,
        el?.documento_identita?.create?.ente,
        el?.documento_identita?.create?.data_scadenza,
        el?.documento_identita?.create?.data_rilascio,
        el?.documento_identita?.create?.documento,
    ];
}

async function main() {
    await client.connect();
    const personeRaw = (await client.query('SELECT * FROM "anagrafica_persona"')).rows.filter(r => r.signature === null && r.id > 2867 && r.cognome !== `STANZA D'EMERGENZA`);
    const residenzeRaw = (await client.query('SELECT * FROM "anagrafica_residenza"')).rows;
    const domicilioRaw = (await client.query('SELECT * FROM "anagrafica_domicilio"')).rows;
    const documentoIdentitaRaw = (await client.query('SELECT * FROM "documento_identita"')).rows;
    const anagraficaBancariaRaw = (await client.query('SELECT * FROM "anagrafica_bancaria"')).rows;

    const ospiti = personeRaw.map(p => ({
        email: getEmail(p.email),
        telefono_principale: p.telefono,
        telefono_secondario: null,
        foto: null,
        dipartimento_unitn: {
            connect: {
                codice: '01D1'
            }
        },
        documento_identita: getDocumento(p, documentoIdentitaRaw),
        conto_corrente: getConto(p, anagraficaBancariaRaw),
        cittadinanza: p.stato_nascita,
        persona: {
            create: {
                nome: capitalize(p.nome),
                cognome: capitalize(p.cognome),
                data_nascita: new Date(p.data_nascita),
                sesso: p.sesso === 'M' ? Sesso.MASCHIO : Sesso.FEMMINA,
                codice_fiscale: getCodiceFiscale(p, documentoIdentitaRaw),
                luogo_di_nascita: {
                    create: {
                        stato: p.stato_nascita,
                        provincia: p.provincia_nascita,
                        comune: capitalize(p.comune_nascita),
                    }
                },
                residenza: getResidenza(p, residenzeRaw),
                domicili: getDomicilio(p, domicilioRaw)
            }
        }
    }));
    fs.writeFileSync(path.join(__dirname, './ospiti.json'), JSON.stringify(ospiti, null, 2));
    await client.end();
}
main();