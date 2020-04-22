import express from "express";
import {
  getIndex,
  getSongs,
  getSongById,
  postSong,
  updateSongNote,
  updateSongRanking,
  deleteSongById
} from "../controllers";

const router = express.Router();

router.get("/", getIndex);
router.get("/songs", getSongs);
router.get("/song/:id", getSongById);
router.post("/song", postSong);
router.put("/song/:id/ranking", updateSongRanking);
router.put("/song/:id/note", updateSongNote);
router.delete("/song/:id", deleteSongById);

export default router;
