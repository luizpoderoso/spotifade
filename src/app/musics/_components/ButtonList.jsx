"use client";

import { Button } from "@/components/ui/button";
import {
  sortMusicByPopularity,
  sortMusicByReleaseDate,
} from "@/lib/functional/lib";
import { useState } from "react";
import AddMusicDialog from "./AddMusicDialog";

export default function ButtonList({ songs, setSongs }) {
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  return (
    <div className="flex space-x-3 mb-5 justify-center">
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
      <AddMusicDialog open={addDialogOpen} setOpen={setAddDialogOpen} />
    </div>
  );
}
