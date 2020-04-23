import Song from "../models/song";

export const getIndex = (req, res) => {
  res.send("Hello Stranger?");
};

export const getSongs = async (req, res, next) => {
  try {
    const songs = await Song.find()
      .select("title artist_name artist_thumbnail video_url music_url music_thumbnail")
      .lean();

    res.json({ status: "Ok", items: songs });
  } catch (error) {
    next(error);
  }
};

export const getSongById = (req, res) => {
  res.send("get song by id");
};

export const postSong = (req, res) => {
  res.send("post song");
};

export const updateSongRanking = (req, res) => {
  res.send("update song ranking");
};

export const updateSongNote = (req, res) => {
  res.send("update song note");
};

export const deleteSongById = (req, res) => {
  res.send("delete song by id");
};
