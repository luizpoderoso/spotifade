// Ordena as músicas por popularidade (mais populares)
export const sortMusicByPopularity = (musics) => {
  return musics.slice().sort((a, b) => b.popularity - a.popularity);
};

// Ordena as músicas por popularidade (mais populares)
export const sortMusicByMinorPopularity = (musics) => {
  return musics.slice().sort((a, b) => a.popularity - b.popularity);
};

// Mostra as músicas por data (mais nova)
export const sortMusicByReleaseDate = (musics) => {
  return [...musics].sort((a, b) => {
    return new Date(b.releaseDate) - new Date(a.releaseDate);
  });
};

// Mostra as músicas por data (mais nova)
export const sortMusicByReleaseDateOlder = (musics) => {git 
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

  // Ordem alfabética crescente (A-Z)
const sortAlphabeticalAsc = (items, key = null) => {
    return [...items].sort((a, b) => {
        const valueA = key ? a[key].toString().toLowerCase() : a.toString().toLowerCase();
        const valueB = key ? b[key].toString().toLowerCase() : b.toString().toLowerCase();
        
        return valueA.localeCompare(valueB);
    });
};

// Ordem alfabética decrescente (Z-A)
const sortAlphabeticalDesc = (items, key = null) => {
    return [...items].sort((a, b) => {
        const valueA = key ? a[key].toString().toLowerCase() : a.toString().toLowerCase();
        const valueB = key ? b[key].toString().toLowerCase() : b.toString().toLowerCase();
        
        return valueB.localeCompare(valueA);
    });
};

// Ordenar por duração (mais curta primeiro)
const sortByDurationAsc = (musics) => {
    return [...musics].sort((a, b) => a.duration - b.duration);
};

// Ordenar por duração (mais longa primeiro)
const sortByDurationDesc = (musics) => {
    return [...musics].sort((a, b) => b.duration - a.duration);
};