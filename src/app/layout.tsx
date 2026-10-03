import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { ConsentBanner } from "@/components/consent-banner";
import { SITE_URL } from "@/content";
import { themeScript } from "@/lib/theme";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

const title = "TrustHome : une entreprise loue votre logement, loyer garanti chaque mois";
const description =
  "Propriétaires partout en France métropolitaine : TrustHome signe le bail, vous verse le loyer convenu chaque mois au plus tard le 5, même si le logement est vide, et paie le ménage et l'entretien. Aucun frais de gestion.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | TrustHome" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "TrustHome",
    title,
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Cuisine d'un logement loué par TrustHome" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

// Une seule couleur ici : le script de thème la met à jour selon le thème choisi.
export const viewport: Viewport = {
  themeColor: "#f7f8fa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-theme est posé par le script avant l'hydratation, d'où suppressHydrationWarning.
    <html lang="fr" className={geist.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
