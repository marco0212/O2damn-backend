import mongoose from 'mongoose';

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
  note: {
    type: [
      {
        time: { type: Number, required: true },
        key: {type: Number, required: true }
      }
    ],
    required: true,
    default: []
  },
  ranking: {
    type: [
      {
        username: { type: String, required: true },
        score: { type: Number, required: true }
      }
    ],
    required: true,
    default: []
  }
});

export default mongoose.model('Song', schema);
