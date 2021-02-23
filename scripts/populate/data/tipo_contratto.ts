import { TipoContratto } from '@prisma/client';

type TipoContrattoInsert = Omit<TipoContratto, 'id' | 'id_tipo_studente'> & {
    tipo_studente: {
        connect: {
            tipo_studente: string;
        };
    };
};

const TIPI_UTENTE: TipoContrattoInsert[] = [
    {
        sigla: "AFAS",
        nome: "tariffa \"altri studenti\"",
        tipo_studente: {
            connect: {
                tipo_studente: "ALTA FORMAZIONE"
            }
        }
    },
    {
        sigla: "AFSB",
        nome: "tariffa \"da Bando\"",
        tipo_studente: {
            connect: {
                tipo_studente: "ALTA FORMAZIONE"
            }
        }
    },
    {
        sigla: "AMI",
        nome: "altra mobilità internazionale",
        tipo_studente: {
            connect: {
                tipo_studente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "BIX2",
        nome: "bilocale per due dottorandi",
        tipo_studente: {
            connect: {
                tipo_studente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "BM",
        nome: "matricole - 1^ anno",
        tipo_studente: {
            connect: {
                tipo_studente: "DA BANDO"
            }
        }
    },
    {
        sigla: "BP",
        nome: "proroghe",
        tipo_studente: {
            connect: {
                tipo_studente: "DA BANDO"
            }
        }
    },
    {
        sigla: "BS",
        nome: "successivi",
        tipo_studente: {
            connect: {
                tipo_studente: "DA BANDO"
            }
        }
    },
    {
        sigla: "CMBC",
        nome: "individuati da UniTrento",
        tipo_studente: {
            connect: {
                tipo_studente: "COLLEGIO"
            }
        }
    },
    {
        sigla: "DL",
        nome: "doppia laurea",
        tipo_studente: {
            connect: {
                tipo_studente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "DOT 1",
        nome: "dottorandi italiani - 1^ anno",
        tipo_studente: {
            connect: {
                tipo_studente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "DOT1M",
        nome: "dottorandi italiani - 1^ anno - monolocale",
        tipo_studente: {
            connect: {
                tipo_studente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "DOTAS",
        nome: "dottorandi italiani anni successivi",
        tipo_studente: {
            connect: {
                tipo_studente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "DOTM",
        nome: "dottorandi italiani anni successivi monolocale",
        tipo_studente: {
            connect: {
                tipo_studente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "EIT",
        nome: "progetto EIT",
        tipo_studente: {
            connect: {
                tipo_studente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "ERM",
        nome: "erasmus mundus",
        tipo_studente: {
            connect: {
                tipo_studente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "ER-S",
        nome: "erasmus plus",
        tipo_studente: {
            connect: {
                tipo_studente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "ER-SM",
        nome: "erasmus plus monolocale",
        tipo_studente: {
            connect: {
                tipo_studente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "EMBS",
        nome: "european master in business studies ",
        tipo_studente: {
            connect: {
                tipo_studente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "FBK-A",
        nome: "dottorandi",
        tipo_studente: {
            connect: {
                tipo_studente: "FBK"
            }
        }
    },
    {
        sigla: "FBK-O",
        nome: "ricercatori",
        tipo_studente: {
            connect: {
                tipo_studente: "FBK"
            }
        }
    },
    {
        sigla: "FET",
        nome: "figli emigrati trentini - progetto PAT",
        tipo_studente: {
            connect: {
                tipo_studente: "FET"
            }
        }
    },
    {
        sigla: "FMS",
        nome: "foresteria mensile tariffa altri studenti",
        tipo_studente: {
            connect: {
                tipo_studente: "FORESTERIA"
            }
        }
    },
    {
        sigla: "FOR",
        nome: "foresteria giornaliera tariffa altri studenti",
        tipo_studente: {
            connect: {
                tipo_studente: "FORESTERIA"
            }
        }
    },
    {
        sigla: "FOR-S",
        nome: "foresteria giornaliera tariffa altri studenti - doppia uso singola",
        tipo_studente: {
            connect: {
                tipo_studente: "FORESTERIA"
            }
        }
    },
    {
        sigla: "FORES",
        nome: "foresteria giornaliera ospitalità",
        tipo_studente: {
            connect: {
                tipo_studente: "FORESTERIA"
            }
        }
    },
    {
        sigla: "FOROM",
        nome: "foresteria mensile tariffa ospitalità - monolocale",
        tipo_studente: {
            connect: {
                tipo_studente: "FORESTERIA"
            }
        }
    },
    {
        sigla: "FOROS",
        nome: "foresteria mensile tariffa ospitalità",
        tipo_studente: {
            connect: {
                tipo_studente: "FORESTERIA"
            }
        }
    },
    {
        sigla: "GRAD",
        nome: "gratuito altri studenti - DOPPIA",
        tipo_studente: {
            connect: {
                tipo_studente: "GRATUITO"
            }
        }
    },
    {
        sigla: "GRAOS",
        nome: "gratuito ospitalità + Lavori di manutenzione",
        tipo_studente: {
            connect: {
                tipo_studente: "GRATUITO"
            }
        }
    },
    {
        sigla: "GRAS",
        nome: "gratuito altri studenti - SINGOLA",
        tipo_studente: {
            connect: {
                tipo_studente: "GRATUITO"
            }
        }
    },
    {
        sigla: "GRAT",
        nome: "gratuito da bando? rifugiati? Assistenti disabili?",
        tipo_studente: {
            connect: {
                tipo_studente: "GRATUITO"
            }
        }
    },
    {
        sigla: "ICM",
        nome: "ICM (erasmus)",
        tipo_studente: {
            connect: {
                tipo_studente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "INT",
        nome: "studenti corsi di laurea interateneo",
        tipo_studente: {
            connect: {
                tipo_studente: "INTERATENEO"
            }
        }
    },
    {
        sigla: "INT B",
        nome: "studenti corsi di laurea interateneo - da bando entro le soglie",
        tipo_studente: {
            connect: {
                tipo_studente: "INTERATENEO"
            }
        }
    },
    {
        sigla: "IYT",
        nome: "Invest your talent - laurea magistrale con borsa",
        tipo_studente: {
            connect: {
                tipo_studente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "LM WO",
        nome: "borsisti o esonerati totali - regolamento ex Ue Unitn - 1^ anno",
        tipo_studente: {
            connect: {
                tipo_studente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "LMWOP",
        nome: "borsisti o esonerati totali - regolamento ex Ue Unitn - proroghe",
        tipo_studente: {
            connect: {
                tipo_studente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "MACHA",
        nome: "fondazione MACH - dottorandi",
        tipo_studente: {
            connect: {
                tipo_studente: "MACH"
            }
        }
    },
    {
        sigla: "MACHO",
        nome: "fondazione MACH - ricercatori",
        tipo_studente: {
            connect: {
                tipo_studente: "MACH"
            }
        }
    },
    {
        sigla: "PH",
        nome: "studenti disabili - fuori bando",
        tipo_studente: {
            connect: {
                tipo_studente: "DISABILITÀ"
            }
        }
    },
    {
        sigla: "PHB",
        nome: "studenti disabili - con requisiti da bando",
        tipo_studente: {
            connect: {
                tipo_studente: "DISABILITÀ"
            }
        }
    },
    {
        sigla: "PHD 1",
        nome: "dottorandi stranieri - 1^ anno - convenzione",
        tipo_studente: {
            connect: {
                tipo_studente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "PHD1M",
        nome: "dottorandi stranieri - 1^ anno - convenzione - monolocale",
        tipo_studente: {
            connect: {
                tipo_studente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "PHMB",
        nome: "studenti disabili - con requisiti da bando - monolocale",
        tipo_studente: {
            connect: {
                tipo_studente: "DISABILITÀ"
            }
        }
    },
    {
        sigla: "PREAS",
        nome: "Regolamento ex Ue Unitn - PAGANTI - 1^ anno o succ",
        tipo_studente: {
            connect: {
                tipo_studente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "SANTA",
        nome: "studenti professioni santarie - convenzione PAT",
        tipo_studente: {
            connect: {
                tipo_studente: "SANITÀ"
            }
        }
    },
    {
        sigla: "SANTB",
        nome: "studenti professioni santarie - convenzione PAT - con requisito condizione economica",
        tipo_studente: {
            connect: {
                tipo_studente: "SANITÀ"
            }
        }
    },
    {
        sigla: "SISSA",
        nome: "studenti SISSA - convenzione Unitrento ",
        tipo_studente: {
            connect: {
                tipo_studente: "SISSA"
            }
        }
    },
    {
        sigla: "SISSB",
        nome: "studenti SISSA - convenzione Unitrento - con requisiti da bando - richiesta borsa Opera idonea",
        tipo_studente: {
            connect: {
                tipo_studente: "SISSA"
            }
        }
    },
    {
        sigla: "UNISP",
        nome: "studenti Unisport - in convenzione UniTrento/Opera",
        tipo_studente: {
            connect: {
                tipo_studente: "UNISPORT"
            }
        }
    }
];

export default TIPI_UTENTE;