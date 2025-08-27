"use server";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import dbConnect from "@/lib/db/dbConnect";
import Song from "@/lib/db/models/Song";
import Link from "next/link";

export default async function MusicsPage() {
  await dbConnect();
  const songs = await Song.find({});

  return (
    <div className="container mx-auto flex justify-center">
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
                <Button disabled variant="destructive">
                  Deletar
                </Button>
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
