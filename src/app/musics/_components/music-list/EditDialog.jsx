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
import { updateMusic } from "@/lib/actions/update-music";
import { formatDuration } from "@/lib/aux";
import { Pencil } from "lucide-react";
import { useRef, useState } from "react";

export default function EditDialog({ song }) {
  const [open, onOpenChange] = useState(false);
  const submitButtonRef = useRef(null);

  const handleSubmit = async (formData) => {
    const data = Object.fromEntries(formData);

    if (submitButtonRef.current) {
      submitButtonRef.current.disabled = true;
      submitButtonRef.current.textContent = "Atualizando...";
    }

    try {
      const durationMs = convertToDurationMs(data.duration);
      verifyReleaseDate(data.releaseDate);
      formData.set("durationMs", durationMs ?? "");

      await updateMusic(song.spotifyId, formData);

      window.alert("Música atualizada com sucesso!");
      onOpenChange(false);
    } catch (error) {
      window.alert(error.message);
      return;
    }

    if (submitButtonRef.current) {
      submitButtonRef.current.disabled = false;
      submitButtonRef.current.textContent = "Atualizar";
    }
  };

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
          <form action={handleSubmit} className="space-y-5 [&>div]:space-y-1">
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
            <Button ref={submitButtonRef} type="submit">
              Atualizar
            </Button>
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

function convertToDurationMs(durationInput) {
  if (!durationInput) return null;

  // Verificando se o formato de duração está em segundos
  if (!isNaN(Number(durationInput))) {
    return Number(durationInput * 1000); // Se for um número puro, assume que está em segundos
  }

  // Verificando se o formato de duração está em minutos e segundos (0m 00s)
  const match = durationInput.match(/^(\d+)m\s*(\d{1,2})s$/);
  if (!match) {
    throw new Error(
      "Formato de duração inválido. Use '0m 00s' ou um valor em segundos.",
    );
  }

  const minutes = parseInt(match[1], 10);
  const seconds = parseInt(match[2], 10);
  return (minutes * 60 + seconds) * 1000; // Converte para milissegundos
}

function verifyReleaseDate(releaseDate) {
  if (!releaseDate) return null;
  const date = new Date(releaseDate);
  if (isNaN(date.getTime())) {
    throw new Error("Data de lançamento inválida.");
  }
}
