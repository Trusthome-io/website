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
    answer: "TrustHome devient votre partenaire principal et s'occupe d'exploiter votre bien pour des professionnels ou des particuliers soigneusement sélectionnés. Nous garantissons votre loyer et prenons en charge toute la gestion.",
  },
  {
    question: "Mon loyer est-il garanti même si le bien n'est pas occupé ?",
    answer: "Absolument. TrustHome vous verse le loyer convenu chaque mois, que le bien soit occupé ou non. C'est notre engagement pour votre tranquillité.",
  },
  {
    question: "Qui s'occupe de l'entretien et des réparations ?",
    answer: "TrustHome prend en charge l'entretien courant et les petites réparations. Pour les réparations majeures, nous vous consultons selon les termes du contrat.",
  },
  {
    question: "Comment TrustHome sélectionne les occupants ?",
    answer: "Nous avons un processus de sélection rigoureux incluant vérification des revenus, des antécédents et des références pour assurer la qualité et la fiabilité des occupants.",
  },
  {
    question: "Quelle est la durée typique d'un contrat avec TrustHome ?",
    answer: "Nos contrats sont flexibles et adaptés à vos besoins. Généralement, nous proposons des contrats d'une durée de 1 à 3 ans, renouvelables.",
  },
  {
    question: "Que se passe-t-il en cas de dégradations du bien ?",
    answer: "TrustHome est responsable de l'état du bien. Nous souscrivons des assurances adéquates et nous engageons à restituer votre propriété dans l'état où vous nous l'avez confiée, hors usure normale.",
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
            Trouvez ici les réponses à vos interrogations sur nos services d'exploitation professionnelle de biens.
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
