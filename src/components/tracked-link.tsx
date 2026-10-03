"use client";

import type { AnchorHTMLAttributes } from "react";
import { track } from "@/lib/tracking";

type Intent =
  | { kind: "funnel"; placement: string }
  | { kind: "contact"; method: "phone" | "whatsapp" | "email" };

// Lien sortant (tunnel, téléphone, WhatsApp, e-mail) qui remonte un événement au pixel
// quand celui-ci est actif. Le tunnel envoie lui-même l'événement Lead.
export function TrackedLink({
  intent,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { intent: Intent }) {
  return (
    <a
      {...props}
      onClick={(event) => {
        if (intent.kind === "funnel") track("OuvertureTunnel", { placement: intent.placement }, true);
        else track("Contact", { method: intent.method });
        onClick?.(event);
      }}
    />
  );
}
