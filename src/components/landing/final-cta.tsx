import { MessageCircle, Phone } from 'lucide-react';
import { FunnelButton } from '@/components/analytics/funnel-button';
import { TrackedLink } from '@/components/analytics/tracked-link';
import { CONTACT, TEL_HREF, WHATSAPP_HREF } from '@/lib/site';

export function FinalCta() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-navy text-white">
      <div className="container grid gap-10 py-16 md:py-20 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <h2 id="contact-title" className="text-3xl font-bold text-white md:text-4xl">
            Votre logement correspond-il ?
          </h2>
          <p className="mt-4 max-w-xl text-lg text-white/75">
            Répondez à cinq questions. Nous vous rappelons sous 24 heures pour vous dire si nous pouvons le louer,
            et à quelles conditions.
          </p>
          <FunnelButton placement="bas-de-page" className="mt-8" />
        </div>
        <div className="space-y-3 lg:justify-self-end">
          <p className="text-sm text-white/60">Ou directement, 7 jours sur 7 :</p>
          <TrackedLink
            href={TEL_HREF}
            intent={{ kind: 'contact', method: 'phone' }}
            className="flex items-center gap-3 rounded-md border border-white/20 px-5 py-4 font-semibold hover:bg-white/10"
          >
            <Phone className="size-5" aria-hidden="true" />
            Appeler le {CONTACT.phoneDisplay}
          </TrackedLink>
          <TrackedLink
            href={WHATSAPP_HREF}
            intent={{ kind: 'contact', method: 'whatsapp' }}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-md border border-white/20 px-5 py-4 font-semibold hover:bg-white/10"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Écrire sur WhatsApp
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
