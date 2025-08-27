import { Button } from "@/components/ui/button";
import {
  sortMusicByPopularity,
  sortMusicByReleaseDate,
} from "@/lib/functional/lib";

export default function ButtonList({ songs, setSongs }) {
  return (
    <div className="flex space-x-8 mb-5 justify-center">
      <Button
        onClick={() => {
          setSongs(sortMusicByPopularity(songs));
        }}
      >
        Ordenar por popularidade
      </Button>
      <Button
        onClick={() => {
          setSongs(sortMusicByReleaseDate(songs));
        }}
      >
        Ordenar por data de lançamento
      </Button>
    </div>
  );
}
