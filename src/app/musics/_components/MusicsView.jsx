"use client";

import { useEffect, useState } from "react";
import ButtonList from "./button-list/ButtonList";
import MusicList from "./music-list/MusicList";
import FilterList from "./filter-list/FilterList";

export default function MusicsView({ initialSongs }) {
  const [songs, setSongs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setSongs(initialSongs);
  }, [initialSongs]);

  return (
    <div className="min-w-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <ButtonList
          initialSongs={initialSongs}
          songs={songs}
          setSongs={setSongs}
        />
        <FilterList filters={filters} setFilters={setFilters} />
        <MusicList songs={songs} filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
}
