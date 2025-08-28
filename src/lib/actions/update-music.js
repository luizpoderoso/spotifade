"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "../db/dbConnect";
import Song from "../db/models/Song";

export async function updateMusic(spotifyId, formData) {
  const toUpdate = {};
  const data = Object.fromEntries(formData.entries());

  if (data?.durationMs) toUpdate.durationMs = data.durationMs;
  if (data?.title) toUpdate.title = data.title;
  if (data?.releaseDate) toUpdate.releaseDate = data.releaseDate;
  if (data?.imageUrl) toUpdate.imageUrl = data.imageUrl;

  try {
    await dbConnect();
    const updatedSong = await Song.findOneAndUpdate(
      { spotifyId },
      { ...toUpdate },
    );
    revalidatePath("/musics");
    return JSON.parse(JSON.stringify(updatedSong));
  } catch (error) {
    console.error("Erro ao atualizar uma música:", error);
    throw error;
  }
}
