// import { Domicilio, LuogoDiNascita, Persona, Presidente, Residenza, Sesso } from '@prisma/client';

// type PresidenteInsert = Omit<Presidente, 'id'> & {
//     persona: {
//         create: Omit<Persona, 'id' | 'dataCreazione' | 'eliminato'> & {
//             luogoDiNascita: {
//                 create: Omit<LuogoDiNascita, 'id'>;
//             };
//             residenza: {
//                 create: Omit<Residenza, 'id'>;
//             };
//             domicili: {
//                 createMany: {
//                     data: Omit<Domicilio, 'id' | 'idPersona'>[];
//                 }
//             }
//         }
//     }
// };

// const PRESIDENTE: PresidenteInsert[] = [
//     {
//         dataFineMandato: new Date(),
//         dataInizioMandato: new Date(),
//         firma: '',
//         persona: {
//             create: {
//                 nome: 'Carlo',
//                 cognome: 'Agostini',
//                 dataDiNascita: new Date('1975-01-07'),
//                 sesso: Sesso.MASCHIO,
//                 codiceFiscale: 'BRRGNE99D23L551A',
//                 luogoDiNascita: {
//                     create: {
//                         stato: 'Italia',
//                         provincia: 'VI',
//                         comune: 'Mezzolombardo',
//                     }
//                 },
//                 residenza: {
//                     create: {
//                         stato: 'Italia',
//                         provincia: 'VI',
//                         comune: 'Mezzolombardo',
//                         cap: '36078',
//                         indirizzo: 'Via anonima',
//                         nCivico: '23'
//                     }
//                 },
//                 domicili: {
//                     createMany: {
//                         data: [{
//                             stato: 'Italia',
//                             provincia: 'VI',
//                             comune: 'Mezzolombardo',
//                             cap: '36078',
//                             indirizzo: 'Via anonima',
//                             nCivico: '23'
//                         }, {
//                             stato: 'Italia',
//                             provincia: 'VI',
//                             comune: 'Mezzolombardo',
//                             cap: '36078',
//                             indirizzo: 'Via anonima',
//                             nCivico: '23'
//                         }]
//                     }
//                 }
//             }
//         }
//     },
//     {
//         dataFineMandato: new Date(),
//         dataInizioMandato: new Date(),
//         firma: '',
//         persona: {
//             create: {
//                 nome: 'Eugenio',
//                 cognome: 'Berretta',
//                 dataDiNascita: new Date('1999-04-23'),
//                 sesso: Sesso.MASCHIO,
//                 codiceFiscale: 'BRRGNE99D23L551A',
//                 luogoDiNascita: {
//                     create: {
//                         stato: 'Italia',
//                         provincia: 'VI',
//                         comune: 'Valdagno',
//                     }
//                 },
//                 residenza: {
//                     create: {
//                         stato: 'Italia',
//                         provincia: 'VI',
//                         comune: 'Valdagno',
//                         cap: '36078',
//                         indirizzo: 'Via anonima',
//                         nCivico: '23'
//                     }
//                 },
//                 domicili: {
//                     createMany: {
//                         data: [{
//                             stato: 'Italia',
//                             provincia: 'VI',
//                             comune: 'Valdagno',
//                             cap: '36078',
//                             indirizzo: 'Via anonima',
//                             nCivico: '23'
//                         }, {
//                             stato: 'Italia',
//                             provincia: 'VI',
//                             comune: 'Valdagno',
//                             cap: '36078',
//                             indirizzo: 'Via anonima',
//                             nCivico: '23'
//                         }]
//                     }
//                 }
//             }
//         }
//     }
// ];

// export default PRESIDENTE;

