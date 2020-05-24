import express from 'express';
import {
  getIndex,
  getSongs,
  getSongById,
  updateSongRanking
} from '../controllers';

const router = express.Router();

router.get('/', getIndex);
router.get('/songs', getSongs);
router.get('/song/:id', getSongById);
router.put('/song/:id/ranking', updateSongRanking);

export default router;
