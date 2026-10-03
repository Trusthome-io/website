'use client';

import type { AnchorHTMLAttributes } from 'react';
import { track } from '@/lib/tracking';

type Intent =
  | { kind: 'funnel'; placement: string }
  | { kind: 'contact'; method: 'phone' | 'whatsapp' | 'email' };

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { intent: Intent };

// Lien sortant (tunnel, téléphone, WhatsApp) qui remonte un événement au pixel
// quand celui-ci est actif. Le tunnel envoie lui-même l'événement Lead.
export function TrackedLink({ intent, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(event) => {
        if (intent.kind === 'funnel') {
          track('OuvertureTunnel', { placement: intent.placement }, true);
        } else {
          track('Contact', { method: intent.method });
        }
        onClick?.(event);
      }}
    />
  );
}
