import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { ArrowRightToLine } from "lucide-react";
import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
      <Link
        href="/"
        prefetch={false}
        className="flex items-center justify-center"
      >
        <ArrowRightToLine />
        <span className="ml-2 text-lg font-semibold">SpotiFade</span>
      </Link>
      <nav className="ml-auto flex gap-2 sm:gap-4">
        <SignedOut>
          <SignInButton>
            <Button variant="ghost">Entrar</Button>
          </SignInButton>
          <SignUpButton>
            <Button variant="default">Cadastrar-se</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <Link href="/musics">
            <Button variant="ghost">Acessar CRUD</Button>
          </Link>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}
