// Les quatre engagements, repris mot pour mot du tunnel pour que le propriétaire
// retrouve les mêmes promesses d'une page à l'autre.
const commitments = [
  { figure: 'le 5', text: 'Votre loyer convenu, versé chaque mois au plus tard le 5.' },
  { figure: '0 €', text: 'Pour le ménage et l’entretien courant : c’est nous qui payons.' },
  { figure: '0 €', text: 'De frais de gestion : nous ne gérons pas votre bien, nous le louons.' },
  { figure: '24 h', text: 'Pour vous rappeler si votre logement correspond.' },
];

export function Commitments() {
  return (
    <section id="engagements" aria-labelledby="engagements-title" className="border-y bg-paper">
      <div className="container py-12 md:py-14">
        <h2 id="engagements-title" className="text-2xl font-bold md:text-3xl">
          Nos engagements, écrits dans le bail
        </h2>
        <dl className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
          {commitments.map((item, i) => (
            <div key={i} className="lg:pl-8 lg:first:pl-0">
              <dt className="font-headline text-4xl font-bold tracking-tight text-navy md:text-5xl">{item.figure}</dt>
              <dd className="mt-2 max-w-[16rem] text-muted-foreground">{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
