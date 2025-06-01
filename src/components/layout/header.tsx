import Link from 'next/link';
import { Home } from 'lucide-react';

export function Header() {
  return (
    <header className="py-6 px-4 md:px-6 bg-background shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Home className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-headline font-bold text-primary">TrustHome</h1>
        </Link>
        {/* Future navigation links can be added here */}
        {/* <nav className="space-x-4">
          <Link href="/confidence-tool" className="text-foreground hover:text-primary transition-colors">Outil IA</Link>
        </nav> */}
      </div>
    </header>
  );
}
