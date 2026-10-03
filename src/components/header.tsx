"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/content";
import { Logo } from "@/components/logo";
import { FunnelLink } from "@/components/funnel-link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="/" aria-label="TrustHome, accueil">
          <Logo />
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 text-sm text-muted md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <FunnelLink placement="header" variant="ink" className="px-4 py-2 text-sm" />
        </div>

        <div className="-mr-2 flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="p-2"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line px-5 pb-6 pt-2 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-base"
            >
              {item.label}
            </a>
          ))}
          <FunnelLink placement="menu-mobile" variant="ink" onClick={() => setOpen(false)} className="mt-5 w-full" />
        </nav>
      )}
    </header>
  );
}
