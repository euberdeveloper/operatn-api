const fs = require('fs');
const path = require('path');
const axios = require('axios');

const isoConv = [{ "iso3": "AF", "iso2": "AFG" },
{ "iso3": "AL", "iso2": "ALB" },
{ "iso3": "DZ", "iso2": "DZA" },
{ "iso3": "AS", "iso2": "ASM" },
{ "iso3": "AD", "iso2": "AND" },
{ "iso3": "AO", "iso2": "AGO" },
{ "iso3": "AI", "iso2": "AIA" },
{ "iso3": "AQ", "iso2": "ATA" },
{ "iso3": "AG", "iso2": "ATG" },
{ "iso3": "AR", "iso2": "ARG" },
{ "iso3": "AM", "iso2": "ARM" },
{ "iso3": "AW", "iso2": "ABW" },
{ "iso3": "AU", "iso2": "AUS" },
{ "iso3": "AT", "iso2": "AUT" },
{ "iso3": "AZ", "iso2": "AZE" },
{ "iso3": "BS", "iso2": "BHS" },
{ "iso3": "BH", "iso2": "BHR" },
{ "iso3": "BD", "iso2": "BGD" },
{ "iso3": "BB", "iso2": "BRB" },
{ "iso3": "BY", "iso2": "BLR" },
{ "iso3": "BE", "iso2": "BEL" },
{ "iso3": "BZ", "iso2": "BLZ" },
{ "iso3": "BJ", "iso2": "BEN" },
{ "iso3": "BM", "iso2": "BMU" },
{ "iso3": "BT", "iso2": "BTN" },
{ "iso3": "BO", "iso2": "BOL" },
{ "iso3": "BQ", "iso2": "BES" },
{ "iso3": "BA", "iso2": "BIH" },
{ "iso3": "BW", "iso2": "BWA" },
{ "iso3": "BV", "iso2": "BVT" },
{ "iso3": "BR", "iso2": "BRA" },
{ "iso3": "IO", "iso2": "IOT" },
{ "iso3": "BN", "iso2": "BRN" },
{ "iso3": "BG", "iso2": "BGR" },
{ "iso3": "BF", "iso2": "BFA" },
{ "iso3": "BI", "iso2": "BDI" },
{ "iso3": "CV", "iso2": "CPV" },
{ "iso3": "KH", "iso2": "KHM" },
{ "iso3": "CM", "iso2": "CMR" },
{ "iso3": "CA", "iso2": "CAN" },
{ "iso3": "KY", "iso2": "CYM" },
{ "iso3": "CF", "iso2": "CAF" },
{ "iso3": "TD", "iso2": "TCD" },
{ "iso3": "CL", "iso2": "CHL" },
{ "iso3": "CN", "iso2": "CHN" },
{ "iso3": "CX", "iso2": "CXR" },
{ "iso3": "CC", "iso2": "CCK" },
{ "iso3": "CO", "iso2": "COL" },
{ "iso3": "KM", "iso2": "COM" },
{ "iso3": "CD", "iso2": "COD" },
{ "iso3": "CG", "iso2": "COG" },
{ "iso3": "CK", "iso2": "COK" },
{ "iso3": "CR", "iso2": "CRI" },
{ "iso3": "HR", "iso2": "HRV" },
{ "iso3": "CU", "iso2": "CUB" },
{ "iso3": "CW", "iso2": "CUW" },
{ "iso3": "CY", "iso2": "CYP" },
{ "iso3": "CZ", "iso2": "CZE" },
{ "iso3": "CI", "iso2": "CIV" },
{ "iso3": "DK", "iso2": "DNK" },
{ "iso3": "DJ", "iso2": "DJI" },
{ "iso3": "DM", "iso2": "DMA" },
{ "iso3": "DO", "iso2": "DOM" },
{ "iso3": "EC", "iso2": "ECU" },
{ "iso3": "EG", "iso2": "EGY" },
{ "iso3": "SV", "iso2": "SLV" },
{ "iso3": "GQ", "iso2": "GNQ" },
{ "iso3": "ER", "iso2": "ERI" },
{ "iso3": "EE", "iso2": "EST" },
{ "iso3": "SZ", "iso2": "SWZ" },
{ "iso3": "ET", "iso2": "ETH" },
{ "iso3": "FK", "iso2": "FLK" },
{ "iso3": "FO", "iso2": "FRO" },
{ "iso3": "FJ", "iso2": "FJI" },
{ "iso3": "FI", "iso2": "FIN" },
{ "iso3": "FR", "iso2": "FRA" },
{ "iso3": "GF", "iso2": "GUF" },
{ "iso3": "PF", "iso2": "PYF" },
{ "iso3": "TF", "iso2": "ATF" },
{ "iso3": "GA", "iso2": "GAB" },
{ "iso3": "GM", "iso2": "GMB" },
{ "iso3": "GE", "iso2": "GEO" },
{ "iso3": "DE", "iso2": "DEU" },
{ "iso3": "GH", "iso2": "GHA" },
{ "iso3": "GI", "iso2": "GIB" },
{ "iso3": "GR", "iso2": "GRC" },
{ "iso3": "GL", "iso2": "GRL" },
{ "iso3": "GD", "iso2": "GRD" },
{ "iso3": "GP", "iso2": "GLP" },
{ "iso3": "GU", "iso2": "GUM" },
{ "iso3": "GT", "iso2": "GTM" },
{ "iso3": "GG", "iso2": "GGY" },
{ "iso3": "GN", "iso2": "GIN" },
{ "iso3": "GW", "iso2": "GNB" },
{ "iso3": "GY", "iso2": "GUY" },
{ "iso3": "HT", "iso2": "HTI" },
{ "iso3": "HM", "iso2": "HMD" },
{ "iso3": "VA", "iso2": "VAT" },
{ "iso3": "HN", "iso2": "HND" },
{ "iso3": "HK", "iso2": "HKG" },
{ "iso3": "HU", "iso2": "HUN" },
{ "iso3": "IS", "iso2": "ISL" },
{ "iso3": "IN", "iso2": "IND" },
{ "iso3": "ID", "iso2": "IDN" },
{ "iso3": "IR", "iso2": "IRN" },
{ "iso3": "IQ", "iso2": "IRQ" },
{ "iso3": "IE", "iso2": "IRL" },
{ "iso3": "IM", "iso2": "IMN" },
{ "iso3": "IL", "iso2": "ISR" },
{ "iso3": "IT", "iso2": "ITA" },
{ "iso3": "JM", "iso2": "JAM" },
{ "iso3": "JP", "iso2": "JPN" },
{ "iso3": "JE", "iso2": "JEY" },
{ "iso3": "JO", "iso2": "JOR" },
{ "iso3": "KZ", "iso2": "KAZ" },
{ "iso3": "KE", "iso2": "KEN" },
{ "iso3": "KI", "iso2": "KIR" },
{ "iso3": "KP", "iso2": "PRK" },
{ "iso3": "KR", "iso2": "KOR" },
{ "iso3": "KW", "iso2": "KWT" },
{ "iso3": "KG", "iso2": "KGZ" },
{ "iso3": "LA", "iso2": "LAO" },
{ "iso3": "LV", "iso2": "LVA" },
{ "iso3": "LB", "iso2": "LBN" },
{ "iso3": "LS", "iso2": "LSO" },
{ "iso3": "LR", "iso2": "LBR" },
{ "iso3": "LY", "iso2": "LBY" },
{ "iso3": "LI", "iso2": "LIE" },
{ "iso3": "LT", "iso2": "LTU" },
{ "iso3": "LU", "iso2": "LUX" },
{ "iso3": "MO", "iso2": "MAC" },
{ "iso3": "MG", "iso2": "MDG" },
{ "iso3": "MW", "iso2": "MWI" },
{ "iso3": "MY", "iso2": "MYS" },
{ "iso3": "MV", "iso2": "MDV" },
{ "iso3": "ML", "iso2": "MLI" },
{ "iso3": "MT", "iso2": "MLT" },
{ "iso3": "MH", "iso2": "MHL" },
{ "iso3": "MQ", "iso2": "MTQ" },
{ "iso3": "MR", "iso2": "MRT" },
{ "iso3": "MU", "iso2": "MUS" },
{ "iso3": "YT", "iso2": "MYT" },
{ "iso3": "MX", "iso2": "MEX" },
{ "iso3": "FM", "iso2": "FSM" },
{ "iso3": "MD", "iso2": "MDA" },
{ "iso3": "MC", "iso2": "MCO" },
{ "iso3": "MN", "iso2": "MNG" },
{ "iso3": "ME", "iso2": "MNE" },
{ "iso3": "MS", "iso2": "MSR" },
{ "iso3": "MA", "iso2": "MAR" },
{ "iso3": "MZ", "iso2": "MOZ" },
{ "iso3": "MM", "iso2": "MMR" },
{ "iso3": "NA", "iso2": "NAM" },
{ "iso3": "NR", "iso2": "NRU" },
{ "iso3": "NP", "iso2": "NPL" },
{ "iso3": "NL", "iso2": "NLD" },
{ "iso3": "NC", "iso2": "NCL" },
{ "iso3": "NZ", "iso2": "NZL" },
{ "iso3": "NI", "iso2": "NIC" },
{ "iso3": "NE", "iso2": "NER" },
{ "iso3": "NG", "iso2": "NGA" },
{ "iso3": "NU", "iso2": "NIU" },
{ "iso3": "NF", "iso2": "NFK" },
{ "iso3": "MP", "iso2": "MNP" },
{ "iso3": "NO", "iso2": "NOR" },
{ "iso3": "OM", "iso2": "OMN" },
{ "iso3": "PK", "iso2": "PAK" },
{ "iso3": "PW", "iso2": "PLW" },
{ "iso3": "PS", "iso2": "PSE" },
{ "iso3": "PA", "iso2": "PAN" },
{ "iso3": "PG", "iso2": "PNG" },
{ "iso3": "PY", "iso2": "PRY" },
{ "iso3": "PE", "iso2": "PER" },
{ "iso3": "PH", "iso2": "PHL" },
{ "iso3": "PN", "iso2": "PCN" },
{ "iso3": "PL", "iso2": "POL" },
{ "iso3": "PT", "iso2": "PRT" },
{ "iso3": "PR", "iso2": "PRI" },
{ "iso3": "QA", "iso2": "QAT" },
{ "iso3": "MK", "iso2": "MKD" },
{ "iso3": "RO", "iso2": "ROU" },
{ "iso3": "RU", "iso2": "RUS" },
{ "iso3": "RW", "iso2": "RWA" },
{ "iso3": "RE", "iso2": "REU" },
{ "iso3": "BL", "iso2": "BLM" },
{ "iso3": "SH", "iso2": "SHN" },
{ "iso3": "KN", "iso2": "KNA" },
{ "iso3": "LC", "iso2": "LCA" },
{ "iso3": "MF", "iso2": "MAF" },
{ "iso3": "PM", "iso2": "SPM" },
{ "iso3": "VC", "iso2": "VCT" },
{ "iso3": "WS", "iso2": "WSM" },
{ "iso3": "SM", "iso2": "SMR" },
{ "iso3": "ST", "iso2": "STP" },
{ "iso3": "SA", "iso2": "SAU" },
{ "iso3": "SN", "iso2": "SEN" },
{ "iso3": "RS", "iso2": "SRB" },
{ "iso3": "RS", "iso2": "SER" },
{ "iso3": "SC", "iso2": "SYC" },
{ "iso3": "SL", "iso2": "SLE" },
{ "iso3": "SG", "iso2": "SGP" },
{ "iso3": "SX", "iso2": "SXM" },
{ "iso3": "SK", "iso2": "SVK" },
{ "iso3": "SI", "iso2": "SVN" },
{ "iso3": "SB", "iso2": "SLB" },
{ "iso3": "SO", "iso2": "SOM" },
{ "iso3": "ZA", "iso2": "ZAF" },
{ "iso3": "GS", "iso2": "SGS" },
{ "iso3": "SS", "iso2": "SSD" },
{ "iso3": "ES", "iso2": "ESP" },
{ "iso3": "LK", "iso2": "LKA" },
{ "iso3": "SD", "iso2": "SDN" },
{ "iso3": "SR", "iso2": "SUR" },
{ "iso3": "SJ", "iso2": "SJM" },
{ "iso3": "SE", "iso2": "SWE" },
{ "iso3": "CH", "iso2": "CHE" },
{ "iso3": "SY", "iso2": "SYR" },
{ "iso3": "TW", "iso2": "TWN" },
{ "iso3": "TJ", "iso2": "TJK" },
{ "iso3": "TZ", "iso2": "TZA" },
{ "iso3": "TH", "iso2": "THA" },
{ "iso3": "TL", "iso2": "TLS" },
{ "iso3": "TG", "iso2": "TGO" },
{ "iso3": "TK", "iso2": "TKL" },
{ "iso3": "TO", "iso2": "TON" },
{ "iso3": "TT", "iso2": "TTO" },
{ "iso3": "TN", "iso2": "TUN" },
{ "iso3": "TR", "iso2": "TUR" },
{ "iso3": "TM", "iso2": "TKM" },
{ "iso3": "TC", "iso2": "TCA" },
{ "iso3": "TV", "iso2": "TUV" },
{ "iso3": "UG", "iso2": "UGA" },
{ "iso3": "UA", "iso2": "UKR" },
{ "iso3": "AE", "iso2": "ARE" },
{ "iso3": "GB", "iso2": "GBR" },
{ "iso3": "UM", "iso2": "UMI" },
{ "iso3": "US", "iso2": "USA" },
{ "iso3": "UY", "iso2": "URY" },
{ "iso3": "UZ", "iso2": "UZB" },
{ "iso3": "VU", "iso2": "VUT" },
{ "iso3": "VE", "iso2": "VEN" },
{ "iso3": "VN", "iso2": "VNM" },
{ "iso3": "VG", "iso2": "VGB" },
{ "iso3": "VI", "iso2": "VIR" },
{ "iso3": "WF", "iso2": "WLF" },
{ "iso3": "EH", "iso2": "ESH" },
{ "iso3": "YE", "iso2": "YEM" },
{ "iso3": "ZM", "iso2": "ZMB" },
{ "iso3": "ZW", "iso2": "ZWE" },
{ "iso3": "AX", "iso2": "ALA" }]
    ;
