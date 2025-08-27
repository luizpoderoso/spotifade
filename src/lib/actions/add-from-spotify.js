"use server";

import dbConnect from "../db/dbConnect";
import Song from "../db/models/Song";
import { getAccessToken } from "../spotify";

export async function addFromSpotify(_, formData) {
  // Obtém o id da música do Spotify
  const url = formData.get("url");
  const id = url.split("/").pop();

  // Obtém o token de acesso do Spotify
  const accessToken = await getAccessToken();

  // Obtém as informações da música do Spotify
  const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const error = response.headers.get("error_description");
    console.error(error);
    return { error: `Erro ao buscar a música: ${error}` };
  }

  const data = await response.json();

  // Adicionar na DB
  try {
    await dbConnect();
    const song = await Song.create({
      spotifyId: data.id,
      title: data.name,
      artists: data.artists.map((e) => e.name),
      releaseDate: data.release_date,
      popularity: data.popularity,
      durationMs: data.duration_ms,
      spotifyUrl: data.external_urls.spotify,
      imageUrl: data.album.images[0].url,
    });
    return { success: true, song: JSON.parse(JSON.stringify(song)) };
  } catch (err) {
    console.error(err);
    return { error: `Erro ao adicionar a música: ${err.message}` };
  }
}
