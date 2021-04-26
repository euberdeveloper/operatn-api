const alloggi = require('./alloggi_letterato_v6.0.json');
const axios = require('axios');

// Ricordati di togliere il soft delete ed togliere il commento ai body nei services

const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjY2NTczNS03MzhmLTRhZDYtOGZiZi1hMGVkOTA5OTU0NzgiLCJpYXQiOjE2MTcyNjQzMjQsImV4cCI6MTYxOTk0MjcyNH0.o86nYCBsbMMiuFDSveIRLYUtnRQnpzf5MrabYhLVJfw';

function getIdTipoStanza(stanza) {
    switch (stanza) {
        case 'STANZA SINGOLA':
            return 1;
        case 'STANZA DOPPIA':
            return 2;
        case 'MONOLOCALE':
            return 3;
        case 'BILOCALE':
            return 4;
        default:
            throw new Error('TIpo stanza non ha senso');
    }
}

async function addAlloggio(alloggio) {
    const fabbricato = {
        codice: alloggio.codice,
        nome: alloggio.nome,
        provincia: alloggio.provincia,
        comune: alloggio.comune,
        cap: alloggio.cap,
        indirizzo: alloggio.indirizzo,
        nCivico: alloggio.nCivico,
        idTipoFabbricato: alloggio.idTipoFabbricato,
        dataCreazione: alloggio.dataCreazione,
        eliminato: alloggio.eliminato
    };

    try {
        var idFabbricato = (await axios.post('http://localhost:3000/api/fabbricati', fabbricato, { headers: { Authorization: JWT } })).data;
    }
    catch (error) {
        console.log(fabbricato.codice)
        throw new Error('Errore fabbricato');
    }
    const stanze = alloggio.stanze.map(s => ({
        unitaImmobiliare: s.unitaImmobiliare,
        numeroStanza: s.numeroStanza,
        idTipoStanza: getIdTipoStanza(s.tipoStanza.tipoStanza),
        centroDiCosto: s.centroDiCosto,
        gestioneDiretta: s.gestioneDiretta,
        handicap: s.handicap,
        bagno: s.bagno,
        piano: s.piano,
        note: s.note,
        dataCreazione: s.dataCreazione,
        eliminato: s.eliminato
    }));

    for (const stanza of stanze) {
        try {
            var idStanza = (await axios.post(`http://localhost:3000/api/fabbricati/${idFabbricato}/stanze`, stanza, { headers: { Authorization: JWT } })).data;
        } catch (e) { 
            console.log(stanza); 
            throw new Error('Errore stanza') 
        }
        const postiLetto = [...(stanza.idTipoStanza === 2 ? ['A', 'B'] : ['A']).map(postoLetto => ({
            postoLetto,
            dataCreazione: stanza.dataCreazione,
            eliminato: stanza.eliminato
        }))];

        for (const postoLetto of postiLetto) {
            try {
                await axios.post(`http://localhost:3000/api/fabbricati/${idFabbricato}/stanze/${idStanza}/posti-letto`, postoLetto, { headers: { Authorization: JWT } });
            } catch (e) { 
                throw new Error('Errore posto letto') 
            }
        }
    }
}

async function main() {
    for (const alloggio of alloggi) {
        await addAlloggio(alloggio);
    }
}
main();
