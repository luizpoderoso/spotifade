"use client";

import { Button } from "@/components/ui/button";
import {
  sortMusicByPopularity,
  sortMusicByReleaseDate,
} from "@/lib/functional/lib";
import AddMusicDialog from "./AddMusicDialog";

export default function ButtonList({ songs, setSongs }) {
  return (
    <div className="max-w-screen overflow-scroll flex justify-start space-x-3 mb-5 sm:justify-center">
      <Button
        variant="outline"
        onClick={() => {
          setSongs(sortMusicByPopularity(songs));
        }}
      >
        Ordenar por popularidade
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setSongs(sortMusicByReleaseDate(songs));
        }}
      >
        Ordenar por data de lançamento
      </Button>
      <AddMusicDialog />
    </div>
  );
}
