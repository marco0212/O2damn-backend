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

export const getSongById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const song = await Song.findById(id).lean();

    res.json({ status: "Ok", song });
  } catch (error) {
    next(error);
  }
};

export const postSong = (req, res) => {
  res.send("post song");
};

export const updateSongRanking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rankList } = req.body;
    const song = await Song.findByIdAndUpdate(id, {
        ranking: rankList
      }, {
        new : true,
        select: "title artist_name ranking"
      }
    );

    res.json({ status: 'Ok', song });
  } catch (err) {
    next(err);
  }
};

export const updateSongNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { note } = req.body;
    const song = await Song.findByIdAndUpdate(id, {
        note
      }, {
        new : true,
        select: "title artist_name note"
      }
    );

    res.json({ status: 'Ok', song });
  } catch (err) {
    next(err);
  }
};

export const deleteSongById = (req, res) => {
  res.send("delete song by id");
};
