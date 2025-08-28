"use server";

import dbConnect from "@/lib/db/dbConnect";
import Song from "@/lib/db/models/Song";
import MusicsView from "./_components/MusicsView";

export default async function MusicsPage() {
  await dbConnect();
  const fetchedSongs = await Song.find({});
  const plainSongs = JSON.parse(JSON.stringify(fetchedSongs));

  return <MusicsView initialSongs={plainSongs} />;
}
