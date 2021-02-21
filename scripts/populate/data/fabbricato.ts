import { Fabbricato } from '@prisma/client';

type FabbricatoInsert = Omit<Fabbricato, 'id'>;

const FABBRICATO: FabbricatoInsert[] = [
    {
        "nome": "ALLOGGI STORICI - VIA ROSMINI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Rosmini",
        "numero_civico": "70",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "PALAZZINA BORINO DI POVO - VIA BORINO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Borino",
        "numero_civico": "63",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ALLOGGI STORICI - VIA TARAMELLI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Taramelli",
        "numero_civico": "8/3",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ALLOGGI STORICI - VIA TARAMELLI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Taramelli",
        "numero_civico": "8/4",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "PALAZZINA VALENTINA - VIA CAPRONI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Caproni",
        "numero_civico": "19",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "RESIDENZA BRENNERO - VIA BRENNERO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Brennero",
        "numero_civico": "150",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "COLLEGIO EX MAYER - VIA LAMPI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Lampi",
        "numero_civico": "9",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "PALAZZINA SAN LORENZO - VIA DOSS TRENTO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Doss Trento",
        "numero_civico": "31/1",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ITEA - VIA SAN MARCO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Vicolo San Marco",
        "numero_civico": "6",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "FONDAZIONE CARITRO - VIA DORDI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Dordi",
        "numero_civico": "8",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "CONDOMINIO CAVALLEGGERI - VIA PALERMO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Palermo",
        "numero_civico": "25",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ITEA - VIA DOSS TRENTO, 35",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Doss Trento",
        "numero_civico": "35",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ITEA - VIA DOSS TRENTO, 37",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Doss Trento",
        "numero_civico": "37",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ITEA - VIA CENTOCHIAVI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Centochiavi",
        "numero_civico": "18",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ITEA - VIA DIETRO LE MURA",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Dietro Le Mura",
        "numero_civico": "19",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ITEA - PIAZZA GARZETTI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Piazza Garzetti",
        "numero_civico": "11",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ITEA - VIA SOLTERI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Solteri",
        "numero_civico": "43/5",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "CONDOMINIO CAVALLEGGERI - VIA PALERMO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Palermo",
        "numero_civico": "23",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "CONDOMINIO CAVALLEGGERI - VIA PALERMO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Palermo",
        "numero_civico": "21",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "CONDOMINIO CAVALLEGGERI - VIA PALERMO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Palermo",
        "numero_civico": "21/2",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "MASO FURLANI/ROSSI - LOC.VELA",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Ss.cosma E Damiano,",
        "numero_civico": "103",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "PALAZZINA SPRE' DI POVO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Della Resistenza  64",
        "numero_civico": "SPRE'",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "FAGGIO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via S.bernardino,",
        "numero_civico": "10",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ACISJF",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Prepositura,",
        "numero_civico": "58",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ROVERETO - VIA VALBUSA GRANDA",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Valbusa Grande,",
        "numero_civico": "13",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ROVERETO - VIA LUNGO LENO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Lungo Leno Sinistro,",
        "numero_civico": "20",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "PALAZZINA VIA PALESTRINA",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Palestrina,",
        "numero_civico": "14",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "RESIDENZA TOMASO GAR",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Tomaso Gar,",
        "numero_civico": "15",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "VICOLO GALASSO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Vicolo Galasso",
        "numero_civico": "13",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "FOYER DELLA GIOVENTU'",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Iv Novembre N.",
        "numero_civico": "28",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "RESIDENZA CAPITOL",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Soprasasso N.",
        "numero_civico": "34",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "PARROCCHIA S. GIORGIO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Balista N.",
        "numero_civico": "19",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "VICOLO GALASSO - VALENTINI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Vicolo Galasso,",
        "numero_civico": "7",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "MAN",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Loc. Man S. Antonio N.",
        "numero_civico": "33/B",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "RESIDENZA LAVISOTTO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Lavisotto",
        "numero_civico": "15",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ITEA - VIA VALNIGRA 55/1",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Valnigra",
        "numero_civico": "55/1",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ROSMINI (MARCHI)",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Rosmini",
        "numero_civico": "92",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "RESIDENZA LE GINESTRE",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Viale Trieste,",
        "numero_civico": "44",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "CFCS",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "V/malpensada",
        "numero_civico": "90-S.BARTOLAMEO",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "CFCS-EA0C03",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "V/malpensada",
        "numero_civico": "90-S.BARTOLAMEO",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "CFCS-EA1C01",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "V/malpensada",
        "numero_civico": "90-S.BARTOLAMEO",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "CFCS-EA0C05",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "V/malpensada",
        "numero_civico": "90-S.BARTOLAMEO",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "CFCS-EA0C07",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "V/malpensada",
        "numero_civico": "90-S.BARTOLAMEO",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "CFCS-EA0C09",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "V/malpensada",
        "numero_civico": "90-S.BARTOLAMEO",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "CFCS-EA0C11",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "V/malpensada",
        "numero_civico": "90-S.BARTOLAMEO",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "CFCS-EA1C03",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "V/malpensada",
        "numero_civico": "90-S.BARTOLAMEO",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "CFCS-EA1C13",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "V/malpensada",
        "numero_civico": "90-S.BARTOLAMEO",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "CFCS-EA2C03",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "V/malpensada",
        "numero_civico": "90-S.BARTOLAMEO",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "CFCS-EA2C13",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "V/malpensada",
        "numero_civico": "90-S.BARTOLAMEO",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "RESIDENZA UNIVERSITARIA S. BARTOLAMEO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via D/malpensada",
        "numero_civico": "140",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "CFCS MONOLOCALI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "V/malpensada",
        "numero_civico": "90-S.BARTOLAMEO",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "CONVITTO OPERA A. BARELLI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Della Gora",
        "numero_civico": "9",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "ALLOGGI STORICI - VIA SCOPOLI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Scopoli",
        "numero_civico": "41",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ALLOGGI STORICI - VIA ANTONIO DA TRENTO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Antonio Da Trento",
        "numero_civico": "22",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ALLOGGI STORICI - VIA MOGGIOLI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Moggioli",
        "numero_civico": "19",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ALLOGGI STORICI - F.LLI FONTANA",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via F.lli Fontana",
        "numero_civico": "45",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ALLOGGI STORICI - VIA GORIZIA",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Gorizia",
        "numero_civico": "61",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ALLOGGI STORICI - VIA LORENZONI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Lorenzoni",
        "numero_civico": "16",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ALLOGGI STORICI - VIA MATTEOTTI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via G. Matteotti N.",
        "numero_civico": "85",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ALLOGGI STORICI - VIA S. MARTINO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via S. Martino",
        "numero_civico": "15",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ALLOGGI STORICI - VIA S. PIO X",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via S. Pio X",
        "numero_civico": "79",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ALLOGGI STORICI - VIA S. PIO X",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via S. Pio X",
        "numero_civico": "83",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "PALAZZINA BORINO DI POVO - VIA BORINO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Borino",
        "numero_civico": "61",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "ALLOGGI STORICI - VIALE VERONA",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Viale Verona",
        "numero_civico": "33",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "BILOCALI S. BARTOLAMEO SINGOLI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via D/malpensada",
        "numero_civico": "140",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "ISTITUTO ROSMINIANI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Madonna Del Monte N.",
        "numero_civico": "6",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    },
    {
        "nome": "RESIDENZA BERNARDO CLESIO - ARCIDIOCESI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Santa Margherita",
        "numero_civico": "13",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "RESIDENZA BERNARDO CLESIO - PARROCCHIA",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Santa Margherita",
        "numero_civico": "13",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "PALAZZINA GARIBALDI ROVERETO",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Garibaldi N.",
        "numero_civico": "16",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "PALAZZINA TARTAROTTI",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Via Ottaviano Rovereti N.",
        "numero_civico": "2",
        "cap": "38122",
        "id_tipo_fabbricato": 2
    },
    {
        "nome": "RESIDENZA UNIVERSITARIA MAYER",
        "provincia": "TN",
        "comune": "Trento",
        "indirizzo": "Piazza Valeria Solesin N.",
        "numero_civico": "1",
        "cap": "38122",
        "id_tipo_fabbricato": 1
    }
];

export default FABBRICATO;