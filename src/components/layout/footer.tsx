import Link from 'next/link';
import { Logo } from '@/components/brand/logo';
import { ManageConsentButton } from '@/components/analytics/consent-banner';
import { TrackedLink } from '@/components/analytics/tracked-link';
import { COMPANY, CONTACT, TEL_HREF, WHATSAPP_HREF } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-navy pb-24 text-white/70 md:pb-0">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo tone="white" />
          <p className="mt-4 text-sm leading-relaxed">
            {COMPANY.legalName}, société locataire de logements en {COMPANY.area}.
            <br />
            SIREN {COMPANY.siren}
          </p>
        </div>

        <div>
          <h2 className="font-headline text-sm font-semibold text-white">Nous joindre</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <TrackedLink href={TEL_HREF} intent={{ kind: 'contact', method: 'phone' }} className="hover:text-white">
                {CONTACT.phoneDisplay}
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href={WHATSAPP_HREF}
                intent={{ kind: 'contact', method: 'whatsapp' }}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href={`mailto:${CONTACT.email}`}
                intent={{ kind: 'contact', method: 'email' }}
                className="break-all hover:text-white"
              >
                {CONTACT.email}
              </TrackedLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-headline text-sm font-semibold text-white">Informations</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/mentions-legales/" className="hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite/" className="hover:text-white">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <ManageConsentButton />
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container py-5 text-xs">© {new Date().getFullYear()} TrustHome. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
