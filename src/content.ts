// Tout le texte du site au même endroit : modifier ici, pas dans les composants.

export const SITE_URL = "https://trusthome.io";

export const site = {
  name: "TrustHome",
  legalName: "TRUSTHOME SAS",
  siren: "945 352 847",
  address: "60 rue François Ier, 75008 Paris",
  area: "France métropolitaine",
  // À remplacer par contact@trusthome.io (#31)
  email: "ajithanmoorthy@outlook.fr",
  phone: "07 81 68 55 56",
  phoneIntl: "+33781685556",
  phoneHref: "tel:+33781685556",
  whatsappHref: `https://wa.me/33781685556?text=${encodeURIComponent(
    "Bonjour, je suis propriétaire et je voudrais en savoir plus sur TrustHome.",
  )}`,
};

// Résumé factuel réutilisé dans les métadonnées, le JSON-LD et llms.txt :
// les moteurs de réponse (Google AI, Perplexity, ChatGPT) reprennent ce type de phrase telle quelle.
export const summary =
  "TrustHome (TRUSTHOME SAS) est une société qui loue les logements de propriétaires partout en France métropolitaine. Elle signe le bail à son nom, verse le loyer convenu chaque mois au plus tard le 5, même si le logement est vide, et paie le ménage et l'entretien courant. Aucun frais de gestion ni frais d'agence.";

// Tunnel de demande (équipe externe). Tous les boutons d'action y mènent, avec des UTM
// qui permettent de reconnaître dans le tableau admin les leads venus du site.
const FUNNEL_URL = (process.env.NEXT_PUBLIC_FUNNEL_URL || "https://trusthome-proprietaires.vercel.app").replace(
  /\/$/,
  "",
);

export function funnelHref(placement: string): string {
  const params = new URLSearchParams({
    utm_source: "trusthome.io",
    utm_medium: "site",
    utm_campaign: "vitrine",
    utm_content: placement,
  });
  return `${FUNNEL_URL}/?${params.toString()}`;
}

export const cta = "Présenter mon logement";

export const nav = [
  { href: "/#avantages", label: "Avantages" },
  { href: "/#processus", label: "Fonctionnement" },
  { href: "/#comparatif", label: "Comparatif" },
  { href: "/#avis", label: "Avis" },
  { href: "/#faq", label: "FAQ" },
];

export const stats = [
  { value: "Le 5", label: "votre loyer versé chaque mois, au plus tard" },
  { value: "0 €", label: "de frais d'agence, de gestion ou de GLI" },
  { value: "24 h", label: "pour vous rappeler après votre demande" },
];

export const benefits = [
  {
    icon: "calendar",
    title: "Loyer garanti",
    text: "Votre loyer chaque mois, à date fixe, même si le bien est vacant. Plus besoin d'assurance loyers impayés.",
  },
  {
    icon: "shield",
    title: "Zéro tracas",
    text: "Ménage, entretien courant, petites réparations : c'est nous qui nous en occupons, et nous qui payons. Un seul interlocuteur.",
  },
  {
    icon: "sparkles",
    title: "Bien valorisé",
    text: "Ménage professionnel régulier, embellissements et maintenance préventive. Votre bien reste impeccable.",
  },
  {
    icon: "trending",
    title: "Levier bancaire",
    text: "Des revenus réguliers et un bail solide, appréciés des banques pour vos futurs projets.",
  },
] as const;

export const steps = [
  {
    title: "Vous présentez votre logement",
    text: "Cinq questions en ligne, environ deux minutes. Ou un simple appel.",
  },
  {
    title: "Nous vous rappelons sous 24 h",
    text: "Par téléphone ou WhatsApp, pour vous dire si votre logement correspond.",
  },
  {
    title: "Visite et signature du bail",
    text: "Un contrat rédigé par des avocats, sur 1, 2, 3 ans ou plus, que vous lisez avant de signer. TrustHome devient votre locataire.",
  },
  {
    title: "Vous encaissez",
    text: "Le loyer tombe chaque mois, au plus tard le 5. Nous assurons l'entretien et la maintenance.",
  },
];

export const comparison = [
  {
    label: "Revenus",
    classic: "Risque d'impayés et de vacance locative.",
    us: "Loyer versé à date fixe, même si le bien est vide.",
  },
  {
    label: "Frais",
    classic: "Frais d'agence (5–10 %) et assurance loyers impayés (2–4 %).",
    us: "Aucun frais d'agence ni de gestion, aucune GLI à payer.",
  },
  {
    label: "Sécurité",
    classic: "Risque de squat, bail rigide et préavis longs.",
    us: "Un seul locataire, une société. Contrat souple avec clauses de sortie.",
  },
  {
    label: "Entretien",
    classic: "À votre charge, bien souvent rendu usé.",
    us: "Ménage pro, embellissements et maintenance préventive à notre charge.",
  },
  {
    label: "Charge mentale",
    classic: "Imprévus, relations locataires, administratif.",
    us: "Aucune implication au quotidien.",
  },
];

