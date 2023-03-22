/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

import { createPDF } from '@/helpers/pdfGenerator';
import { prepareData } from '@/helpers/prepareData';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  switch (method) {
    case 'POST':
      try {
        const data = prepareData(body);
        const fileName = await createPDF(data);
        res.status(202).json(fileName);
      } catch (error) {
        console.error('[api/quittance] POST:', error);
        res.status(500);
      }
      break;
  }
};
