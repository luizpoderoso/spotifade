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
import { Input } from "@/components/ui/input";
import { searchFilter } from "@/lib/functional/lib";
import { useState } from "react";

export default function SearchDialog({ initialSongs, setSongs }) {
  const [open, onOpenChange] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    if (searchTerm.length < 3) {
      alert("Por favor, insira pelo menos 3 caracteres");
      return;
    }

    const filteredSongs = searchFilter(initialSongs, searchTerm);
    setSongs(filteredSongs);
    onOpenChange(false);
  }

  function handleClear() {
    setSearchTerm("");
    setSongs(initialSongs);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Buscar</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Buscar</DialogTitle>
            <DialogDescription>Procure por suas músicas</DialogDescription>
          </DialogHeader>
          <Input
            placeholder="Música, artista..."
            form="search-form"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <form id="search-form" onSubmit={handleSearch} className="flex gap-2">
            <Button type="submit">Buscar</Button>
            <Button variant="outline" type="button" onClick={handleClear}>
              Limpar Busca
            </Button>
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
