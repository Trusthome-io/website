import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Stabilité Financière & Économies',
    classic: {
      text: "Risque d'impayés, frais d'agence (5-10%), coût d'Assurance Loyers Impayés (2-4%). Vacance locative possible.",
      icon: <XCircle className='h-5 w-5 text-destructive' />,
    },
    trusthome: {
      text: 'Loyer garanti à date fixe, même si vacant, et aucune vacance locative grâce à nos bails. Zéro frais annexes, économie sur la GLI.',
      icon: <CheckCircle2 className='h-5 w-5 text-success' />,
    },
  },
  {
    feature: 'Sécurité Juridique & Flexibilité',
    classic: {
      text: 'Risque de squatteur, bail rigide avec préavis longs.',
      icon: <XCircle className='h-5 w-5 text-destructive' />,
    },
    trusthome: {
      text: 'Aucun risque de squatteur (notre bail souple protège le propriétaire et lui permet de mettre fin au contrat quand il le veut). Contrat flexible (1-3+ ans) avec clauses de sortie.',
      icon: <CheckCircle2 className='h-5 w-5 text-success' />,
    },
  },
  {
    feature: 'Entretien & Valorisation du Bien',
    classic: {
      text: 'Souvent à la charge du propriétaire (temps et argent). Bien fréquemment rendu en mauvais état avec usure marquée.',
      icon: <XCircle className='h-5 w-5 text-destructive' />,
    },
    trusthome: {
      text: "En tant que locataire, TrustHome assure : nettoyage pro régulier, embellissements (peinture, déco), petites réparations, et une maintenance proactive pour anticiper l'usure. Votre bien est maintenu en excellent état et valorisé.",
      icon: <CheckCircle2 className='h-5 w-5 text-success' />,
    },
  },
  {
    feature: "Tranquillité d'Esprit & Zéro Charge Mentale",
    classic: {
      text: 'Soucis des imprévus, relations locataires complexes, charge administrative.',
      icon: <XCircle className='h-5 w-5 text-destructive' />,
    },
    trusthome: {
      text: 'Aucune implication quotidienne, un seul interlocuteur dédié : TrustHome, votre locataire. Sérénité maximale.',
      icon: <CheckCircle2 className='h-5 w-5 text-success' />,
    },
  },
  {
    feature: 'Levier pour Projets Futurs',
    classic: {
      text: 'Revenus locatifs parfois vus avec prudence par les banques.',
      icon: <XCircle className='h-5 w-5 text-destructive' />,
    },
    trusthome: {
      text: 'Revenus garantis par TrustHome et bail solide, reconnus et valorisés pour vos financements futurs.',
      icon: <CheckCircle2 className='h-5 w-5 text-success' />,
    },
  },
];

export function ComparisonSection() {
  return (
    <section className='bg-background py-12 md:py-20'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-12 text-center'>
          <HelpCircle className='mx-auto mb-4 h-8 w-8 text-primary' />
          <h2 className='mb-4 font-headline text-3xl font-bold text-primary md:text-4xl'>
            Pourquoi choisir TrustHome comme locataire ?
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-muted-foreground'>
            Découvrez les avantages concrets de louer votre bien à TrustHome par rapport à une
            location classique.
          </p>
        </div>
        <Card className='overflow-hidden shadow-xl'>
          <CardContent className='p-0'>
            <div className='overflow-x-auto'>
              <table className='min-w-full divide-y divide-border'>
                <thead className='bg-muted/50'>
                  <tr>
                    <th
                      scope='col'
                      className='w-1/4 px-6 py-6 text-left font-headline text-sm font-semibold tracking-wider text-primary'
                    >
                      Avantage Clé
                    </th>
                    <th
                      scope='col'
                      className='w-3/8 px-6 py-6 text-left font-headline text-sm font-semibold tracking-wider text-primary'
                    >
                      Location Classique
                    </th>
                    <th
                      scope='col'
                      className='w-3/8 px-6 py-6 text-left font-headline text-sm font-semibold tracking-wider text-primary'
                    >
                      Avec TrustHome (Votre Locataire)
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-border bg-card'>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-card' : 'bg-muted/30'}>
                      <td className='w-1/4 px-6 py-6 align-top text-sm font-semibold text-foreground'>
                        {item.feature}
                      </td>
                      <td className='w-3/8 px-6 py-6 align-top text-sm text-foreground'>
                        <div className='flex items-start space-x-3'>
                          <div className='mt-0.5 flex-shrink-0'>{item.classic.icon}</div>
                          <span className='leading-relaxed'>{item.classic.text}</span>
                        </div>
                      </td>
                      <td className='w-3/8 px-6 py-6 align-top text-sm text-foreground'>
                        <div className='flex items-start space-x-3'>
                          <div className='mt-0.5 flex-shrink-0'>{item.trusthome.icon}</div>
                          <span className='leading-relaxed'>{item.trusthome.text}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <p className='mt-8 text-center text-muted-foreground'>
          Et bien plus encore... Contactez-nous pour découvrir tous les avantages de louer votre
          bien à TrustHome !
        </p>
      </div>
    </section>
  );
}
