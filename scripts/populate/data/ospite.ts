import { Domicilio, LuogoDiNascita, Persona, Ospite, Residenza, Sesso } from '@prisma/client';

type OspiteInsert = Omit<Ospite, 'uid' | 'possiede_cauzione' | 'codice_dipartimento_unitn'> & {
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
    };
    dipartimento_unitn: {
        connect: {
            codice: string;
        }
    }
};

const OSPITI: OspiteInsert[] = [
    {
        email: 'eugenio.berretta@studenti.unitn.it',
        telefono_principale: 'mytelefono_principale',
        telefono_secondario: 'mytelefono_secondario',
        foto: 'foto',
        dipartimento_unitn: {
            connect: {
                codice: 'DISI'
            }
        },
        cittadinanza: 'Italia',
        persona: {
            create: {
                nome: 'Matteo',
                cognome: 'Burundu',
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
        email: 'carlo.agostini@unitn.i',
        foto: 'foto',
        telefono_principale: null,
        telefono_secondario: null,
        dipartimento_unitn: {
            connect: {
                codice: 'DISI'
            }
        },
        cittadinanza: 'Italia',
        persona: {
            create: {
                nome: 'Burundo',
                cognome: 'Bubu',
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
    }
];

export default OSPITI;

