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
    <div className="flex space-x-8 mb-5 justify-center">
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
      <Button onClick={() => setAddDialogOpen(true)} variant="outline">
        Adicionar Música
      </Button>
      {addDialogOpen && (
        <AddMusicDialog open={addDialogOpen} setOpen={setAddDialogOpen} />
      )}
    </div>
  );
}
