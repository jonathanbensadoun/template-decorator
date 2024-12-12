import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Claire Dubois | Décoratrice de Cinéma",
  description:
    "Portfolio de Claire Dubois, décoratrice de cinéma basée à Paris. Découvrez mes projets de décoration pour le cinéma français et international.",
  keywords:
    "décoration cinéma, set designer, movie set decorator, claire dubois, paris, cinéma français",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={playfair.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
