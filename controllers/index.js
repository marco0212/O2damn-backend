import Song from "../models/song";
import url from "url";

export const getIndex = (req, res) => {
  res.send("Hello Stranger?");
};

export const getSongs = async (req, res, next) => {
  try {
    const songs = await Song.find().lean();
    const fullUrl = url.format({
      protocol: 'https',
      host: req.get('host')
    });
    const items = songs.map(song => {
      const {
        song_file_name,
        artist_pic_file_name,
        song_thumbnail_file_name
      } = song;
      const music_url = `${fullUrl}/audio/${song_file_name}`;
      const artist_pic = `${fullUrl}/artist_pic/${artist_pic_file_name}`;
      const music_thumb_url = `${fullUrl}/thunbnail/${song_thumbnail_file_name}`;

      return Object.assign(song, {
        music_url,
        artist_pic,
        music_thumb_url
      });
    });

    res.json({ status: "Ok", items });
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
