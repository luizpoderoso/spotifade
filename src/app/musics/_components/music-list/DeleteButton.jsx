"use client";

import { Button } from "@/components/ui/button";
import { deleteSong } from "@/lib/actions/delete-music";
import { Loader } from "lucide-react";
import { Trash } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const initialState = { success: null, message: "" };

export default function DeleteButton({ id }) {
  const [_, action] = useActionState(deleteSong, initialState);

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
    <Button
      type="submit"
      variant="destructive"
      disabled={pending}
      alt="Delete Music"
      title="Delete Music"
    >
      {pending ? <Loader className="transition animate-spin" /> : <Trash />}
    </Button>
  );
}
