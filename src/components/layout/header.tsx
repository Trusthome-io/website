import Link from 'next/link';
import { Home, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  const navItems = [
    { href: '#hero', label: 'Accueil' },
    { href: '#storytelling', label: 'Notre Histoire' },
    { href: '#process', label: 'Comment ça marche' },
    { href: '#comparison', label: 'Avantages' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="py-4 px-4 md:px-6 bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Home className="h-8 w-8 text-primary" />
          <h1 className="text-2xl md:text-3xl font-headline font-bold text-primary">TrustHome</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="#contact">Démarrer</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-accent hover:bg-accent/90 mt-4">
                <Link href="#contact">Démarrer</Link>
              </Button>
            </nav>
          </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
