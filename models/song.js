import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist_name: {
    type: String,
    required: true
  },
  artist_thumbnail: {
    type: String,
    default: ''
  },
  video_url: {
    type: String,
    default: ''
  },
  music_url: {
    type: String,
    required: true
  },
  music_thumbnail: {
    type: String,
    default: ''
  },
  note: [
    {
      time: { type: Number, required: true },
      key: {type: Number, required: true }
    }
  ],
  ranking: [
    {
      username: { type: String, required: true },
      score: { type: Number, required: true }
    }
  ]
});

export default mongoose.model("Song", schema);
