// Tout le texte du site au même endroit : modifier ici, pas dans les composants.

export const site = {
  name: "TrustHome",
  city: "Clichy, Hauts-de-Seine",
  email: "ajithanmoorthy@outlook.fr",
  phone: "07 81 68 55 56",
  phoneHref: "tel:+33781685556",
  whatsappHref: "https://wa.me/33781685556",
};

export const nav = [
  { href: "#avantages", label: "Avantages" },
  { href: "#processus", label: "Fonctionnement" },
  { href: "#comparatif", label: "Comparatif" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
];

export const stats = [
  { value: "100 %", label: "du loyer versé à date fixe" },
  { value: "0 €", label: "de frais d'agence ou de GLI" },
  { value: "1 à 3 ans", label: "de bail flexible et renouvelable" },
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
    text: "Exploitation, entretien, petites réparations : TrustHome s'occupe de tout. Un seul interlocuteur.",
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
    title: "Vous nous présentez votre bien",
    text: "Un court formulaire ou un appel suffit pour démarrer.",
  },
  {
    title: "Visite & évaluation",
    text: "Nous visitons le bien et vous faisons une proposition de loyer claire et transparente.",
  },
  {
    title: "Signature du bail",
    text: "Un contrat rédigé par des avocats, sur 1, 2, 3 ans ou plus. TrustHome devient votre locataire.",
  },
  {
    title: "Vous encaissez",
    text: "Le loyer tombe chaque mois. Nous assurons l'entretien et la maintenance, vous profitez.",
  },
];

export const comparison = [
  {
    label: "Revenus",
    classic: "Risque d'impayés et de vacance locative.",
    us: "Loyer garanti à date fixe, même si le bien est vide.",
  },
  {
    label: "Frais",
    classic: "Frais d'agence (5–10 %) et assurance loyers impayés (2–4 %).",
    us: "Aucun frais d'agence, aucune GLI à payer.",
  },
  {
    label: "Sécurité",
    classic: "Risque de squat, bail rigide et préavis longs.",
    us: "Un seul locataire professionnel, contrat souple avec clauses de sortie.",
  },
  {
    label: "Entretien",
    classic: "À votre charge, bien souvent rendu usé.",
    us: "Ménage pro, embellissements et maintenance préventive inclus.",
  },
  {
    label: "Charge mentale",
    classic: "Imprévus, relations locataires, administratif.",
    us: "Aucune implication au quotidien.",
  },
];

export const testimonials = [
  {
    name: "Maxime D.",
    place: "T3 · Clichy (92)",
    quote:
      "Loyer versé à date fixe, zéro tracas administratif. L'équipe est disponible, réactive et vraiment professionnelle.",
  },
  {
    name: "David P.",
    place: "Maison · Saint-Germain-en-Laye (78)",
    quote:
      "J'avais des inquiétudes à l'idée de louer pendant mon expatriation. Le loyer est versé régulièrement et la maison est bien entretenue.",
  },
  {
    name: "Nathalie M.",
    place: "T3 · Versailles (78)",
    quote:
      "Un loyer régulier chaque mois sans rien gérer. Je peux profiter de ma retraite tranquillement.",
  },
  {
    name: "Isabelle B.",
    place: "T2 · Asnières-sur-Seine (92)",
    quote: "J'étais sceptique au début. Zéro vacance locative, un entretien nickel.",
  },
  {
    name: "Thomas R.",
    place: "Maison · Deauville (14)",
    quote:
      "Le loyer est versé régulièrement, le bien est entretenu et j'ai des nouvelles de la gestion. Je regrette de ne pas les avoir connus plus tôt.",
  },
];

export const faq = [
  {
    q: "Comment fonctionne TrustHome ?",
    a: "TrustHome devient votre locataire principal. Nous vous versons un loyer fixe chaque mois et prenons en charge l'occupation et l'entretien du bien. Vous n'avez qu'un seul interlocuteur.",
  },
  {
    q: "Mon loyer est-il garanti si le bien n'est pas occupé ?",
    a: "Oui. En tant que locataire, TrustHome vous verse le loyer convenu à date fixe, que le bien soit occupé ou non.",
  },
  {
    q: "Qui s'occupe de l'entretien et des réparations ?",
    a: "TrustHome prend en charge l'entretien courant, les petites réparations, les embellissements et le ménage professionnel. Pour les gros travaux structurels (chaudière, toiture), nous vous consultons selon les termes du bail.",
  },
  {
    q: "Quels sont les frais ?",
    a: "Aucun frais caché : pas de frais d'agence ni de commission sur vos loyers, et vous économisez l'assurance loyers impayés.",
  },
  {
    q: "Qui occupe le logement ?",
    a: "TrustHome reste votre unique locataire. Nous y accueillons des professionnels et voyageurs soigneusement vérifiés, pour des durées définies avec nous.",
  },
  {
    q: "Quelle est la durée du contrat ?",
    a: "Nos baux, rédigés par des avocats, durent généralement de 1 à 3 ans, renouvelables, avec des clauses de sortie ou de revente anticipée.",
  },
  {
    q: "Et en cas de dégradations ?",
    a: "TrustHome est responsable de l'état du bien. En plus des assurances adaptées, l'entretien régulier et les remises en état font partie de notre modèle.",
  },
  {
    q: "Suis-je protégé contre le risque de squat ?",
    a: "Oui. Les occupants n'ont aucun bail direct avec vous : votre seul locataire est TrustHome, une société.",
  },
  {
    q: "Est-ce que cela aide pour un prêt bancaire ?",
    a: "Des revenus garantis et réguliers, adossés à un bail solide, sont très appréciés des banques pour financer vos futurs projets.",
  },
];
