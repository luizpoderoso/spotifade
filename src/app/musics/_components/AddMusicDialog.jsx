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
import { addFromSpotify } from "@/lib/actions/add-from-spotify";
import { useRef, useState } from "react";

export default function AddMusicDialog() {
  const [open, onOpenChange] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Adicionar Música</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicione uma música</DialogTitle>
            <DialogDescription>Conexão com API do Spotify</DialogDescription>
          </DialogHeader>
          <Input
            form="add-music"
            name="url"
            placeholder="Cole o link da música aqui"
          />
          <SubmitButton onOpenChange={onOpenChange} />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

function SubmitButton({ onOpenChange }) {
  const submitButtonRef = useRef(null);

  async function handleSubmit(formData) {
    if (submitButtonRef.current) {
      submitButtonRef.current.disabled = true;
      submitButtonRef.current.textContent = "Adicionando...";
    }

    try {
      await addFromSpotify(formData);
      window.alert("Música adicionada com sucesso!");
    } catch (error) {
      console.error(error.message);
      window.alert("Erro ao adicionar música.");
    } finally {
      onOpenChange(false);
    }
  }

  return (
    <form name="add-music" id="add-music" action={handleSubmit}>
      <Button ref={submitButtonRef} type="submit">
        Adicionar
      </Button>
    </form>
  );
}
