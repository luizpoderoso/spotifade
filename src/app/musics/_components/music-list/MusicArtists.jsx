import { addElement } from "@/lib/functional/lib";

export default function MusicArtists({ artists, filters, setFilters }) {
  return (
    <div className="flex">
      {artists.map((artist, index) => (
        <button
          key={index}
          className="text-xs text-gray-400 hover:text-red-400 hover:cursor-pointer"
          onClick={() =>
            setFilters(addElement(filters, { type: "artists", value: artist }))
          }
        >
          {artist}
          {index !== artists.length - 1 ? "," : ""}&nbsp;
        </button>
      ))}
    </div>
  );
}
