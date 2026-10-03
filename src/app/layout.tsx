import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://trusthome.io"),
  title: "TrustHome — Loyer garanti, zéro souci",
  description:
    "Louez votre bien à TrustHome : loyer garanti chaque mois, entretien inclus, aucun frais d'agence.",
  openGraph: {
    title: "TrustHome — Loyer garanti, zéro souci",
    description: "Louez votre bien à TrustHome : loyer garanti chaque mois, entretien inclus.",
    images: ["/img/salon.jpg"],
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0e110f" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={geist.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
