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
  sortMusicByPopularity,
  sortMusicByReleaseDate,
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

    if (option === "popularity") {
      setSongs(sortMusicByPopularity(songs));
    } else if (option === "releaseDate") {
      setSongs(sortMusicByReleaseDate(songs));
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
              <RadioGroupItem value="popularity" id="popularity" />
              <Label htmlFor="popularity">Popularidade</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="releaseDate" id="releaseDate" />
              <Label htmlFor="releaseDate">Data de Lançamento</Label>
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
