// Atualiza uma música já existente (novo nome, etc)
const updateMusic = (musics, id, changes) =>
  musics.map((music) => (music.id === id ? { ...music, ...changes } : music));

// Elimina a música especificada
const deleteMusic = (musics, id) => musics.filter((music) => music.id !== id);

// Mostra todas as músicas
const listMusics = (musics) =>
  musics
    .map(
      (music) =>
        `${music.id} - "${music.name}" (${music.singer}, ${music.year})`,
    )
    .join("\n");

// Mostra as músicas por artista
const listMusicByArtist = (musics, singerName) =>
  musics.filter((music) => music.singer === singerName);

// Ordena as músicas por popularidade
export const sortMusicByPopularity = (musics) => {
  return musics.slice().sort((a, b) => b.popularity - a.popularity);
};

// Mostra as músicas por data (mais nova)
export const sortMusicByReleaseDate = (musics) => {
  return [...musics].sort((a, b) => {
    return new Date(b.releaseDate) - new Date(a.releaseDate);
  });
};

// Faz a contagem de quantas músicas cada artista possui
const countMusicsBySinger = (musics) =>
  musics.reduce((acc, music) => {
    acc[music.singer] = (acc[music.singer] || 0) + 1;
    return acc;
  }, {});

// Modifica os dados já existentes em uma música
const updateMusicName = (musics, transformFn) =>
  musics.map((music) => ({ ...music, title: transformFn(music.title) }));
