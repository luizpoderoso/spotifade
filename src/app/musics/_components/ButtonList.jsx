"use client";

import AddMusicDialog from "./AddMusicDialog";
import SortDialog from "./SortDialog";

export default function ButtonList({ songs, setSongs }) {
  return (
    <div className="max-w-screen overflow-scroll flex justify-start space-x-3 mb-5 sm:justify-center">
      <SortDialog songs={songs} setSongs={setSongs} />
      <AddMusicDialog />
    </div>
  );
}
