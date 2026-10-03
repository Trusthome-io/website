import { Check, X } from 'lucide-react';

const rows = [
  {
    topic: 'Le loyer',
    classic: 'Risque d’impayés, vacance entre deux locataires, frais d’agence (5 à 10 %) et assurance loyers impayés (2 à 4 %).',
    trusthome: 'Loyer versé à date fixe, même quand le logement est vide. Aucuns frais, pas besoin d’assurance loyers impayés.',
  },
  {
    topic: 'Le bail',
    classic: 'Bail rigide, préavis longs, risque de squat en cas de conflit.',
    trusthome: 'Bail flexible de 1 à 3 ans ou plus, avec clauses de sortie. Un seul locataire : notre société.',
  },
  {
    topic: 'L’état du logement',
    classic: 'Entretien à votre charge, logement souvent rendu usé.',
    trusthome: 'Ménage professionnel régulier, petites réparations, peinture et maintenance à notre charge.',
  },
  {
    topic: 'Votre temps',
    classic: 'Imprévus, relations avec le locataire, paperasse.',
    trusthome: 'Aucune implication au quotidien. Un seul interlocuteur : TrustHome.',
  },
  {
    topic: 'Vos projets',
    classic: 'Des revenus locatifs que les banques regardent avec prudence.',
    trusthome: 'Des revenus réguliers et un bail solide, appréciés des banques pour vos futurs financements.',
  },
];

export function Comparison() {
  return (
    <section aria-labelledby="comparaison-title" className="bg-white">
      <div className="container py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 id="comparaison-title" className="text-3xl font-bold md:text-4xl">
            Ce qui change par rapport à une location classique
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border">
          <div className="hidden grid-cols-[12rem_1fr_1fr] bg-paper text-sm font-semibold md:grid">
            <span className="px-6 py-4" />
            <span className="px-6 py-4 text-muted-foreground">Location classique</span>
            <span className="bg-brand-light px-6 py-4 text-navy">Avec TrustHome</span>
          </div>
          {rows.map((row) => (
            <div key={row.topic} className="grid border-t first:border-t-0 md:grid-cols-[12rem_1fr_1fr] md:first:border-t">
              <h3 className="px-6 pb-2 pt-5 text-base font-semibold md:py-5">{row.topic}</h3>
              <p className="flex gap-3 px-6 py-2 text-muted-foreground md:py-5">
                <X className="mt-1 size-4 shrink-0 text-muted-foreground/70" aria-label="Location classique" />
                {row.classic}
              </p>
              <p className="flex gap-3 bg-brand-light/60 px-6 pb-5 pt-2 text-navy md:bg-brand-light md:py-5">
                <Check className="mt-1 size-4 shrink-0 text-credit" aria-label="Avec TrustHome" />
                {row.trusthome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
