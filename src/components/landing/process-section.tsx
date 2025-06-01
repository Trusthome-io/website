import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, FileSearch, Handshake, KeyRound, Award } from "lucide-react";

const processSteps = [
  {
    icon: ClipboardList,
    title: "Soumission de votre bien",
    description: "Remplissez notre formulaire en ligne avec les détails de votre propriété. C'est simple et rapide.",
  },
  {
    icon: FileSearch,
    title: "Évaluation & Proposition",
    description: "Notre équipe évalue votre bien et vous fait une proposition de location compétitive et transparente.",
  },
  {
    icon: Handshake,
    title: "Signature du Contrat",
    description: "Un contrat clair et protecteur pour les deux parties. Signez en toute confiance.",
  },
  {
    icon: KeyRound,
    title: "Prise en Charge Complète",
    description: "Nous nous occupons de tout : trouver des occupants qualifiés, gérer l'entretien, etc.",
  },
  {
    icon: Award,
    title: "Profitez de Vos Revenus",
    description: "Recevez votre loyer garanti et profitez de votre temps libre, TrustHome s'occupe du reste.",
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
            Découvrez comment TrustHome transforme la location de votre bien en une expérience sereine et profitable en quelques étapes claires.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
