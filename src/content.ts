// Tout le texte du site au même endroit : modifier ici, pas dans les composants.

export const SITE_URL = "https://trusthome.io";

export const site = {
  name: "TrustHome",
  legalName: "TRUSTHOME SAS",
  siren: "945 352 847",
  address: "60 rue François Ier, 75008 Paris",
  area: "France métropolitaine",
  email: "trusthome.io@gmail.com",
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
      "Je n’ai plus à me soucier de trouver des locataires, de gérer les entrées et sorties ou les petits soucis du quotidien. Avoir un locataire professionnel qui s’engage sur le long terme est un vrai plus. Mon loyer est versé chaque mois sans retard et mon appartement est très bien entretenu. C’est un réel confort de ne plus avoir à gérer tout ça et de pouvoir louer l’esprit tranquille.",
  },
  {
    name: "David P.",
    place: "Maison à Saint-Germain-en-Laye (78)",
    quote:
      "Au début, j’avais quelques appréhensions à l’idée de louer ma maison pendant mon expatriation, mais finalement, faire appel à TrustHome a été la meilleure décision. Je n’ai rien à gérer, ils ne me sollicitent jamais et mon loyer tombe chaque mois. Je peux sereinement profiter de mon expatriation et c’est exactement ce que je recherchais. Nous avons d’ailleurs été tellement satisfaits que nous leur louons désormais la quasi-totalité de notre parc immobilier. Merci à toute l’équipe !",
  },
  {
    name: "Nathalie M.",
    place: "T3 à Versailles (78)",
    quote:
      "Depuis que je loue mon appartement à TrustHome, je profite paisiblement de ma retraite. Plus besoin de chercher de nouveaux locataires, ni de me demander si je vais tomber sur quelqu’un de fiable ou qui risque d’abîmer mon logement. Après quelques mauvaises expériences ça fait vraiment du bien de pouvoir enfin louer sans avoir à se faire de souci. Un vrai soulagement.",
  },
  {
    name: "Isabelle B.",
    place: "T2 à Asnières-sur-Seine (92)",
    quote:
      "En tant qu’investisseur immobilier, ce que j’apprécie avec TrustHome, c’est surtout la tranquillité et la visibilité que ça m’apporte. Je sais que mon loyer sera versé chaque mois, que mon bien sera entretenu et que je n’aurai pas à gérer les changements de locataires. Aujourd’hui, j’envisage même mes futurs investissements différemment, en sachant que je peux compter sur un locataire professionnel et sérieux dès le départ. C’est un vrai plus pour développer mes investissements.",
  },
  {
    name: "Thomas R.",
    place: "Deauville (14)",
    quote:
      "TrustHome loue mon appartement depuis plusieurs mois et tout se passe très bien. Le loyer est versé chaque 1er du mois sans aucun retard. Le bien est très bien entretenu et ils m’ont même montré le résultat des embellissements apportés à l’appartement. C’est vraiment rassurant au quotidien.",
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
