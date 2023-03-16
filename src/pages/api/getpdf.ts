import { createReadStream } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;
  if (typeof path !== 'string') throw new Error('Path is not a string.');
  const stream = createReadStream(path);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=monfichier.pdf');
  stream.pipe(res);
}
