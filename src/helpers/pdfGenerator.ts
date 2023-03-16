import fs from 'fs';
import PDFDocument from 'pdfkit';

import { personType } from '@/types/types';

type Props = {
  month: string;
  year: string;
  rent: number;
  charge: number;
  tenant: personType;
  lessor: personType;
  paymentDate: string;
};
const createPDF = ({
  month,
  year,
  tenant,
  lessor,
  rent,
  charge,
  paymentDate,
}: Props) => {
  const today = new Date();
  const filename = `./temp/${tenant.name}-${tenant.firstName}-${month}-${year}.pdf`;
  // Create a document
  const doc = new PDFDocument({ size: 'A4' });

  // Pipe its output somewhere, like to a file or HTTP response
  // See below for browser usage
  doc.pipe(fs.createWriteStream(filename));

  doc.fontSize(12);
  doc.moveDown();
  doc.text(
    `${lessor.name} ${lessor.firstName} \n${lessor.address} \n${lessor.town} ${lessor.codePost}`,
    {
      align: 'left',
    }
  );
  doc.moveDown();
  doc.text(
    `${tenant.name} ${tenant.firstName} \n${tenant.address} \n ${tenant.town} ${tenant.codePost}`,
    {
      align: 'right',
    }
  );
  doc.fontSize(14);
  doc.moveDown(4);
  doc.text(`QUITTANCE DE LOYER`, {
    align: 'center',
  });

  doc.fontSize(12);
  doc.moveDown();
  doc.text(`${month} ${year}`, {
    align: 'center',
  });

  doc.moveDown(2);
  doc.text(`Reçu de: ${tenant.name} ${tenant.firstName}`, {
    align: 'left',
    indent: 5,
  });
  doc.moveDown(2);
  doc.text(`La somme de: ${rent + charge} €`, {
    align: 'left',
    indent: 5,
  });
  doc.moveDown();
  doc.text(`Le: ${paymentDate}`, {
    align: 'left',
    indent: 5,
  });
  doc.moveDown();
  doc.text(`Pour le loyer et provision sur charge.`, {
    align: 'left',
    indent: 5,
  });
  doc.moveDown(2);
  doc.text(`Détail:`, {
    align: 'right',
  });
  doc.moveDown();
  doc.text(`Loyer:    ${rent} €`, {
    align: 'right',
  });
  doc.text(`Provision sur charges:      ${charge} €`, {
    align: 'right',
  });
  doc.text(`Total:    ${rent + charge} €`, {
    align: 'right',
  });
  doc.rect(doc.x, 300, 460, 250).stroke();

  doc.moveDown(4);
  doc.text(`Fait à ${lessor.town}      le ${today.toLocaleDateString()}`, {
    align: 'right',
  });

  doc.moveDown(2);
  doc.fontSize(10);
  doc.text(
    `Cette quittance annule tous les reçus qui auraient pu être donnés pour acompte versé sur le présent terme, même si ces reçus portent une date postérieure à la date ci-contre. Le paiement de la présente quittance n'emporte pas présomption de paiement des termes antérieurs.`,
    {
      align: 'justify',
    }
  );

  // Finalize PDF file
  doc.end();
  return filename;
};

export { createPDF };
