"use client";

import { useEffect, useState } from "react";
import {
  OPEN_CONSENT_EVENT,
  PIXEL_ID,
  loadPixel,
  readConsent,
  saveConsent,
  type ConsentChoice,
} from "@/lib/tracking";

// Bandeau Accepter / Refuser (CNIL). N'apparaît que si un ID de pixel est configuré.
export function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!PIXEL_ID) return;
    const choice = readConsent();
    if (choice === "granted") loadPixel();
    // Lecture du localStorage au montage : impossible pendant le rendu statique.
    else if (choice === null) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  if (!open) return null;

  const decide = (choice: ConsentChoice) => {
    saveConsent(choice);
    if (choice === "granted") loadPixel();
    else if (window.fbq) window.fbq("consent", "revoke");
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Choix des cookies"
      className="fixed inset-x-3 bottom-24 z-[60] mx-auto max-w-lg rounded-2xl border border-line bg-surface p-5 shadow-xl shadow-black/10 md:bottom-5"
    >
      <p className="text-sm leading-relaxed text-muted">
        Nous aimerions utiliser le pixel Meta pour mesurer l&apos;efficacité de nos publicités. Il ne se charge que si
        vous l&apos;acceptez.{" "}
        <a href="/confidentialite/" className="text-ink underline underline-offset-4">
          En savoir plus
        </a>
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => decide("denied")}
          className="flex-1 rounded-full border border-line px-4 py-2.5 text-sm font-medium hover:border-ink"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={() => decide("granted")}
          className="flex-1 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-bg hover:opacity-85"
        >
          Accepter
        </button>
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
      className="text-left hover:text-ink"
    >
      Gérer les cookies
    </button>
  );
}
