import express, { Request, Response } from 'express';

import { getSearch } from '../services/search.service';

const router = express.Router();

router.get('/api/items', async (req: Request, res: Response) => {
  const query = String(req.query.q);

  try {
    const result = await getSearch(query);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router;
