"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Trash } from "lucide-react";
import { Pencil } from "lucide-react";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default function MusicList({ songs }) {
  return (
    <ul className="w-full max-w-7xl flex flex-col items-center gap-5">
      {songs.map((song) => (
        <li className="w-full max-w-md" key={song.spotifyId}>
          <Card className="w-full h-full flex flex-row py-0 rounded overflow-hidden gap-0">
            <img
              src={song.imageUrl}
              alt={song.title}
              width={130}
              height={130}
            />
            <div className="w-full flex flex-col py-3 -space-y-1 px-3">
              <p className="font-semibold">{song.title}</p>
              <p className="text-sm text-gray-400">{song.artists.join(", ")}</p>
              <p className="text-xs">{formatDuration(song.durationMs)}</p>
              <div className="grow"></div>
              <div className="w-full flex relative justify-between">
                <div className="flex justify-start w-full pr-3">
                  <Link className="w-full" href={song.spotifyUrl}>
                    <Button className="w-full" variant="outline">
                      Ouvir
                      <Play />
                    </Button>
                  </Link>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">
                    <Pencil />
                  </Button>
                  <DeleteButton id={song.spotifyId} />
                </div>
              </div>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}

function formatDuration(durationMs) {
  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor((durationMs % 60000) / 1000);
  return `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
}
