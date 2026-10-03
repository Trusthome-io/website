import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/components/tracked-link";
import { cta, funnelHref } from "@/content";

// Bouton principal : ouvre le tunnel de demande avec les UTM de son emplacement.
export function FunnelLink({
  placement,
  label = cta,
  variant = "accent",
  className = "",
  onClick,
}: {
  placement: string;
  label?: string;
  variant?: "accent" | "ink";
  className?: string;
  onClick?: () => void;
}) {
  const colors = variant === "ink" ? "bg-ink text-bg" : "bg-accent text-accent-ink";
  return (
    <TrackedLink
      href={funnelHref(placement)}
      intent={{ kind: "funnel", placement }}
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-medium transition-opacity hover:opacity-90 ${colors} ${className}`}
    >
      {label}
      <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
    </TrackedLink>
  );
}
