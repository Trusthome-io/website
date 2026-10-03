// Meta Pixel soumis au consentement (recommandations CNIL).
// Sans NEXT_PUBLIC_META_PIXEL_ID, rien n'est chargé et aucun bandeau n'est affiché.

export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';

export type ConsentChoice = 'granted' | 'denied';

const CONSENT_KEY = 'th_consent';
// Le choix (accord comme refus) est redemandé au bout de 6 mois.
const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182;
export const OPEN_CONSENT_EVENT = 'th:open-consent';

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

export function readConsent(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const { choice, at } = JSON.parse(raw) as { choice: ConsentChoice; at: number };
    if (Date.now() - at > CONSENT_MAX_AGE_MS) return null;
    return choice === 'granted' || choice === 'denied' ? choice : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, at: Date.now() }));
  } catch {
    // Stockage indisponible (navigation privée) : le bandeau sera simplement réaffiché.
  }
}

export function loadPixel(): void {
  if (!PIXEL_ID || window.fbq) return;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  fbq('init', PIXEL_ID);
  fbq('track', 'PageView');
}

// N'envoie rien si le pixel n'a pas été chargé (pas d'ID ou pas de consentement).
export function track(event: string, params?: Record<string, string>, custom = false): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq(custom ? 'trackCustom' : 'track', event, params);
}
