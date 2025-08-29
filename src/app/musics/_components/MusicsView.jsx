"use client";

import { useEffect, useState } from "react";
import ButtonList from "./button-list/ButtonList";
import MusicList from "./music-list/MusicList";

export default function MusicsView({ initialSongs }) {
  const [songs, setSongs] = useState([]);

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
        <MusicList songs={songs} />
      </div>
    </div>
  );
}
