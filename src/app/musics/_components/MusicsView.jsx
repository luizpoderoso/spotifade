"use client";

import { useEffect, useState } from "react";
import ButtonList from "./button-list/ButtonList";
import MusicList from "./music-list/MusicList";
import FilterList from "./filter-list/FilterList";
import { countLength } from "@/lib/functional/lib";

export default function MusicsView({ initialSongs }) {
  const [songs, setSongs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setSongs(initialSongs);
  }, [initialSongs]);

  useEffect(() => {
    if (countLength(filters) === 0) setSongs(initialSongs);
  }, [filters]);

  return (
    <div className="min-w-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <ButtonList
          initialSongs={initialSongs}
          songs={songs}
          setSongs={setSongs}
        />
        <FilterList
          songs={songs}
          setSongs={setSongs}
          filters={filters}
          setFilters={setFilters}
        />
        <MusicList songs={songs} filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
}
