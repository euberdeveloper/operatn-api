const fs = require('fs');
const path = require('path');
const axios = require('axios');

function parseData(data) {
    const parts = data.split('/').reverse().map(el => el.length === 1 ? `0${el}` : el);
    return new Date(`${parts[0]}-${parts[2]}-${parts[1]}`)
}

async function getComuneByCodiceCat(codice) {
    const result = await axios.get(`http://localhost:3000/api/comuni/codice-catastale/${codice}`, { headers: { Authorization: 'SECRETS' } });
    return result.data;
}

function domicili(data) {
    // const stato = data.recapitoStato;
    // if (stato === 'IT') {
    //     return {
    //         stato,
    //         provincia: data.recapitoProv,
    //         comune: getComuneByCodiceCat(codiceCat),
    //         istatComune: getIstatByCodiceCat(codiceCat),
    //         cap: data.recapitoCap,
    //         indirizzo: data.recapitoVia,
    //         nCivico: data.recapitoNumero,
    //     };
    // }
    // else {
    //     return {
    //         stato,
    //         provincia: null,
    //         comune: data.recapitoLocalita,
    //         istatComune: null,
    //         cap: null,
    //         indirizzo: data.recapitoVia,
    //         nCivico: data.recapitoNumero,
    //     };
    // }
    return [];
}
async function residenza(data) {
    const stato = data.residenzaStato;
    if (stato === 'IT') {
        const com = await getComuneByCodiceCat(data.residenzaCodCast);
        return {
            stato,
            provincia: data.residenzaProv,
            comune: com.denominazione,
            istatComune: com.istatComune,
            cap: data.residenzaCap,
            indirizzo: data.residenzaVia,
            nCivico: data.residenzaNumero,
        };
    }
    else {
        return {
            stato,
            provincia: null,
            comune: data.residenzaLocalita,
            istatComune: null,
            cap: null,
            indirizzo: data.residenzaVia,
            nCivico: data.residenzaNumero,
        };
    }
}
async function luogoDiNascita(data) {
    const stato = data.nascitaStato;
    if (stato === 'IT') {
        const com = await getComuneByCodiceCat(data.nascitaCodCat);
        return {
            stato,
            provincia: data.nascitaProv,
            comune: com.denominazione,
            istatComune: com.istatComune
        };
    }
    else {
        return {
            stato,
            provincia: null,
            comune: data.nascitaLuogo,
            istatComune: null
        };
    }
}
function contoCorrente(data) {
    if (data.bancaAbi === null) {
        return null;
    }

    return {
        iban: data.bancaIBAN,
        banca: data.bancaDescrizione !== '-' ? data.bancaDescrizione : null
    }
}

function documentoIdentita(data) {
    if (data.documentoTipo) {
        return {
            tipo: data.documentoTipo,
            numero: data.documentoNumero,
            ente: data.documentoAutorita,
            dataScadenza: new Date('3000-01-01'),
            dataRilascio: parseData(data.documentoDataRilascio)
        }
    }
    else {
        return null;
    }
}

const text = fs.readFileSync(path.join(__dirname, 'persone.csv'), 'utf-8');
const rows = text.split('\n').slice(1).filter(el => !!el).map(row => row.split('\t').map(el => !!el ? el : null));
const data = rows.map(row => ({
    idGiada: +row[0],
    codiceFiscale: row[1],
    nome: row[3],
    cognome: row[2],
    sesso: row[4],
    dataDiNascita: row[5],
    nascitaCodCat: row[6],
    nascitaDesc: row[7],
    codiceCittadinanza: row[8],
    email: row[9],
    numeroTelefono: row[10],
    residenzaCodCast: row[11],
    residenzaDesc: row[12],
    residenzaVia: row[13],
    residenzaNumero: row[14],
    residenzaLocalita: row[15],
    residenzaCap: row[16],
    recapitoCodiceCat: row[17],
    recapitoDesc: row[18],
    recapitoVia: row[19],
    recapitoNumero: row[20],
    recapitoLocalita: row[21],
    recapitoCap: row[22],
    nascitaStato: row[23],
    nascitaProv: row[24],
    documentoTipo: row[25],
    documentoNumero: row[26],
    documentoDataRilascio: row[27],
    documentoAutorita: row[28],
    bancaAppoggio: row[29],
    bancaAbi: row[30],
    bancaCab: row[31],
    bancaDescrizione: row[32],
    bancaCin: row[33],
    bancaConto: row[34],
    bancaIso: row[35],
    bancaCheck: row[36],
    bancaIBAN: row[37],
    residenzaStato: row[38],
    recapitoStato: row[39],
    recapitoProv: row[40],
    residenzaProv: row[41],
    nascitaLuogo: row[42]
}));


async function main() {
    const bodies = [];
    let i = 0;
    for (const d of data) {
        let res, luog;
        try {
            res = (await residenza(d));
            luog = (await luogoDiNascita(d));
        }
        catch (error) {
            console.log(d.residenzaCodCast)
        }
        if (res && res.stato && d.email && res.indirizzo && res.nCivico) {
            bodies.push({
                idGiada: +d.idGiada,
                codiceFiscale: d.codiceFiscale,
                nome: d.nome,
                cognome: d.cognome,
                sesso: d.sesso === 'M' ? 'MASCHIO' : 'FEMMINA',
                dataDiNascita: parseData(d.dataDiNascita),
                domicili: [],
                residenza: res,
                luogoDiNascita: luog,
                email: d.email,
                telefonoPrincipale: d.numeroTelefono,
                telefonoSecondario: null,
                cittadinanza: d.codiceCittadinanza,
                codiceDipartimentoUnitn: null,
                contoCorrente: contoCorrente(d),
                documentoIdentita: documentoIdentita(d)
            })
        }
    }
    for (const body of bodies) {
        console.log(i++)
        try{
        await axios.post(`http://localhost:3000/api/ospiti`, body, { headers: { Authorization: 'SECRETS' } });

        }
        catch (error) {
            console.log(body)
            throw new Error();
        }
    }
}
main();
