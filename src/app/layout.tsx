import type { Metadata, Viewport } from 'next';
import { PT_Sans, Poppins, Space_Grotesk } from 'next/font/google';
import { ConsentBanner } from '@/components/analytics/consent-banner';
import { SITE_URL } from '@/lib/site';
import './globals.css';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

// Uniquement pour le mot « TRUSTHOME » du logo.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-poppins',
  display: 'swap',
});

const title = 'TrustHome : une entreprise loue votre logement, loyer versé chaque mois';
const description =
  "Propriétaires en Île-de-France hors Paris : TrustHome signe le bail, vous verse le loyer convenu chaque mois et paie le ménage et l'entretien courant. Aucun frais de gestion.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: '%s | TrustHome' },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'TrustHome',
    title,
    description,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Cuisine d’un logement loué par TrustHome' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.jpg'] },
};

export const viewport: Viewport = {
  themeColor: '#0b1b3f',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${ptSans.variable} ${spaceGrotesk.variable} ${poppins.variable}`}>
      <body>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
