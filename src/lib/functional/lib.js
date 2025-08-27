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
