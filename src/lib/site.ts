// Informations de l'entreprise et du tunnel, utilisées dans tout le site.
// Les mêmes données figurent dans les mentions légales du tunnel.

export const SITE_URL = 'https://trusthome.io';

export const COMPANY = {
  name: 'TrustHome',
  legalName: 'TRUSTHOME SAS',
  siren: '945 352 847',
  address: '60 rue François Ier, 75008 Paris',
  area: 'Île-de-France, hors Paris',
} as const;

export const CONTACT = {
  // À remplacer par contact@trusthome.io (#31)
  email: 'ajithanmoorthy@outlook.fr',
  phone: '0781685556',
  phoneDisplay: '07 81 68 55 56',
  phoneIntl: '+33781685556',
  whatsapp: '33781685556',
} as const;

export const TEL_HREF = `tel:${CONTACT.phoneIntl}`;
export const WHATSAPP_HREF = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  'Bonjour, je suis propriétaire et je voudrais en savoir plus sur TrustHome.',
)}`;

const FUNNEL_URL = (
  process.env.NEXT_PUBLIC_FUNNEL_URL || 'https://trusthome-proprietaires.vercel.app'
).replace(/\/$/, '');

// Lien vers le tunnel. Le tunnel enregistre les UTM avec chaque demande,
// ce qui permet de distinguer dans le tableau admin les leads venus du site
// de ceux venus des publicités.
export function funnelHref(placement: string): string {
  const params = new URLSearchParams({
    utm_source: 'trusthome.io',
    utm_medium: 'site',
    utm_campaign: 'vitrine',
    utm_content: placement,
  });
  return `${FUNNEL_URL}/?${params.toString()}`;
}

export const CTA_LABEL = 'Présenter mon logement';
