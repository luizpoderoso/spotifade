import { Button } from "@/components/ui/button";
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
        <span className="ml-2 text-lg font-semibold">SpotSova</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/musics/add">
          <Button variant="link">Nova Música</Button>
        </Link>
        <Link href="/musics">
          <Button variant="link">Música Salvas</Button>
        </Link>
      </nav>
    </header>
  );
}
