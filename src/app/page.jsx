"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Code } from "lucide-react";
import { ArrowRight, BarChart3, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const userReturn = useUser();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full">
        {/* ========= Seção Hero ========= */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Sua coleção de músicas do Spotify, organizada do seu jeito.
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Cansado de perder links em playlists bagunçadas? Com o
                SpotiFade, você salva, edita e visualiza suas músicas favoritas
                em uma biblioteca pessoal e intuitiva.
              </p>
              <Link href={userReturn.isSignedIn ? "/musics" : "/sign-up"}>
                <Button size="lg">
                  Começar a organizar gratuitamente
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========= Seção de Recursos ========= */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Tudo que você precisa para sua biblioteca musical
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Funcionalidades pensadas para amantes de música.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-12 sm:grid-cols-2 md:grid-cols-3">
              <div className="grid gap-2 text-center">
                <Code className="h-10 w-10 mx-auto" />
                <h3 className="text-xl font-bold">Programação Funcional</h3>
                <p className="text-muted-foreground">
                  Adicione, visualize, atualize e exclua músicas de sua
                  biblioteca, tudo sob o paradigma da Programação Funcional.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <LinkIcon className="h-10 w-10 mx-auto" />
                <h3 className="text-xl font-bold">Adição Rápida</h3>
                <p className="text-muted-foreground">
                  Cole o link de qualquer música do Spotify e adicione-a à sua
                  coleção em segundos.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <BarChart3 className="h-10 w-10 mx-auto" />
                <h3 className="text-xl font-bold">Insights Gráficos</h3>
                <p className="text-muted-foreground">
                  Descubra seus artistas mais salvos com gráficos interativos e
                  fáceis de entender.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========= Seção Final CTA ========= */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Pronto para tomar o controle da sua biblioteca musical?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Crie sua conta e comece a construir sua coleção definitiva hoje
                mesmo.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link href={userReturn.isSignedIn ? "/musics" : "/sign-up"}>
                <Button size="lg" className="w-full">
                  Criar minha coleção agora
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ========= Rodapé ========= */}
      <footer className="flex flex-col gap-2 sm:flex-row pt-6 pb-1 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2025 SpotiFade. Feito pelo grupo E de CC 2025.1 - UFS.
        </p>
      </footer>
    </div>
  );
}
