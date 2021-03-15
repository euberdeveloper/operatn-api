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
    console.log(lett)
    try {
        const tuple = isoConv.find(el => el.iso2 === lett)
        if (!tuple) throw new Error('shit')
        return tuple.iso3;

    }
    catch (error) {
        throw new Error('ciao');
    }
}

async function prov() {
    const text = fs.readFileSync(path.join(__dirname, 'prov.csv'), 'utf-8');
    const rows = text.split('\n').slice(1).filter(el => !!el).map(row => row.split(',').map(el => !!el ? el : null));
    const province = rows.map(row => ({
        sigla: row[5].trim(),
        denominazione: row[1].trim(),
        regione: row[7].trim(),
        codiceStato: 'IT',
    }));
    for (const provincia of province) {
        await axios.post('http://localhost:3000/api/province', provincia, { headers: { Authorization:'SECRET' }});
    }
}

async function stato() {
    const text = fs.readFileSync(path.join(__dirname, 'stato.csv'), 'utf-8');
    const rows = text.split('\n').slice(1).filter(el => !!el).map(row => row.split(',').map(el => !!el ? el : null));
    const stati = rows.filter(row => !!row[5]).map(row => ({
        codiceIso: getCodiceIsoFromThreeLetters(row[5]),
        codiceStato: row[1].trim(),
        codiceIstat: row[7].trim(),
        denominazione: row[2].trim()
    }));
    for (const stato of stati) {
        await axios.post('http://localhost:3000/api/stati', stato, { headers: { Authorization:'SECRET' }});
    }

}

async function comune() {
    const text = fs.readFileSync(path.join(__dirname, 'com.csv'), 'utf-8');
    const rows = text.split('\n').slice(1).filter(el => !!el).map(row => row.split(',').map(el => !!el ? el : null));
    const comuni = rows.map(row => ({
        codiceCatastale: row[6].trim(),
        codiceIstat: row[5].trim(),
        denominazione: row[1].trim(),
        siglaProvincia: row[8].trim(),
        dataIstituzione: row[3].trim(),
        eliminato: row[4].trim() === '9999-12-31 00:00:00' ? null : row[4].trim()
    }));
    let i = 0;
    for (const comune of comuni) {
        console.log(i++)
        console.log(comune.siglaProvincia)
        console.log(comune.codiceCatastale)
        if (comune.siglaProvincia === 'FO') comune.siglaProvincia = 'FC'
        if (['FU', 'PS', 'PL', 'ZA'].includes(comune.siglaProvincia)) continue
        if (comune.codiceCatastale == 'ND') continue;
        if (!comune.codiceCatastale) continue;
        try {
            await axios.post('http://localhost:3000/api/comuni', comune, { headers: { Authorization: 'SECRET' }});
        }
        catch (error) { throw new Error('cieo')}
    }
}

comune();