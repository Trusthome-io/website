import { MessageCircle, Phone } from 'lucide-react';
import { FunnelButton } from '@/components/analytics/funnel-button';
import { TrackedLink } from '@/components/analytics/tracked-link';
import { CONTACT, TEL_HREF, WHATSAPP_HREF } from '@/lib/site';

// Relevé illustratif : le virement de TrustHome arrive chaque mois, au plus tard le 5.
const statement = [
  { date: '05/06', month: 'juin' },
  { date: '04/05', month: 'mai' },
  { date: '03/04', month: 'avril' },
  { date: '05/03', month: 'mars' },
  { date: '04/02', month: 'février' },
  { date: '05/01', month: 'janvier' },
];

function Statement() {
  return (
    <figure className="relative mx-auto w-full max-w-md">
      <div className="rounded-lg border bg-white shadow-[0_24px_60px_-28px_rgba(11,27,63,0.45)]">
        <div className="flex items-baseline justify-between border-b px-5 py-4">
          <p className="font-headline text-sm font-semibold text-navy">Votre compte courant</p>
          <p className="text-xs text-muted-foreground">Opérations</p>
        </div>
        <ul className="divide-y font-statement text-xs sm:text-[13px]">
          {statement.map((line, i) => (
            <li
              key={line.date}
              className="grid animate-statement-line grid-cols-[2.75rem_1fr_auto] items-center gap-2 px-4 py-3 sm:grid-cols-[3.25rem_1fr_auto] sm:gap-3 sm:px-5"
              style={{ animationDelay: `${300 + i * 140}ms` }}
            >
              <span className="whitespace-nowrap text-muted-foreground">{line.date}</span>
              <span className="min-w-0 text-navy">
                VIR TRUSTHOME SAS
                <span className="block text-[11px] text-muted-foreground">Loyer {line.month}</span>
              </span>
              <span className="whitespace-nowrap font-semibold text-credit">+ 1 250,00 €</span>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        Illustration. Le montant est celui convenu dans votre bail.
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="container grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <p className="text-sm font-semibold text-brand">Propriétaires en Île-de-France, hors Paris</p>
          <h1 className="mt-4 text-[2.4rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Une entreprise loue votre logement et vous verse le loyer chaque mois.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            TrustHome signe le bail, paie le ménage et l&apos;entretien courant, et ne prend aucun frais de
            gestion. Pas un inconnu vu vingt minutes en visite : une société, qui s&apos;engage par contrat.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <FunnelButton placement="hero" />
            <TrackedLink
              href={WHATSAPP_HREF}
              intent={{ kind: 'contact', method: 'whatsapp' }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md border bg-white px-5 font-semibold text-navy hover:bg-secondary"
            >
              <MessageCircle className="size-5 text-credit" aria-hidden="true" />
              Écrire sur WhatsApp
            </TrackedLink>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            5 questions, environ 2 minutes. Sans engagement : vous lisez le bail avant de signer quoi que ce soit.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Vous préférez parler ?{' '}
            <TrackedLink
              href={TEL_HREF}
              intent={{ kind: 'contact', method: 'phone' }}
              className="inline-flex items-center gap-1 font-semibold text-navy underline-offset-4 hover:underline"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </TrackedLink>
          </p>
        </div>

        <Statement />
      </div>
    </section>
  );
}
