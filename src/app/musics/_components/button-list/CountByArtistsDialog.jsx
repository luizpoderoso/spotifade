"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { countMusicsByArtists } from "@/lib/functional/lib";
import { useState } from "react";

export default function CountByArtistsDialog({ initialSongs }) {
  const [open, onOpenChange] = useState(false);
  const groupedByArtist = countMusicsByArtists(initialSongs);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Contar por Artista</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contagem por Artistas</DialogTitle>
            <DialogDescription>
              Contagem de quantas músicas cada artista tem
            </DialogDescription>
          </DialogHeader>
          <ul>
            {Object.entries(groupedByArtist)
              .sort(([_1, countA], [_2, countB]) => countB - countA)
              .map(([artist, count], i) => (
                <li key={artist}>
                  {i + 1}. {artist}: {count}
                </li>
              ))}
          </ul>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
