"use client";

import { Moon, Sun } from "lucide-react";
import { applyTheme } from "@/lib/theme";

// Les deux icônes sont rendues et le CSS affiche la bonne : pas de décalage à l'hydratation.
export function ThemeToggle({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark")}
      className={`flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-ink ${className}`}
    >
      <Moon size={18} aria-hidden="true" className="dark:hidden" />
      <Sun size={18} aria-hidden="true" className="hidden dark:block" />
      <span className="sr-only dark:hidden">Passer en mode sombre</span>
      <span className="sr-only hidden dark:inline">Passer en mode clair</span>
    </button>
  );
}
