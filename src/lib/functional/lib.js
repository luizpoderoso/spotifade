// Ordena as músicas por popularidade (mais populares)
export const sortMusicByPopularity = (musics) => {
  return musics.slice().sort((a, b) => b.popularity - a.popularity);
};

// Ordena as músicas por popularidade (menos populares)
export const sortMusicByMinorPopularity = (musics) => {
  return musics.slice().sort((a, b) => a.popularity - b.popularity);
};

// Mostra as músicas por data (mais nova)
export const sortMusicByReleaseDate = (musics) => {
  return [...musics].sort((a, b) => {
    return new Date(b.releaseDate) - new Date(a.releaseDate);
  });
};

// Mostra as músicas por data (mais velha)
export const sortMusicByReleaseDateOlder = (musics) => {
  return [...musics].sort((a, b) => {
    return new Date(a.releaseDate) - new Date(b.releaseDate);
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

  // { "Artist Name": 3, "Another Artist": 5, ... }

const functionalForEach = ([x, ...xs], callback) => {
  callback(x);
  if (countLength(xs) > 0) functionalForEach(xs, callback);
};

export const countLength = ([x, ...xs]) =>
  x === undefined ? 0 : 1 + countLength(xs);

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

// Remover um elemento de uma lista
export const removeElement = (array, element) =>
  array.filter((item) => item !== element);

// Adicionar um elemento a uma lista
export const addElement = (array, element) =>
  array.includes(element) ? array : [...array, element];


// filters = [{ type: "artists", value: "Artist Name" }, ...]

export const filterMusics = (musics, filters) =>
  filters.reduce((acc, curr) => {
    const validMusics = musics.filter((music) => {
      if (curr.type === "artists") return music.artists.includes(curr.value);
    });

    functionalForEach(validMusics, (music) => {
      const exists = acc.some((item) => item._id === music._id);
      if (!exists) acc.push(music);
    });

    return acc;
  }, []);

  // lista de musicas



// Função recursiva para comparar duas strings (A-Z, a-z, sem acentuação)
export const recursiveStringCompare = (a, b, i = 0) => {
  if (i >= a.length && i >= b.length) return 0; // Iguais
  if (i >= a.length) return -1; // a terminou antes
  if (i >= b.length) return 1;  // b terminou antes

  const charA = a[i].toLowerCase();
  const charB = b[i].toLowerCase();

  if (charA < charB) return -1;
  if (charA > charB) return 1;
  return recursiveStringCompare(a, b, i + 1);
};

// Ordem alfabética crescente (A-Z) usando a função recursiva
export const sortAlphabeticalAsc = (musics) => {
  return [...musics].sort((a, b) =>
    recursiveStringCompare(a.title, b.title)
  );
};

// Ordem alfabética decrescente (Z-A) usando a função recursiva
export const sortAlphabeticalDesc = (musics) => {
  return [...musics].sort((a, b) =>
    recursiveStringCompare(b.title, a.title)
  );
};

// Ordenar por duração (mais curta primeiro)
export const sortByDurationAsc = (musics) => {
    return [...musics].sort((a, b) => a.durationMs - b.durationMs);
};

// Ordenar por duração (mais longa primeiro)
export const sortByDurationDesc = (musics) => {
    return [...musics].sort((a, b) => b.durationMs - a.durationMs);
};