import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqItems = [
  {
    question: "Concrètement, que fait TrustHome ?",
    answer: "TrustHome devient votre locataire principal et valorise votre bien en hébergement haut de gamme. Nous garantissons votre loyer et prenons en charge toutes les responsabilités liées à l'occupation et à l'entretien, vous n'avez qu'un seul interlocuteur : TrustHome.",
  },
  {
    question: "Mon loyer est-il garanti même si le bien n'est pas occupé par des voyageurs/professionnels ?",
    answer: "Absolument. TrustHome, en tant que votre locataire, vous verse le loyer convenu à date fixe chaque mois. C'est notre engagement pour votre tranquillité et la fin des assurances loyers impayés.",
  },
  {
    question: "Qui s'occupe de l'entretien et des réparations ?",
    answer: "TrustHome, en tant que votre locataire, prend en charge l'entretien courant, les petites réparations, les embellissements (peinture, déco) et plusieurs nettoyages professionnels par semaine. Pour les réparations structurelles majeures (ex: chaudière, toiture), nous vous consultons selon les termes du contrat de location.",
  },
  {
    question: "Quels sont les frais avec TrustHome ?",
    answer: "Zéro frais cachés. Contrairement à une location classique impliquant une agence, il n'y a pas de frais d'agence ou de frais de service prélevés sur vos loyers, et vous économisez le coût d'une assurance loyers impayés.",
  },
  {
    question: "Comment TrustHome sélectionne les occupants ?",
    answer: "TrustHome est votre unique locataire. Nous accueillons ensuite nos partenaires professionnels et voyageurs soigneusement vérifiés.",
  },
  {
    question: "Quelle est la durée typique d'un contrat de location avec TrustHome ?",
    answer: "Nos contrats de location, rédigés par des avocats, sont flexibles (généralement 1 à 3 ans, renouvelables) et peuvent inclure des clauses de sortie ou de revente anticipée pour s'adapter à vos projets.",
  },
  {
    question: "Que se passe-t-il en cas de dégradations du bien ?",
    answer: "TrustHome, en tant que votre locataire, est responsable de l'état du bien. En plus des assurances adéquates, notre modèle inclut un entretien constant et des remises en état régulières pour valoriser votre propriété.",
  },
  {
    question: "Comment TrustHome me protège-t-il du risque de squatteurs ?",
    answer: "Avec TrustHome comme locataire, ce risque est inexistant. Nous sommes votre unique locataire. Les professionnels et voyageurs que nous hébergeons n'ont aucun droit au bail direct avec vous et sont présents pour des durées contractuelles définies avec nous.",
  },
  {
    question: "TrustHome peut-il m'aider à obtenir un prêt bancaire ?",
    answer: "Oui. Les revenus locatifs garantis et réguliers versés par TrustHome, ainsi que la solidité de notre bail de location, sont des éléments très appréciés des banques et peuvent faciliter l'obtention de financements pour vos futurs projets immobiliers.",
  },
];

export function Faq() {
  return (
    <section id="questions" aria-labelledby="questions-title" className="bg-white">
      <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 id="questions-title" className="text-3xl font-bold md:text-4xl">
            Les questions qu&apos;on nous pose
          </h2>
          <p className="mt-4 text-muted-foreground">
            Une autre question ? Posez-la-nous directement par téléphone ou WhatsApp.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={item.question}>
              <AccordionTrigger className="py-5 text-left font-headline text-lg text-navy hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
