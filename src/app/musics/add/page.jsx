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
import { Music } from "lucide-react";
import Link from "next/link";
import { useFormStatus } from "react-dom";

export default function AddMusicPage() {
  return (
    <div className="container mx-auto">
      <form className="flex justify-center">
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
            <Input placeholder="Cole o link da música aqui" />
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </Card>
      </form>
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
