"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { addFromSpotify } from "@/lib/actions/add-from-spotify";
import { Music } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

const initialState = { error: null, success: null, song: null };

export default function AddMusicPage() {
  const [state, formAction] = useActionState(addFromSpotify, initialState);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (state.success) {
      console.log(state.song);
      setMessage(`Música adicionada com sucesso: ${state.song.title}`);
    }
    if (state.error) {
      setMessage(`Erro ao adicionar música: ${state.error}`);
    }
  }, [state]);

  return (
    <div className="container mx-auto">
      <form action={formAction} className="flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Adicione uma música</CardTitle>
            <CardDescription>Conexão com API do Spotify</CardDescription>
            <CardAction>
              <Link href="https://open.spotify.com">
                <Button type="button" variant="outline">
                  <Music />
                </Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Input name="url" placeholder="Cole o link da música aqui" />
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </Card>
      </form>
      <p
        className={`mt-4 text-center ${state.success ? "text-green-500" : "text-red-500"}`}
      >
        {message && `${message}`}
      </p>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Adicionando..." : "Adicionar"}
    </Button>
  );
}
