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
import { Label } from "@/components/ui/label";
import { formatDuration } from "@/lib/aux";
import { Pencil } from "lucide-react";
import { useState } from "react";

export default function EditDialog({ song }) {
  const [open, onOpenChange] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" alt="Edit Music" title="Edit Music">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edição da Música</DialogTitle>
            <DialogDescription>
              Atualize as informações da música
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-5 [&>div]:space-y-1">
            <div>
              <Label htmlFor="title">Título</Label>
              <Input id="title" name="title" placeholder={song.title}></Input>
            </div>
            <div>
              <Label htmlFor="imageUrl">URL da Imagem</Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                placeholder={song.imageUrl}
              ></Input>
            </div>
            <div>
              <Label htmlFor="releaseDate">Data de Lançamento</Label>
              <Input
                id="releaseDate"
                name="releaseDate"
                placeholder={song.releaseDate}
              ></Input>
            </div>
            <div>
              <Label htmlFor="duration">Duração</Label>
              <Input
                id="duration"
                name="duration"
                placeholder={formatDuration(song.durationMs)}
              ></Input>
            </div>
            <Button>Atualizar</Button>
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
