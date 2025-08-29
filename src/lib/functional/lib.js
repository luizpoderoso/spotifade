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
export const countMusicsByArtists = (musics) =>
  musics.reduce((acc, music) => {
    functionalForEach(music.artists, (artist) => {
      acc[artist] = (acc[artist] || 0) + 1;
    });
    return acc;
  }, {});

const functionalForEach = ([x, ...xs], callback) => {
  callback(x);
  if (countLength(xs) > 0) functionalForEach(xs, callback);
};

const countLength = ([x, ...xs]) => (x === undefined ? 0 : 1 + countLength(xs));

// Modifica os dados já existentes em uma música
const updateMusicInfo = (music, toUpdate) => ({
  ...music,
  ...toUpdate,
});

// Busca músicas por título ou artista
export const searchFilter = (musics, searchTerm) => {
  const filtered = musics.filter(
    (music) =>
      music.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      music.artists.some((artist) =>
        artist.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );
  return filtered;
};
