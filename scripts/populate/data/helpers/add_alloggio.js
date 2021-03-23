const alloggi = require('./alloggi_letterato_v1.0.json');
const axios = require('axios');

// Ricordati di togliere il soft delete ed togliere il commento ai body nei services

const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjY2NTczNS03MzhmLTRhZDYtOGZiZi1hMGVkOTA5OTU0NzgiLCJpYXQiOjE2MTQ0Njk5MDUsImV4cCI6MTYxNzE0ODMwNX0.XkpLPWFNt1wKp3NeUReS4ruA8r8TdLAh7fk4FSHpsnM';

async function addAlloggio(alloggio) {
    const fabbricato = {
        codice: alloggio.codice,
        nome: alloggio.nome,
        provincia: alloggio.provincia,
        comune: alloggio.comune,
        cap: alloggio.cap,
        indirizzo: alloggio.indirizzo,
        nCivico: alloggio.nCivico,
        oldCode: alloggio.oldCode,
        idTipoFabbricato: alloggio.idTipoFabbricato,
        dataCreazione: alloggio.dataCreazione,
        eliminato: alloggio.eliminato
    };

    const idFabbricato = (await axios.post('http://localhost:3000/api/fabbricati', fabbricato, { headers: { Authorization: JWT } })).data;

    const stanze = alloggio.stanze.map(s => ({
        unitaImmobiliare: s.unitaImmobiliare,
        numeroStanza: s.numeroStanza,
        idTipoStanza: s.idTipoStanza,
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
        } catch (e) { console.log(stanza); throw new Error('ss') }
        const postiLetto = [...(stanza.idTipoStanza === 2 ? ['A', 'B'] : ['A']).map(postoLetto => ({
            postoLetto,
            dataCreazione: stanza.dataCreazione,
            eliminato: stanza.eliminato
        }))];

        for (const postoLetto of postiLetto) {
            try {
                await axios.post(`http://localhost:3000/api/fabbricati/${idFabbricato}/stanze/${idStanza}/posti-letto`, postoLetto, { headers: { Authorization: JWT } });
            } catch (e) { console.log('ciao'); throw new Error('ciao') }
        }
    }
}

async function main() {
    for (const alloggio of alloggi) {
        await addAlloggio(alloggio);
    }
}
main();