function getCodiceIsoFromThreeLetters(lett) {
    try {
        if (lett.length === 2) return lett;
        const tuple = isoConv.find(el => el.iso2 === lett)
        if (!tuple) throw new Error('shit')
        return tuple.iso3;

    }
    catch (error) {
        throw new Error('ciao');
    }
}

function parseData(data) {
    const parts = data.split(' ')[0].split('/').reverse().map(el => el.length === 1 ? `0${el}` : el);
    const anno = parts[0].length === 2 ? +parts[0] > 21 ? `19${parts[0]}` : `20${parts[0]}` : parts[0];
    return new Date(`${anno}-${parts[2]}-${parts[1]}`)
}

let comuni;
async function fillComuni() {
    const result = await axios.get(`http://localhost:3000/api/comuni`, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjY2NTczNS03MzhmLTRhZDYtOGZiZi1hMGVkOTA5OTU0NzgiLCJpYXQiOjE2MTk3MDYzNDksImV4cCI6MTYyMjM4NDc0OX0.81qUdzHTzHZ2cMszhKoxvd9X0UZb82vMcgLQrqXkmO4' } });
    return result.data;
}


function getComuneByDenominazione(denominazione) {
    const result = comuni.find(c => c.denominazione === denominazione);
    if (result) return result;
    throw new Error('Errore in trovare comune', denominazione)
}

function parseIndirizzo(indirizzo) {
    const parts = indirizzo.split(',');
    indirizzo = parts.slice(0, parts.length - 1).join(',').trim() || parts[0];
    const nCivico = parts.length > 1 ? parts[parts.length - 1].trim() : '-';
    return { indirizzo, nCivico };
}

function parseResidenzaBarbari(localita) {
    try {
        return localita.split('-')[1].trim();
    }
    catch (error) {
        return localita.trim();
    }
}

function getParts(localita) {
    let parts = [localita, ...localita.split('-').reverse(), ...localita.split('/').reverse()].map(el => el.trim());
    parts = [...parts, ...(parts.map(el => el.replace('ARZIGNANO VI', 'ARZIGNANO').replace('AQUILA', `L'AQUILA`).replace(/\(\w\w\)/g, '').replace("POVO DI TRENTO", 'TRENTO').replace("REGGIO EMILIA", "REGGIO NELL'EMILIA").replace("REGGIO CALABRIA", "REGGIO DI CALABRIA").replace("VIGNOLA (MO)", "VIGNOLA").replace(/\\'/, "'").replace(/O'/g, 'Ò').replace(/E'/g, 'È').replace(/I'/g, 'Ì').replace(/A'/g, 'À').replace(/U'/g, 'Ù').replace("ROVERETO (TN)", "ROVERETO").trim()))]
    return parts;
}

async function residenza(data) {
    const stato = getCodiceIsoFromThreeLetters(data.residenzaStato);
    if (stato === 'IT') {
        let com;
        {
            try {
                com = await getComuneByDenominazione(data.residenzaLocalita.trim());
            }
            catch (e) {
                let parts = getParts(data.residenzaLocalita);
                let ok = false;
                for (const part of parts) {
                    try {
                        com = await getComuneByDenominazione(part.trim());
                        ok = true;
                        break;
                    }
                    catch (e) { }
                }
                if (!ok) {
                    console.log('e denominaz', data.residenzaLocalita)
                    throw new Error('aia')
                }

            }
        }
        return {
            stato,
            provincia: data.residenzaProv,
            comune: com.denominazione,
            istatComune: com.codiceIstat,
            cap: data.residenzaCap,
            ...parseIndirizzo(data.residenzaIndirizzo)
        };
    }
    else {
        return {
            stato,
            provincia: null,
            comune: parseResidenzaBarbari(data.residenzaLocalita.trim()),
            istatComune: null,
            cap: null,
            ...parseIndirizzo(data.residenzaIndirizzo)
        };
    }
}
async function luogoDiNascita(data) {
    const stato = getCodiceIsoFromThreeLetters(data.nascitaStato);
    if (stato === 'IT') {
        let com;
        if (data.nascitaLocalita === 'ITALIA') data.nascitaLocalita = data.residenzaLocalita
        try {
            com = await getComuneByDenominazione(data.nascitaLocalita.trim());
        }
        catch (e) {
            let parts = getParts(data.nascitaLocalita);
            let ok = false;
            for (const part of parts) {
                try {
                    com = await getComuneByDenominazione(part.trim());
                    ok = true;
                    break;
                }
                catch (e) { }
            }
            if (!ok) {
                console.log('e luog' + data.nascitaStato, data.nascitaLocalita)
                throw new Error('aia')
            }

        }
        return {
            stato,
            provincia: data.nascitaProv,
            comune: com.denominazione,
            istatComune: com.codiceIstat,
        };
    }
    else {
        return {
            stato,
            provincia: null,
            comune: data.nascitaLocalita,
            istatComune: null,
        };
    }
}

const tipiDocs = {
    'CI': 'CARTA_IDENTITA',
    'PT': 'PATENTE',
    'PS': 'PASSAPORTO'
}
function documentoIdentita(data) {
    if (data.documentoTipo == null) data.documentoTipo = 'CI';
    if (data.documentoTipo === 'SG') return null;
    if (data.documentoTipo) {
        return {
            tipo: tipiDocs[data.documentoTipo],
            numero: data.documentoNumero,
            ente: data.documentoAutorita,
            dataScadenza: new Date('3000-01-01'),
            dataRilascio: parseData(data.documentoRilascio)
        }
    }
    else {
        return null;
    }
}
function contoCorrente(data) {
    try {
        let conto = (data.ibanPart0 || '') + (data.ibanPart1 || '') + (data.ibanPart2 || '') + (data.ibanPart3 || '') + (data.ibanPart4 || '') + (data.ibanPart5 || '') + ((data.ibanPart6) || '');
        conto = conto ? conto.trim() : conto
        if (conto.length !== 27) return null;
        if (!/^[\w]+$/.test(conto)) return null;
        return {
            banca: data.banca || '-',
            iban: conto
        };
    }
    catch (err) { return null; }
}
function parseTel(part0, part1, part2) {
    let tel = (part0 || '') + (part1 || '') + (part2 || '');
    return tel || null;
}

const text = fs.readFileSync(path.join(__dirname, 'ospiti_3_la_rivendentta.csv'), 'utf-8');
const rows = text.split('\n').slice(1).filter(el => !!el).map(row => row.split('\t').map(el => !!el ? el : null));
const data = rows.map(row => ({
    cognome: row[0],
    nome: row[1],
    codiceFiscale: row[2],
    sesso: row[3],
    telefonoPrincipalePart0: row[4],
    telefonoPrincipalePart1: row[5],
    telefonoPrincipalePart2: row[6],
    telefonoSecondarioPart0: row[7],
    telefonoSecondarioPart1: row[8],
    telefonoSecondarioPart2: row[9],
    cittadinanza: row[10],
    dataDiNascita: row[11],
    _cap_nascita: row[12],
    nascitaLocalita: row[13],
    nascitaProv: row[14],
    nascitaStato: row[15],
    residenzaIndirizzo: row[16],
    residenzaCap: row[17],
    residenzaLocalita: row[18],
    residenzaProv: row[19],
    residenzaStato: row[20],
    domicilioIndirizzo: row[21],
    domicilioCap: row[22],
    domicilioLocalita: row[23],
    domicilioProv: row[24],
    documentoTipo: row[25],
    documentoRilascio: row[26],
    documentoAutorita: row[27],
    documentoNumero: row[28],
    _cod_facoltà: row[29],
    email: row[30],
    banca: row[31],
    ibanPart0: row[32],
    ibanPart1: row[33],
    ibanPart2: row[34],
    ibanPart3: row[35],
    ibanPart4: row[36],
    ibanPart5: row[37],
    ibanPart6: row[38]
}))/*.filter(el => el._cap_nascita !== '11111')*/;

async function main() {
    let errati_residenza = []
    let errati_altro = []
    let presenti_per_giada = []
    let presenti_per_db = []
    let conto_corrente = []
    comuni = await fillComuni();
    let ospitiTTT = (await axios.get(`http://localhost:3000/api/ospiti?contoCorrente=true`, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjY2NTczNS03MzhmLTRhZDYtOGZiZi1hMGVkOTA5OTU0NzgiLCJpYXQiOjE2MTk3MDYzNDksImV4cCI6MTYyMjM4NDc0OX0.81qUdzHTzHZ2cMszhKoxvd9X0UZb82vMcgLQrqXkmO4' } })).data;
    ospiti = ospitiTTT.reduce((result, ospite) => {
        const email = ospite.email.toLocaleLowerCase().trim();
        result[email] = { id: ospite.id, idGiada: ospite.idGiada, contoCorrente: ospite.contoCorrente };
        return result;
    }, {});
    const bodies = [];
    let i = 0;
    console.log('LENGTH', data.length)
    for (const d of data) {
        let res, luog;
        try {
            res = (await residenza(d));
            luog = (await luogoDiNascita(d));
        }
        catch (error) {
            console.log(error);
            console.log(d.residenzaStato + '///' + d.nascitaStato + '///' + d.residenzaLocalita + ' /// ' + d.nascitaLocalita)
            errati_residenza.push(d)
            continue;
        }
        const documento = documentoIdentita(d)
        const email = d.email ? d.email.toLocaleLowerCase().trim() : null;
        if (ospiti[email] && ospiti[email].idGiada !== null) {
            presenti_per_giada.push(d);
            continue;
        }
        const nome = d.nome.trim();
        const cognome = d.cognome.trim();
        const dataNascita = parseData(d.dataDiNascita);
        const ospiteDB = ospitiTTT.find(o => o.nome === nome && o.cognome === cognome && +new Date(o.dataDiNascita) == +dataNascita)
        if (ospiteDB) {
            presenti_per_db.push({ id: ospiteDB.id, d })
            if (!ospiteDB.contoCorrente) {
                conto_corrente.push({ id: ospiteDB.id, d })

            }
            continue;
        }
        if (res && res.stato && email && (res.stato !== 'IT' || res.cap?.length === 5) && !~d.codiceFiscale.indexOf(' ') && res.indirizzo && res.comune && res.nCivico && res.provincia !== '--' && d.codiceFiscale.match(/^[\d\w]+$/) && documento?.numero && documento?.ente && d.codiceFiscale.length === 16 && email.indexOf('@') !== -1) {
            try {
                bodies.push({
                    idGiada: null,
                    codiceFiscale: d.codiceFiscale,
                    nome: d.nome.trim(),
                    cognome: d.cognome.trim(),
                    sesso: d.sesso === 'M' ? 'MASCHIO' : 'FEMMINA',
                    dataDiNascita: parseData(d.dataDiNascita),
                    domicili: [],
                    residenza: res,
                    luogoDiNascita: luog,
                    email,
                    telefonoPrincipale: parseTel(d.telefonoPrincipalePart0, d.telefonoPrincipalePart1, d.telefonoPrincipalePart2) || null,
                    telefonoSecondario: parseTel(d.telefonoSecondarioPart0, d.telefonoSecondarioPart1, d.telefonoSecondarioPart2) || null,
                    cittadinanza: d.cittadinanza || d.nascitaStato,
                    codiceDipartimentoUnitn: null,
                    contoCorrente: contoCorrente(data),
                    documentoIdentita: documento
                })
            }
            catch (error) {
                console.log('FAESEEEEEEE AAAAAAAA')
                console.log(error)
            }
        }
        else {
            errati_altro.push(d);
        }
    }
    for (const body of bodies) {
        console.log(i++)
        try {
            await axios.post(`http://localhost:3000/api/ospiti`, body, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjY2NTczNS03MzhmLTRhZDYtOGZiZi1hMGVkOTA5OTU0NzgiLCJpYXQiOjE2MTk3MDYzNDksImV4cCI6MTYyMjM4NDc0OX0.81qUdzHTzHZ2cMszhKoxvd9X0UZb82vMcgLQrqXkmO4' } });

        }
        catch (error) {
            console.log(body)
            throw new Error();
        }
    }
    let j = 0;
    for (const b of conto_corrente) {
        console.log(j++)

        const d = b.d;
        const id = b.id;
        const conto = contoCorrente(d)
        if (conto) {
            try {
                await axios.patch(`http://localhost:3000/api/ospiti/${id}`, { contoCorrente: conto }, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjY2NTczNS03MzhmLTRhZDYtOGZiZi1hMGVkOTA5OTU0NzgiLCJpYXQiOjE2MTk3MDYzNDksImV4cCI6MTYyMjM4NDc0OX0.81qUdzHTzHZ2cMszhKoxvd9X0UZb82vMcgLQrqXkmO4' } });
            }
            catch (error) {
                console.log({ id, d})
                throw new Error();
            }
        }

    }

    fs.writeFileSync('ospiti_errati_residenza_bis3.json', JSON.stringify(errati_residenza))
    fs.writeFileSync('ospiti_errati_altro_bis3.json', JSON.stringify(errati_altro))
    fs.writeFileSync('ospiti_presenti_per_giada_bis3.json', JSON.stringify(presenti_per_giada))
    fs.writeFileSync('ospiti_presenti_per_db_bis3.json', JSON.stringify(presenti_per_db))
}
main();


async function fixIstatComune() {
    comuni = await fillComuni();
    let ospiti = (await axios.get(`http://localhost:3000/api/ospiti?persona.residenza=true&persona.luogoDiNascita=true`, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjY2NTczNS03MzhmLTRhZDYtOGZiZi1hMGVkOTA5OTU0NzgiLCJpYXQiOjE2MTk3MDYzNDksImV4cCI6MTYyMjM4NDc0OX0.81qUdzHTzHZ2cMszhKoxvd9X0UZb82vMcgLQrqXkmO4' } })).data;
    for (const o of ospiti) {
        if (o.residenza && o.residenza.provincia !== null && o.residenza.istatComune === null) {
            const comune = getComuneByDenominazione(o.residenza.comune);
            await axios.patch(`http://localhost:3000/api/ospiti/${o.id}`, { residenza: {...o.residenza, istatComune: comune.codiceIstat, id: undefined } }, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjY2NTczNS03MzhmLTRhZDYtOGZiZi1hMGVkOTA5OTU0NzgiLCJpYXQiOjE2MTk3MDYzNDksImV4cCI6MTYyMjM4NDc0OX0.81qUdzHTzHZ2cMszhKoxvd9X0UZb82vMcgLQrqXkmO4' } });
        }
        if (o.luogoDiNascita && o.luogoDiNascita.provincia !== null && o.luogoDiNascita.istatComune === null) {
            const comune = getComuneByDenominazione(o.luogoDiNascita.comune);
            await axios.patch(`http://localhost:3000/api/ospiti/${o.id}`, { luogoDiNascita: {...o.luogoDiNascita, istatComune: comune.codiceIstat, id: undefined } }, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjY2NTczNS03MzhmLTRhZDYtOGZiZi1hMGVkOTA5OTU0NzgiLCJpYXQiOjE2MTk3MDYzNDksImV4cCI6MTYyMjM4NDc0OX0.81qUdzHTzHZ2cMszhKoxvd9X0UZb82vMcgLQrqXkmO4' } });
        }
    }
    
}
// fixIstatComune()