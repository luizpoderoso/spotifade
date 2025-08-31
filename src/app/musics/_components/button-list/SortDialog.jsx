"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  sortByDurationAsc,
  sortByDurationDesc,
  sortMusicByMinorPopularity,
  sortMusicByPopularity,
  sortMusicByReleaseDate,
  sortMusicByReleaseDateOlder,
} from "@/lib/functional/lib";
import { useState } from "react";

export default function SortDialog({ songs, setSongs }) {
  const [open, onOpenChange] = useState(false);
  const [option, setOption] = useState("");

  function handleSort() {
    if (!option) {
      window.alert("Selecione uma opção!");
      return;
    }

    if (option === "popularity-decresc") {
      setSongs(sortMusicByPopularity(songs));
    } else if (option === "popularity-cresc") {
      setSongs(sortMusicByMinorPopularity(songs));
    } else if (option === "releaseDate-decresc") {
      setSongs(sortMusicByReleaseDate(songs));
    } else if (option === "releaseDate-cresc") {
      setSongs(sortMusicByReleaseDateOlder(songs));
    } else if (option === "duration-decresc") {
      setSongs(sortByDurationDesc(songs));
    } else if (option === "duration-cresc") {
      setSongs(sortByDurationAsc(songs));
    } else {
      window.alert("Escolha uma opção válida!");
      setOption("");
      return;
    }

    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Ordenar</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ordenamento</DialogTitle>
            <DialogDescription>Ordene suas músicas</DialogDescription>
          </DialogHeader>
          <RadioGroup value={option} onValueChange={setOption}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="popularity-decresc"
                id="popularity-decresc"
              />
              <Label htmlFor="popularity-decresc">
                Mais Populares
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="popularity-cresc" id="popularity-cresc" />
              <Label htmlFor="popularity-cresc">Menos Populares</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="releaseDate-decresc"
                id="releaseDate-decresc"
              />
              <Label htmlFor="releaseDate-decresc">
                Mais Novas
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="releaseDate-cresc"
                id="releaseDate-cresc"
              />
              <Label htmlFor="releaseDate-cresc">
                Mais Velhas
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="duration-decresc" id="duration-decresc" />
              <Label htmlFor="duration-decresc">Mais Longas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="duration-cresc" id="duration-cresc" />
              <Label htmlFor="dduration-cresc">Mais Curtas</Label>
            </div>
          </RadioGroup>
          <div>
            <Button type="button" onClick={handleSort}>
              Ordenar
            </Button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
