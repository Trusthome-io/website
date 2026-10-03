import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/brand/logo';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 text-center">
      <Logo />
      <h1 className="text-3xl font-bold">Cette page n&apos;existe pas</h1>
      <p className="max-w-md text-muted-foreground">
        Le lien est peut-être incomplet, ou la page a été déplacée. Tout l&apos;essentiel est sur la page d&apos;accueil.
      </p>
      <Button asChild size="lg">
        <Link href="/">Revenir à l&apos;accueil</Link>
      </Button>
    </main>
  );
}
