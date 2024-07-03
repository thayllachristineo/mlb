import express, { Request, Response } from 'express';

import { getDetails } from '../services/details.service';

const router = express.Router();

router.get('/api/items/:id', async (req: Request, res: Response) => {
  const id = String(req.params.id);

  try {
    const result = await getDetails(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router;
