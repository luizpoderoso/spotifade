"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { addFromSpotify } from "@/lib/actions/add-from-spotify";
import { X } from "lucide-react";
import { useRef } from "react";

export default function AddMusicDialog({ open, setOpen }) {
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <DialogTitle>Adicione uma música</DialogTitle>
          <DialogDescription>Conexão com API do Spotify</DialogDescription>
          <Input
            form="add-music"
            name="url"
            placeholder="Cole o link da música aqui"
          />
        </DialogHeader>
        <DialogFooter className="flex">
          <SubmitButton setOpen={setOpen} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function SubmitButton({ setOpen }) {
  const formRef = useRef(null);
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
      console.error(error);
      window.alert("Erro ao adicionar música");
    } finally {
      setOpen(false);
    }
  }

  return (
    <form ref={formRef} name="add-music" id="add-music" action={handleSubmit}>
      <Button ref={submitButtonRef} type="submit">
        Adicionar
      </Button>
    </form>
  );
}
