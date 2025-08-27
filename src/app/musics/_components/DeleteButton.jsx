"use client";

import { Button } from "@/components/ui/button";
import { deleteSong } from "@/lib/actions/delete-music";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const initialState = { success: null, message: "" };

export default function DeleteButton({ id }) {
  const [state, action] = useActionState(deleteSong, initialState);
  console.log(id)

  return (
    <form action={action}>
      <SubmitButton />
      <input className="hidden" name="id" value={id} readOnly />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" variant="destructive" disabled={pending}>
      {pending ? "Deletando..." : "Deletar"}
    </Button>
  );
}
