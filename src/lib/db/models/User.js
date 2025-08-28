import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    externalId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String },
    imageUrl: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
