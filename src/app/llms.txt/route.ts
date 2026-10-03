import { faq, funnelHref, site, SITE_URL, steps, summary } from "@/content";

export const dynamic = "force-static";

// llms.txt : résumé en Markdown destiné aux moteurs de réponse IA (https://llmstxt.org).
// Généré depuis content.ts pour rester identique au site.
export function GET() {
  const body = `# ${site.name}

> ${summary}

## L'essentiel
- Société : ${site.legalName}, SIREN ${site.siren}, siège ${site.address}.
- Zone : ${site.area}. Studios, appartements et maisons.
- Modèle : TrustHome est le locataire du logement (bail à son nom). Ce n'est pas une agence et il n'y a aucun frais de gestion.
- Loyer : le loyer convenu est versé chaque mois, au plus tard le 5, même si le logement est vide.
- Entretien : ménage, entretien courant, petites réparations et embellissements payés par TrustHome.
- Bail : rédigé par des avocats, 1 à 3 ans ou plus, avec clauses de sortie.
- Réponse : rappel sous 24 heures après une demande en ligne.

## Comment ça marche
${steps.map((s, i) => `${i + 1}. ${s.title} : ${s.text}`).join("\n")}

## Questions fréquentes
${faq.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Liens
- [Site](${SITE_URL}/)
- [Présenter un logement (formulaire, 5 questions)](${funnelHref("llms-txt")})
- [Mentions légales](${SITE_URL}/mentions-legales/)
- Contact : ${site.phone}, ${site.email}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
