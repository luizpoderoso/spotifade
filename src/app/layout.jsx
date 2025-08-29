import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import AppHeader from "./_components/AppHeader";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import { dark } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SpotiFade",
  description: "Salve suas músicas favoritas, acesse-as a qualquer momento.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={dark} localization={ptBR}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`min-w-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <AppHeader />
            <div className="w-full h-full py-5">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
