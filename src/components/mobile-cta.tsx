import { MessageCircle } from "lucide-react";
import { FunnelLink } from "@/components/funnel-link";
import { TrackedLink } from "@/components/tracked-link";
import { site } from "@/content";

// Barre d'action fixe sur mobile : la plupart des visiteurs des publicités arrivent sur téléphone.
export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-bg/90 p-3 backdrop-blur-md md:hidden">
      <FunnelLink placement="barre-mobile" className="flex-1 py-3" />
      <TrackedLink
        href={site.whatsappHref}
        intent={{ kind: "contact", method: "whatsapp" }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Écrire sur WhatsApp"
        className="flex size-12 items-center justify-center rounded-full border border-line text-credit"
      >
        <MessageCircle size={22} />
      </TrackedLink>
    </div>
  );
}
