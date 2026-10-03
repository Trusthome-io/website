import { FunnelButton } from '@/components/analytics/funnel-button';

const steps = [
  {
    title: 'Vous présentez votre logement',
    text: 'Cinq questions en ligne : où il se trouve, son type, s’il est meublé, quand il est libre et le loyer que vous visez.',
  },
  {
    title: 'Nous vous rappelons sous 24 h',
    text: 'Par téléphone ou par WhatsApp, pour vous dire si votre logement correspond et répondre à vos questions.',
  },
  {
    title: 'Visite et proposition',
    text: 'Nous visitons le logement, puis nous vous proposons un loyer et une durée de bail : 1, 2, 3 ans ou plus.',
  },
  {
    title: 'Vous signez, nous payons',
    text: 'Un bail rédigé par des avocats, que vous lisez avant de signer. Ensuite, le loyer arrive chaque mois, au plus tard le 5.',
  },
];

export function Process() {
  return (
    <section id="fonctionnement" aria-labelledby="fonctionnement-title" className="bg-paper">
      <div className="container py-16 md:py-24">
        <h2 id="fonctionnement-title" className="max-w-2xl text-3xl font-bold md:text-4xl">
          De votre demande au premier loyer
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span
                aria-hidden="true"
                className="flex size-10 items-center justify-center rounded-full bg-navy font-headline font-bold text-white"
              >
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <FunnelButton placement="fonctionnement" label="Commencer : 5 questions" />
        </div>
      </div>
    </section>
  );
}
