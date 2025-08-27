"use server";

import dbConnect from "@/lib/db/dbConnect";
import Song from "@/lib/db/models/Song";
import MusicList from "./_components/MusicList";

export default async function MusicsPage() {
  await dbConnect();
  const songs = await Song.find({});

  return (
    <div className="min-w-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <MusicList initialSongs={JSON.parse(JSON.stringify(songs))} />
      </div>
    </div>
  );
}
