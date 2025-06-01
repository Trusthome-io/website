
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";

const comparisonData = [
  {
    feature: "Stabilité Financière & Économies",
    classic: { text: "Risque d'impayés, frais d'agence (5-10%), coût d'Assurance Loyers Impayés (2-4%).", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Loyer garanti à date fixe, même si vacant. Zéro frais, économie sur la GLI.", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Sécurité Juridique & Flexibilité",
    classic: { text: "Risque de squatteur, bail rigide avec préavis longs.", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Aucun risque de squatteur (notre bail souple protège le propriétaire). Contrat flexible (1-3+ ans) avec clauses de sortie.", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Entretien & Valorisation du Bien",
    classic: { text: "Souvent à charge du propriétaire (temps et argent). Bien fréquemment rendu en mauvais état avec usure marquée.", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Nettoyage pro régulier, embellissements (peinture, déco), petites réparations inclus. Votre bien est maintenu en excellent état et valorisé.", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Tranquillité d'Esprit & Zéro Gestion",
    classic: { text: "Gestion chronophage, stress des imprévus, relations locataires complexes.", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Aucun temps de gestion, un seul interlocuteur dédié. Sérénité maximale, zéro charge mentale.", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Levier pour Projets Futurs",
    classic: { text: "Revenus locatifs parfois vus avec prudence par les banques.", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Revenus garantis et bail solide, reconnus et valorisés pour vos financements futurs.", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
];

export function ComparisonSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Pourquoi choisir TrustHome ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les avantages concrets de notre service d'exploitation par rapport à une location classique.
          </p>
        </div>
        <Card className="shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted/50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-primary tracking-wider font-headline">
                      Avantage Clé
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-primary tracking-wider font-headline">
                      Location Classique
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-primary tracking-wider font-headline">
                      Avec TrustHome
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-card divide-y divide-border">
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground align-top">
                        {item.feature}
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-foreground align-top">
                        <div className="flex items-start sm:items-center space-x-2">
                          {item.classic.icon}
                          <span>{item.classic.text}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-foreground align-top">
                        <div className="flex items-start sm:items-center space-x-2">
                          {item.trusthome.icon}
                          <span>{item.trusthome.text}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <p className="text-center mt-8 text-muted-foreground">
          Et bien plus encore... Contactez-nous pour découvrir tous les avantages de TrustHome !
        </p>
      </div>
    </section>
  );
}
