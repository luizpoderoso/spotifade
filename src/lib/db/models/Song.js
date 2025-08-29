import mongoose from "mongoose";
const { Schema } = mongoose;

const SongSchema = new Schema({
  spotifyId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
    index: true,
  },
  title: {
    type: String,
    required: true,
  },
  spotifyUrl: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: "",
  },
  durationMs: Number,
  artists: [
    {
      type: String,
      default: "",
    },
  ],
  releaseDate: {
    type: String,
    default: "",
  },
  popularity: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.Song || mongoose.model("Song", SongSchema);
