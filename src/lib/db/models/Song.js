import mongoose from "mongoose";
const { Schema } = mongoose;

const SongSchema = new Schema({
  spotifyId: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  spotifyUrl: {
    type: String,
    unique: true,
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
