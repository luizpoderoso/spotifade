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

// Compara se duas listas têm os mesmos elementos, independentemente da ordem
export const areListsEqual = (list1, list2) => {
  if (list1.length !== list2.length) return false;
  const sortedList1 = [...list1].sort();
  const sortedList2 = [...list2].sort();
  return JSON.stringify(sortedList1) === JSON.stringify(sortedList2);
};

// Faz a contagem de quantas músicas cada artista possui
const countMusicsBySinger = (musics) =>
  musics.reduce((acc, music) => {
    acc[music.singer] = (acc[music.singer] || 0) + 1;
    return acc;
  }, {});

// Modifica os dados já existentes em uma música
const updateMusicInfo = (music, toUpdate) => ({
  ...music,
  ...toUpdate,
});
