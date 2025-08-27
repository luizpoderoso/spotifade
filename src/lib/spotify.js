const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

let cachedToken = {
  value: null,
  expirationTime: 0,
};

/**
 * Obtém um token de acesso para a API do Spotify.
 * @returns Token de acesso.
 */
export async function getAccessToken() {
  if (cachedToken.value && Date.now() < cachedToken.expirationTime - 60000) {
    console.log("Retornando token do cache.");
    return cachedToken.value;
  }

  console.log("Token expirado ou inexistente. Buscando um novo...");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
  });

  if (!response.ok) {
    throw new Error("Falha ao obter o token de acesso do Spotify");
  }

  const data = await response.json();

  const expiresIn = data.expires_in;
  cachedToken = {
    value: data.access_token,
    expirationTime: Date.now() + expiresIn * 1000,
  };

  return cachedToken.value;
}
