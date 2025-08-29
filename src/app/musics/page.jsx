"use server";

import dbConnect from "@/lib/db/dbConnect";
import Song from "@/lib/db/models/Song";
import MusicsView from "./_components/MusicsView";
import { currentUser } from "@clerk/nextjs/server";

export default async function MusicsPage() {
  const user = await currentUser();

  await dbConnect();
  const fetchedSongs = await Song.find({ userId: user.id }).sort({ _id: -1 });
  const plainSongs = JSON.parse(JSON.stringify(fetchedSongs));

  return <MusicsView initialSongs={plainSongs} />;
}
