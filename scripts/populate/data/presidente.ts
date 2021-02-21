import { Domicilio, LuogoDiNascita, Persona, Presidente, Prisma, Residenza, Sesso } from '@prisma/client';

type PresidenteInsert = Omit<Presidente, 'uid'> & {
    persona: {
        create: Omit<Persona, 'uid' | 'data_creazione' | 'eliminato'> & {
            luogo_di_nascita: {
                create: Omit<LuogoDiNascita, 'uid'>;
            };
            residenza: {
                create: Omit<Residenza, 'uid'>;
            };
            domicili: {
                createMany: {
                    data: Omit<Domicilio, 'uid' | 'id'>[];
                }
            }
        }
    }
};

const PRESIDENTE: PresidenteInsert[] = [
    {
        data_fine_mandato: new Date(),
        data_inizio_mandato: new Date(),
        firma: '',
        persona: {
            create: {
                nome: 'Carlo',
                cognome: 'Agostini',
                data_nascita: new Date('1975-01-07'),
                sesso: Sesso.MASCHIO,
                codice_fiscale: 'BRRGNE99D23L551A',
                luogo_di_nascita: {
                    create: {
                        stato: 'Italia',
                        provincia: 'VI',
                        comune: 'Mezzolombardo',
                    }
                },
                residenza: {
                    create: {
                        stato: 'Italia',
                        provincia: 'VI',
                        comune: 'Mezzolombardo',
                        cap: '36078',
                        indirizzo: 'Via anonima',
                        n_civico: '23'
                    }
                },
                domicili: {
                    createMany: {
                        data: [{
                            stato: 'Italia',
                            provincia: 'VI',
                            comune: 'Mezzolombardo',
                            cap: '36078',
                            indirizzo: 'Via anonima',
                            n_civico: '23'
                        }, {
                            stato: 'Italia',
                            provincia: 'VI',
                            comune: 'Mezzolombardo',
                            cap: '36078',
                            indirizzo: 'Via anonima',
                            n_civico: '23'
                        }]
                    }
                }
            }
        }
    },
    {
        data_fine_mandato: new Date(),
        data_inizio_mandato: new Date(),
        firma: '',
        persona: {
            create: {
                nome: 'Eugenio',
                cognome: 'Berretta',
                data_nascita: new Date('1999-04-23'),
                sesso: Sesso.MASCHIO,
                codice_fiscale: 'BRRGNE99D23L551A',
                luogo_di_nascita: {
                    create: {
                        stato: 'Italia',
                        provincia: 'VI',
                        comune: 'Valdagno',
                    }
                },
                residenza: {
                    create: {
                        stato: 'Italia',
                        provincia: 'VI',
                        comune: 'Valdagno',
                        cap: '36078',
                        indirizzo: 'Via anonima',
                        n_civico: '23'
                    }
                },
                domicili: {
                    createMany: {
                        data: [{
                            stato: 'Italia',
                            provincia: 'VI',
                            comune: 'Valdagno',
                            cap: '36078',
                            indirizzo: 'Via anonima',
                            n_civico: '23'
                        }, {
                            stato: 'Italia',
                            provincia: 'VI',
                            comune: 'Valdagno',
                            cap: '36078',
                            indirizzo: 'Via anonima',
                            n_civico: '23'
                        }]
                    }
                }
            }
        }
    }
];

export default PRESIDENTE;

