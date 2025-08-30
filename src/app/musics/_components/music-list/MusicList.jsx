"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import EditDialog from "./EditDialog";
import { formatDuration } from "@/lib/aux";
import MusicArtists from "./MusicArtists";
import { Info } from "lucide-react";

export default function MusicList({ songs, filters, setFilters }) {
  return (
    <ul className="w-full flex flex-col items-center gap-5 mt-2">
      {songs.map((song) => (
        <li className="w-full max-w-sm sm:max-w-md" key={song._id}>
          <Card className="w-full h-full flex flex-row py-0 rounded overflow-hidden gap-0">
            <img
              src={song.imageUrl}
              alt={song.title}
              width={130}
              height={130}
            />
            <div className="w-full flex flex-col py-3 -space-y-1 px-3">
              <Link href={`/musics/${song._id}`}>
                <p className="text-sm font-semibold">{song.title}</p>
              </Link>
              <MusicArtists
                artists={song.artists}
                filters={filters}
                setFilters={setFilters}
              />
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
                  <Link href={`/musics/${song._id}`}>
                    <Button>
                      <Info />
                    </Button>
                  </Link>
                  <EditDialog song={song} />
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
