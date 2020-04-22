export const getIndex = (req, res) => {
  res.send("Hello Stranger?");
};

export const getSongs = (req, res) => {
  res.send("get songs");
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
