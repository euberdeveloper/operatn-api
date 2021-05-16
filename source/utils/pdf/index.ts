import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

import contrattoDefinition from './contrattoDefinition';

if (pdfMake.vfs === undefined) {
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
}

export function pdfContratto(contratto: any): pdfMake.TCreatedPdf {
    return pdfMake.createPdf(contrattoDefinition(contratto));
}

export async function pdfGetBuffer(pdf: pdfMake.TCreatedPdf): Promise<Buffer> {
    return new Promise(resolve => {
        pdf.getBuffer(resolve);
    });
}
