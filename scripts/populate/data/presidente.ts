import { Domicilio, LuogoDiNascita, Persona, Presidente, Residenza, Sesso } from '@prisma/client';

type PresidenteInsert = Omit<Presidente, 'id'> & {
    persona: {
        create: Omit<Persona, 'id' | 'data_creazione' | 'eliminato'> & {
            luogo_di_nascita: {
                create: Omit<LuogoDiNascita, 'id'>;
            };
            residenza: {
                create: Omit<Residenza, 'id'>;
            };
            domicili: {
                createMany: {
                    data: Omit<Domicilio, 'id' | 'id_persona'>[];
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

