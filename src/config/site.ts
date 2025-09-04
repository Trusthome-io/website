import type { SEOConfig } from '@/types/global';

// Site configuration
export const siteConfig = {
  name: 'TrustHome',
  description: 'Votre partenaire de confiance pour tous vos projets immobiliers et de rénovation',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://trusthome.io',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/trusthome',
    github: 'https://github.com/trusthome-io',
    linkedin: 'https://linkedin.com/company/trusthome',
  },
  contact: {
    email: 'contact@trusthome.io',
    phone: '+33 1 23 45 67 89',
    address: 'Paris, France',
  },
} as const;

// SEO default configuration
export const defaultSEO: SEOConfig = {
  title: 'TrustHome - Rénovation et Projets Immobiliers de Confiance',
  description:
    'TrustHome vous accompagne dans tous vos projets de rénovation et immobiliers. Expertise, transparence et qualité garanties.',
  keywords: [
    'rénovation',
    'immobilier',
    'travaux',
    'construction',
    'maison',
    'appartement',
    'paris',
    'france',
    'trusthome',
  ],
  author: 'TrustHome',
  url: siteConfig.url,
  image: `${siteConfig.url}/og-image.jpg`,
};

// Navigation links
export const navigationLinks = [
  {
    title: 'Accueil',
    href: '#hero',
  },
  {
    title: 'Notre Histoire',
    href: '#storytelling',
  },
  {
    title: 'Notre Processus',
    href: '#process',
  },
  {
    title: 'Avantages',
    href: '#comparison',
  },
  {
    title: 'FAQ',
    href: '#faq',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
] as const;

// Footer links
export const footerLinks = {
  services: [
    { title: 'Rénovation complète', href: '/services/renovation' },
    { title: 'Décoration', href: '/services/decoration' },
    { title: 'Expertise technique', href: '/services/expertise' },
    { title: 'Suivi de chantier', href: '/services/suivi' },
  ],
  company: [
    { title: 'À propos', href: '/about' },
    { title: 'Notre équipe', href: '/team' },
    { title: 'Nos valeurs', href: '/values' },
    { title: 'Carrières', href: '/careers' },
  ],
  legal: [
    { title: 'Mentions légales', href: '/legal' },
    { title: 'Politique de confidentialité', href: '/privacy' },
    { title: 'Conditions d\'utilisation', href: '/terms' },
    { title: 'CGV', href: '/cgv' },
  ],
} as const;