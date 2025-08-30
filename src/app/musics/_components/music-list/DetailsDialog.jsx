"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatDuration } from "@/lib/aux";
import { Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DetailsDialog({ song }) {
  const [open, onOpenChange] = useState(false);

  const releaseDate = new Date(song.releaseDate).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <Info />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes</DialogTitle>
          <DialogDescription>Detalhes da música</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4">
          <img
            src={song.imageUrl}
            alt={`Capa do álbum de ${song.title}`}
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-xl md:text-3xl font-bold tracking-tight">
              {song.title}
            </h1>
            <p className="md:text-xl text-muted-foreground md:mt-2">
              {song.artists.join(", ")}
            </p>
            <div className="mt-6 space-y-2 text-foreground/80 text-sm md:text-base">
              <p>
                <strong>Duração da música:</strong>{" "}
                {formatDuration(song.durationMs)}
              </p>
              <p>
                <strong>Lançamento:</strong> {releaseDate}
              </p>
              <p>
                <strong>Popularidade no Spotify:</strong> {song.popularity}
              </p>
            </div>
            <Button asChild className="mt-6 w-fit">
              <Link href={song.spotifyUrl} target="_blank">
                Ouvir no Spotify
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
