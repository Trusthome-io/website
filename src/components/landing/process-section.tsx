
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, FileSearch, Handshake, KeyRound, Award, Calculator } from "lucide-react";

const processSteps = [
  {
    icon: ClipboardList,
    title: "Soumission de votre bien",
    description: "Remplissez notre formulaire en ligne avec les détails de votre propriété. C'est simple et rapide.",
  },
  {
    icon: FileSearch,
    title: "Visite & Inspection",
    description: "Nous organisons une visite de votre bien pour mieux comprendre ses spécificités et son potentiel.",
  },
  {
    icon: Calculator,
    title: "Évaluation & Proposition",
    description: "Notre équipe évalue votre bien et vous fait une proposition de location compétitive et transparente.",
  },
  {
    icon: Handshake,
    title: "Signature du Contrat de Location",
    description: "Un contrat de location clair et protecteur, rédigé par des avocats. Signez en toute transparence et flexibilité (1, 2, 3 ans ou plus). TrustHome devient votre locataire.",
  },
  {
    icon: KeyRound,
    title: "Prise en Charge Intégrale par TrustHome",
    description: "En tant que locataire, nous assurons l'entretien méticuleux (nettoyages fréquents, embellissements) et la maintenance préventive.",
  },
  {
    icon: Award,
    title: "Profitez de Vos Revenus",
    description: "Recevez votre loyer garanti et profitez de votre temps libre, TrustHome, votre locataire, s'occupe de tout.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Notre Processus Simplifié
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment TrustHome, en devenant votre locataire, transforme l&apos;exploitation de votre bien en une expérience sereine et profitable.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {processSteps.map((step, index) => (
            <div key={index} className="flex">
              <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4 p-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl mb-1">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow">
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
