import { ManageConsentButton } from "@/components/consent-banner";
import { Logo } from "@/components/logo";
import { TrackedLink } from "@/components/tracked-link";
import { nav, site } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-line pb-24 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {site.legalName}, société locataire de logements en {site.area}.
            <br />
            SIREN {site.siren}
          </p>
        </div>
        <nav aria-label="Pied de page" className="flex flex-col gap-2 text-sm text-muted">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-sm text-muted">
          <TrackedLink href={site.phoneHref} intent={{ kind: "contact", method: "phone" }} className="hover:text-ink">
            {site.phone}
          </TrackedLink>
          <TrackedLink
            href={site.whatsappHref}
            intent={{ kind: "contact", method: "whatsapp" }}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            WhatsApp
          </TrackedLink>
          <TrackedLink
            href={`mailto:${site.email}`}
            intent={{ kind: "contact", method: "email" }}
            className="break-all hover:text-ink"
          >
            {site.email}
          </TrackedLink>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted">
          <a href="/mentions-legales/" className="hover:text-ink">
            Mentions légales
          </a>
          <a href="/confidentialite/" className="hover:text-ink">
            Politique de confidentialité
          </a>
          <ManageConsentButton />
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-line px-5 py-6 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
