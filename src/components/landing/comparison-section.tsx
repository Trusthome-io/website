
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";

const comparisonData = [
  {
    feature: "Loyer garanti chaque mois",
    classic: { text: "Non (risque d'impayés et de vacance)", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Oui, à date fixe, même si le bien est vacant", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Frais de gestion et d'agence",
    classic: { text: "Oui (souvent 5-10% du loyer)", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Aucun, zéro prélèvement sur vos loyers", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Assurance Loyers Impayés (GLI)",
    classic: { text: "Fortement recommandée (coût 2-4% du loyer)", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Non nécessaire, économie directe pour vous", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Gestion des impayés et procédures",
    classic: { text: "À la charge et stress du propriétaire", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Pris en charge intégralement par TrustHome", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Risque de squatteur / Droit au bail",
    classic: { text: "Risque existant, procédure longue et coûteuse", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Aucun risque, TrustHome est locataire, pas de droit au bail pour les occupants", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Entretien courant et embellissements",
    classic: { text: "À la charge du propriétaire (temps et argent)", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Nettoyage pro régulier, embellissements (peinture, déco), petites réparations inclus", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Gestion des dégradations",
    classic: { text: "Souvent complexe et coûteux pour le propriétaire", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Couvert par TrustHome, incluant entretien esthétique continu", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Flexibilité du contrat / Reprise du bien",
    classic: { text: "Rigide, préavis longs et conditions strictes", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Flexible (1-3+ ans), clauses de sortie/revente anticipée prévues", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Temps consacré à la gestion",
    classic: { text: "Très important, gestion chronophage", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Aucun, un seul interlocuteur dédié chez TrustHome", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Tranquillité d'esprit / Charge mentale",
    classic: { text: "Limitée (stress, imprévus, relations locataires)", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Maximale : aucun imprévu, zéro charge mentale", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
  },
  {
    feature: "Impact sur projets futurs (financement)",
    classic: { text: "Revenus locatifs parfois vus avec prudence par les banques", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    trusthome: { text: "Revenus garantis et bail solide, reconnus et valorisés pour financement", icon: <CheckCircle2 className="h-6 w-6 text-primary" /> },
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
