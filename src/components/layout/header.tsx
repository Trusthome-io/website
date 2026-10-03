import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/brand/logo';
import { FunnelButton } from '@/components/analytics/funnel-button';
import { TrackedLink } from '@/components/analytics/tracked-link';
import { CONTACT, TEL_HREF } from '@/lib/site';

const navItems = [
  { href: '/#engagements', label: 'Nos engagements' },
  { href: '/#fonctionnement', label: 'Comment ça marche' },
  { href: '/#avis', label: 'Avis' },
  { href: '/#questions', label: 'Questions' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="TrustHome, accueil">
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <TrackedLink
            href={TEL_HREF}
            intent={{ kind: 'contact', method: 'phone' }}
            className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-navy hover:bg-secondary md:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </TrackedLink>
          <FunnelButton placement="header" size="default" className="hidden sm:inline-flex" />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Ouvrir le menu">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]" aria-describedby={undefined}>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav aria-label="Navigation mobile" className="mt-8 flex flex-col">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link href={item.href} className="border-b py-3 font-medium text-navy">
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <TrackedLink
                  href={TEL_HREF}
                  intent={{ kind: 'contact', method: 'phone' }}
                  className="flex items-center gap-2 border-b py-3 font-medium text-navy"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {CONTACT.phoneDisplay}
                </TrackedLink>
                <FunnelButton placement="menu-mobile" size="lg" className="mt-6" />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
