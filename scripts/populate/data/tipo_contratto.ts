import { TipoContratto } from '@prisma/client';

type TipoContrattoInsert = Omit<TipoContratto, 'id' | 'idTipoStudente'> & {
    tipoStudente: {
        connect: {
            tipoStudente: string;
        };
    };
};

const TIPI_UTENTE: TipoContrattoInsert[] = [
    {
        sigla: "AFAS",
        nome: "tariffa \"altri studenti\"",
        tipoStudente: {
            connect: {
                tipoStudente: "ALTA FORMAZIONE"
            }
        }
    },
    {
        sigla: "AFSB",
        nome: "tariffa \"da Bando\"",
        tipoStudente: {
            connect: {
                tipoStudente: "ALTA FORMAZIONE"
            }
        }
    },
    {
        sigla: "AMI",
        nome: "altra mobilità internazionale",
        tipoStudente: {
            connect: {
                tipoStudente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "BIX2",
        nome: "bilocale per due dottorandi",
        tipoStudente: {
            connect: {
                tipoStudente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "BM",
        nome: "matricole - 1^ anno",
        tipoStudente: {
            connect: {
                tipoStudente: "DA BANDO"
            }
        }
    },
    {
        sigla: "BP",
        nome: "proroghe",
        tipoStudente: {
            connect: {
                tipoStudente: "DA BANDO"
            }
        }
    },
    {
        sigla: "BS",
        nome: "successivi",
        tipoStudente: {
            connect: {
                tipoStudente: "DA BANDO"
            }
        }
    },
    {
        sigla: "CMBC",
        nome: "individuati da UniTrento",
        tipoStudente: {
            connect: {
                tipoStudente: "COLLEGIO"
            }
        }
    },
    {
        sigla: "DL",
        nome: "doppia laurea",
        tipoStudente: {
            connect: {
                tipoStudente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "DOT 1",
        nome: "dottorandi italiani - 1^ anno",
        tipoStudente: {
            connect: {
                tipoStudente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "DOT1M",
        nome: "dottorandi italiani - 1^ anno - monolocale",
        tipoStudente: {
            connect: {
                tipoStudente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "DOTAS",
        nome: "dottorandi italiani anni successivi",
        tipoStudente: {
            connect: {
                tipoStudente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "DOTM",
        nome: "dottorandi italiani anni successivi monolocale",
        tipoStudente: {
            connect: {
                tipoStudente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "EIT",
        nome: "progetto EIT",
        tipoStudente: {
            connect: {
                tipoStudente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "ERM",
        nome: "erasmus mundus",
        tipoStudente: {
            connect: {
                tipoStudente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "ER-S",
        nome: "erasmus plus",
        tipoStudente: {
            connect: {
                tipoStudente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "ER-SM",
        nome: "erasmus plus monolocale",
        tipoStudente: {
            connect: {
                tipoStudente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "EMBS",
        nome: "european master in business studies ",
        tipoStudente: {
            connect: {
                tipoStudente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "FBK-A",
        nome: "dottorandi",
        tipoStudente: {
            connect: {
                tipoStudente: "FBK"
            }
        }
    },
    {
        sigla: "FBK-O",
        nome: "ricercatori",
        tipoStudente: {
            connect: {
                tipoStudente: "FBK"
            }
        }
    },
    {
        sigla: "FET",
        nome: "figli emigrati trentini - progetto PAT",
        tipoStudente: {
            connect: {
                tipoStudente: "FET"
            }
        }
    },
    {
        sigla: "FMS",
        nome: "foresteria mensile tariffa altri studenti",
        tipoStudente: {
            connect: {
                tipoStudente: "FORESTERIA"
            }
        }
    },
    {
        sigla: "FOR",
        nome: "foresteria giornaliera tariffa altri studenti",
        tipoStudente: {
            connect: {
                tipoStudente: "FORESTERIA"
            }
        }
    },
    {
        sigla: "FOR-S",
        nome: "foresteria giornaliera tariffa altri studenti - doppia uso singola",
        tipoStudente: {
            connect: {
                tipoStudente: "FORESTERIA"
            }
        }
    },
    {
        sigla: "FORES",
        nome: "foresteria giornaliera ospitalità",
        tipoStudente: {
            connect: {
                tipoStudente: "FORESTERIA"
            }
        }
    },
    {
        sigla: "FOROM",
        nome: "foresteria mensile tariffa ospitalità - monolocale",
        tipoStudente: {
            connect: {
                tipoStudente: "FORESTERIA"
            }
        }
    },
    {
        sigla: "FOROS",
        nome: "foresteria mensile tariffa ospitalità",
        tipoStudente: {
            connect: {
                tipoStudente: "FORESTERIA"
            }
        }
    },
    {
        sigla: "GRAD",
        nome: "gratuito altri studenti - DOPPIA",
        tipoStudente: {
            connect: {
                tipoStudente: "GRATUITO"
            }
        }
    },
    {
        sigla: "GRAOS",
        nome: "gratuito ospitalità + Lavori di manutenzione",
        tipoStudente: {
            connect: {
                tipoStudente: "GRATUITO"
            }
        }
    },
    {
        sigla: "GRAS",
        nome: "gratuito altri studenti - SINGOLA",
        tipoStudente: {
            connect: {
                tipoStudente: "GRATUITO"
            }
        }
    },
    {
        sigla: "GRAT",
        nome: "gratuito da bando? rifugiati? Assistenti disabili?",
        tipoStudente: {
            connect: {
                tipoStudente: "GRATUITO"
            }
        }
    },
    {
        sigla: "ICM",
        nome: "ICM (erasmus)",
        tipoStudente: {
            connect: {
                tipoStudente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "INT",
        nome: "studenti corsi di laurea interateneo",
        tipoStudente: {
            connect: {
                tipoStudente: "INTERATENEO"
            }
        }
    },
    {
        sigla: "INT B",
        nome: "studenti corsi di laurea interateneo - da bando entro le soglie",
        tipoStudente: {
            connect: {
                tipoStudente: "INTERATENEO"
            }
        }
    },
    {
        sigla: "IYT",
        nome: "Invest your talent - laurea magistrale con borsa",
        tipoStudente: {
            connect: {
                tipoStudente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "LM WO",
        nome: "borsisti o esonerati totali - regolamento ex Ue Unitn - 1^ anno",
        tipoStudente: {
            connect: {
                tipoStudente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "LMWOP",
        nome: "borsisti o esonerati totali - regolamento ex Ue Unitn - proroghe",
        tipoStudente: {
            connect: {
                tipoStudente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "MACHA",
        nome: "fondazione MACH - dottorandi",
        tipoStudente: {
            connect: {
                tipoStudente: "MACH"
            }
        }
    },
    {
        sigla: "MACHO",
        nome: "fondazione MACH - ricercatori",
        tipoStudente: {
            connect: {
                tipoStudente: "MACH"
            }
        }
    },
    {
        sigla: "PH",
        nome: "studenti disabili - fuori bando",
        tipoStudente: {
            connect: {
                tipoStudente: "DISABILITÀ"
            }
        }
    },
    {
        sigla: "PHB",
        nome: "studenti disabili - con requisiti da bando",
        tipoStudente: {
            connect: {
                tipoStudente: "DISABILITÀ"
            }
        }
    },
    {
        sigla: "PHD 1",
        nome: "dottorandi stranieri - 1^ anno - convenzione",
        tipoStudente: {
            connect: {
                tipoStudente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "PHD1M",
        nome: "dottorandi stranieri - 1^ anno - convenzione - monolocale",
        tipoStudente: {
            connect: {
                tipoStudente: "DOTTORANDI"
            }
        }
    },
    {
        sigla: "PHMB",
        nome: "studenti disabili - con requisiti da bando - monolocale",
        tipoStudente: {
            connect: {
                tipoStudente: "DISABILITÀ"
            }
        }
    },
    {
        sigla: "PREAS",
        nome: "Regolamento ex Ue Unitn - PAGANTI - 1^ anno o succ",
        tipoStudente: {
            connect: {
                tipoStudente: "WELCOME OFFICE"
            }
        }
    },
    {
        sigla: "SANTA",
        nome: "studenti professioni santarie - convenzione PAT",
        tipoStudente: {
            connect: {
                tipoStudente: "SANITÀ"
            }
        }
    },
    {
        sigla: "SANTB",
        nome: "studenti professioni santarie - convenzione PAT - con requisito condizione economica",
        tipoStudente: {
            connect: {
                tipoStudente: "SANITÀ"
            }
        }
    },
    {
        sigla: "SISSA",
        nome: "studenti SISSA - convenzione Unitrento ",
        tipoStudente: {
            connect: {
                tipoStudente: "SISSA"
            }
        }
    },
    {
        sigla: "SISSB",
        nome: "studenti SISSA - convenzione Unitrento - con requisiti da bando - richiesta borsa Opera idonea",
        tipoStudente: {
            connect: {
                tipoStudente: "SISSA"
            }
        }
    },
    {
        sigla: "UNISP",
        nome: "studenti Unisport - in convenzione UniTrento/Opera",
        tipoStudente: {
            connect: {
                tipoStudente: "UNISPORT"
            }
        }
    }
];

export default TIPI_UTENTE;