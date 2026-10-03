'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  OPEN_CONSENT_EVENT,
  PIXEL_ID,
  loadPixel,
  readConsent,
  saveConsent,
  type ConsentChoice,
} from '@/lib/tracking';

export function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!PIXEL_ID) return;
    const choice = readConsent();
    if (choice === 'granted') loadPixel();
    // Lecture du localStorage au montage : impossible pendant le rendu statique.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    else if (choice === null) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  if (!open) return null;

  const decide = (choice: ConsentChoice) => {
    saveConsent(choice);
    if (choice === 'granted') loadPixel();
    else if (window.fbq) window.fbq('consent', 'revoke');
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Choix des cookies"
      className="fixed inset-x-3 bottom-20 z-[60] mx-auto max-w-xl rounded-lg border bg-white p-4 shadow-lg md:bottom-4"
    >
      <p className="text-sm text-muted-foreground">
        Nous aimerions utiliser le pixel Meta pour mesurer l&apos;efficacité de nos publicités. Il ne
        se charge que si vous l&apos;acceptez.{' '}
        <Link href="/confidentialite/" className="text-brand underline underline-offset-2">
          En savoir plus
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" onClick={() => decide('denied')}>
          Refuser
        </Button>
        <Button size="sm" className="flex-1" onClick={() => decide('granted')}>
          Accepter
        </Button>
      </div>
    </div>
  );
}

export function ManageConsentButton() {
  if (!PIXEL_ID) return null;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className="text-left hover:text-white"
    >
      Gérer les cookies
    </button>
  );
}
