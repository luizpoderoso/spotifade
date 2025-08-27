"use server";

import { revalidatePath } from "next/cache";
import Song from "../db/models/Song";
import dbConnect from "../db/dbConnect";

export async function deleteSong(_, formData) {
  const id = formData.get("id");

  try {
    await dbConnect();
    await Song.deleteOne({ spotifyId: id });

    revalidatePath("/musics");

    return { success: true, message: "A música foi inserida com sucesso." };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Houve um erro ao inserir a música: " + error.message,
    };
  }
}
