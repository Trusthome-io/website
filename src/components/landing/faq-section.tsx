
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "Qu'est-ce que l'exploitation professionnelle de biens avec TrustHome ?",
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

export function FaqSection() {
  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Questions Fréquemment Posées
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez ici les réponses à vos interrogations sur le partenariat avec TrustHome.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b-primary/20">
              <AccordionTrigger className="text-left font-headline text-lg hover:text-accent py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
