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
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className='sticky top-0 z-50 bg-background px-4 py-4 shadow-md md:px-6'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2'>
          <Home className='h-8 w-8 text-primary' />
          <h1 className='font-headline text-2xl font-bold text-primary md:text-3xl'>TrustHome</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden items-center space-x-6 md:flex'>
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className='font-medium text-foreground transition-colors hover:text-primary'
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button asChild className='bg-accent hover:bg-accent/90'>
            <Link href='#contact'>Démarrer</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className='flex items-center gap-2 md:hidden'>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Menu className='h-6 w-6' />
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
              <nav className='mt-8 flex flex-col space-y-4'>
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='border-b border-border py-2 font-medium text-foreground transition-colors hover:text-primary'
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className='mt-4 bg-accent hover:bg-accent/90'>
                  <Link href='#contact'>Démarrer</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
