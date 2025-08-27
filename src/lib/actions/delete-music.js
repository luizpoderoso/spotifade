"use server";

import { revalidatePath } from "next/cache";
import Song from "../db/models/Song";

export async function deleteSong(_, formData) {
  const id = formData.get("id");
  console.log(id);

  try {
    await Song.deleteOne({ _id: id });

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