// Avis réels (reçus sur WhatsApp), cités tels quels.
export const testimonials = [
  {
    name: "Maxime DL.",
    place: "T3 à Clichy (92)",
    quote:
      "TrustHome gère mon T3 à Clichy depuis plusieurs mois et le résultat est sans appel : loyer versé à date fixe, zéro tracas administratif. L'équipe est disponible, réactive et vraiment professionnelle. Je recommande à tous les propriétaires de la région.",
  },
  {
    name: "David P.",
    place: "Maison à Saint-Germain-en-Laye (78)",
    quote:
      "Au départ, j'avais quelques inquiétudes à l'idée de louer ma maison à Saint-Germain-en-Laye pendant mon expatriation. Finalement, avec TrustHome, tout s'est fait simplement : le loyer est versé régulièrement, sans souci, et la maison est bien entretenue. C'est rassurant de savoir que tout est géré sérieusement en mon absence.",
  },
  {
    name: "Nathalie M.",
    place: "T3 à Versailles (78)",
    quote:
      "Grâce à TrustHome, mon T3 à Versailles me garantit un loyer régulier chaque mois, sans que j'aie à gérer quoi que ce soit. L'équipe est sérieuse et réactive, ce qui est vraiment appréciable. Je peux profiter de ma retraite tranquillement.",
  },
  {
    name: "Isabelle B.",
    place: "T2 à Asnières-sur-Seine (92)",
    quote:
      "J'étais un peu sceptique au début, mais TrustHome a complètement transformé la gestion de mon T2 à Asnières. Zéro vacance locative, un entretien nickel.",
  },
  {
    name: "Thomas R.",
    place: "Deauville (14)",
    quote:
      "TrustHome gère mon appartement depuis plusieurs mois et tout se passe bien. Le loyer est versé régulièrement, le bien est entretenu et j'ai des nouvelles de temps en temps sur la gestion. C'est rassurant au quotidien, et je regrette de ne pas les avoir connus plus tôt.",
  },
];

// Questions formulées comme les propriétaires les tapent dans Google ou les posent à une IA,
// avec une réponse qui commence par la réponse directe.
export const faq = [
  {
    q: "Qu'est-ce que TrustHome ?",
    a: summary,
  },
  {
    q: "Dans quelles villes et régions TrustHome loue-t-il des logements ?",
    a: "Partout en France métropolitaine, pour les studios, les appartements et les maisons. Présentez votre logement en ligne : nous vous disons sous 24 heures s'il correspond.",
  },
  {
    q: "Mon loyer est-il garanti si le logement n'est pas occupé ?",
    a: "Oui. TrustHome est votre locataire : nous vous versons le loyer convenu à date fixe, au plus tard le 5 de chaque mois, que le logement soit occupé ou non.",
  },
  {
    q: "Quelle différence avec une agence de gestion locative ?",
    a: "Une agence gère votre bien pour vous et prélève une commission, généralement 5 à 10 % des loyers ; le risque d'impayé et de vacance reste pour vous. TrustHome ne gère pas votre bien : nous le louons. Nous sommes le locataire, nous payons le loyer, et il n'y a aucun frais de gestion.",
  },
  {
    q: "Quels sont les frais ?",
    a: "Aucun. Pas de frais d'agence, pas de commission sur vos loyers, et vous n'avez plus besoin d'assurance loyers impayés.",
  },
  {
    q: "Qui s'occupe de l'entretien et des réparations ?",
    a: "TrustHome prend en charge l'entretien courant, les petites réparations, les embellissements et le ménage professionnel, à ses frais. Pour les gros travaux structurels (chaudière, toiture), nous vous consultons selon les termes du bail.",
  },
  {
    q: "Qui occupe le logement ?",
    a: "TrustHome reste votre unique locataire. Nous y accueillons des professionnels et des voyageurs soigneusement vérifiés, pour des durées définies avec nous.",
  },
  {
    q: "Quelle est la durée du contrat ?",
    a: "Nos baux, rédigés par des avocats, durent généralement de 1 à 3 ans, renouvelables, avec des clauses de sortie ou de revente anticipée. Vous lisez le bail avant de signer quoi que ce soit.",
  },
  {
    q: "Suis-je protégé contre le risque de squat ?",
    a: "Oui. Les occupants n'ont aucun bail direct avec vous : votre seul locataire est TrustHome, une société.",
  },
  {
    q: "Et en cas de dégradations ?",
    a: "TrustHome est responsable de l'état du bien. En plus des assurances adaptées, l'entretien régulier et les remises en état font partie de notre modèle.",
  },
  {
    q: "Est-ce que cela aide pour un prêt bancaire ?",
    a: "Des revenus réguliers versés par une société, adossés à un bail solide, sont très appréciés des banques pour financer vos futurs projets.",
  },
  {
    q: "Combien de temps pour avoir une réponse ?",
    a: "Après votre demande en ligne (cinq questions, environ deux minutes), nous vous rappelons sous 24 heures, par téléphone ou WhatsApp.",
  },
];
