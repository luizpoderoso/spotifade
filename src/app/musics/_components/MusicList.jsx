"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ButtonList from "./ButtonList";
import { areListsEqual } from "@/lib/functional/lib";

export default function MusicList({ initialSongs }) {
  const INTERVAL_TIME = 10000;
  const router = useRouter();

  const [songs, setSongs] = useState(initialSongs);

  useEffect(() => {
    // Se alguma música nova tiver sido adicionada, atualizar o estado
    if (!areListsEqual(initialSongs, songs)) {
      setSongs(initialSongs);
    }
  }, [initialSongs]);

  // Forçar a atualização de songs
  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh();
    }, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div>
      <ButtonList songs={songs} setSongs={setSongs} />
      <ul className="w-full max-w-7xl flex flex-col items-center lg:grid lg:grid-cols-3 gap-10">
        {songs.map((song) => (
          <li className="w-full max-w-sm" key={song.spotifyId}>
            <Card className="w-full">
              <CardHeader className="w-full flex justify-center">
                <Link href={song.spotifyUrl}>
                  <img
                    className="rounded overflow-hidden"
                    src={song.imageUrl}
                    alt={song.title}
                    width={300}
                    height={300}
                  />
                </Link>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <h3 className="text-lg font-bold">{song.title}</h3>
                <ul>
                  <p>{song.artists.join(", ")}</p>
                </ul>
              </CardContent>
              <CardFooter className="w-full grid grid-cols-2 px-11 gap-3">
                <DeleteButton id={song.spotifyId} />
                <Button disabled variant="default">
                  Atualizar
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
