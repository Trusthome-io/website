import { MessageCircle } from 'lucide-react';
import { FunnelButton } from '@/components/analytics/funnel-button';
import { TrackedLink } from '@/components/analytics/tracked-link';
import { WHATSAPP_HREF } from '@/lib/site';

// Barre d'action fixe sur mobile : la plupart des visiteurs des publicités arrivent sur téléphone.
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t bg-white/95 p-3 backdrop-blur md:hidden">
      <FunnelButton placement="barre-mobile" size="lg" className="h-12 flex-1" />
      <TrackedLink
        href={WHATSAPP_HREF}
        intent={{ kind: 'contact', method: 'whatsapp' }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Écrire sur WhatsApp"
        className="flex size-12 items-center justify-center rounded-md border text-credit"
      >
        <MessageCircle className="size-6" />
      </TrackedLink>
    </div>
  );
}
