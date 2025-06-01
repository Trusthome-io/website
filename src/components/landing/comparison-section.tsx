import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";

const comparisonData = [
  {
    feature: "Loyer garanti chaque mois",
    classic: { text: "Non (risque d'impayés et de vacance)", icon: <XCircle className="h-6 w-6 text-red-600" /> },
    trusthome: { text: "Oui, même si le bien est vacant", icon: <CheckCircle2 className="h-6 w-6 text-green-600" /> },
  },
  {
    feature: "Gestion des impayés",
    classic: { text: "À la charge du propriétaire", icon: <XCircle className="h-6 w-6 text-red-600" /> },
    trusthome: { text: "Pris en charge par TrustHome", icon: <CheckCircle2 className="h-6 w-6 text-green-600" /> },
  },
  {
    feature: "Recherche et sélection des occupants",
    classic: { text: "Long et fastidieux pour le propriétaire", icon: <XCircle className="h-6 w-6 text-red-600" /> },
    trusthome: { text: "Géré par des professionnels TrustHome", icon: <CheckCircle2 className="h-6 w-6 text-green-600" /> },
  },
  {
    feature: "Gestion des dégradations",
    classic: { text: "Souvent complexe et coûteux pour le propriétaire", icon: <XCircle className="h-6 w-6 text-red-600" /> },
    trusthome: { text: "Couvert par TrustHome (via assurances et caution)", icon: <CheckCircle2 className="h-6 w-6 text-green-600" /> },
  },
  {
    feature: "Entretien courant et petites réparations",
    classic: { text: "À la charge du propriétaire", icon: <XCircle className="h-6 w-6 text-red-600" /> },
    trusthome: { text: "Pris en charge par TrustHome", icon: <CheckCircle2 className="h-6 w-6 text-green-600" /> },
  },
  {
    feature: "Risque de vacance locative",
    classic: { text: "Supporté par le propriétaire (perte de revenus)", icon: <XCircle className="h-6 w-6 text-red-600" /> },
    trusthome: { text: "Aucun risque, loyer versé par TrustHome", icon: <CheckCircle2 className="h-6 w-6 text-green-600" /> },
  },
  {
    feature: "Temps consacré à la gestion",
    classic: { text: "Très important pour le propriétaire", icon: <XCircle className="h-6 w-6 text-red-600" /> },
    trusthome: { text: "Minimal, TrustHome s'occupe de tout", icon: <CheckCircle2 className="h-6 w-6 text-green-600" /> },
  },
  {
    feature: "Tranquillité d'esprit",
    classic: { text: "Limitée (stress, imprévus)", icon: <XCircle className="h-6 w-6 text-red-600" /> },
    trusthome: { text: "Maximale et garantie", icon: <CheckCircle2 className="h-6 w-6 text-green-600" /> },
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
                      Caractéristique
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-primary tracking-wider font-headline">
                      Location Classique (Particulier)
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-primary tracking-wider font-headline">
                      Avec TrustHome
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-card divide-y divide-border">
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                        {item.feature}
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-foreground">
                        <div className="flex items-start sm:items-center space-x-2">
                          {item.classic.icon}
                          <span>{item.classic.text}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-foreground">
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
