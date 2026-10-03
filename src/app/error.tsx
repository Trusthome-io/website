'use client';

import { Button } from '@/components/ui/button';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-3xl font-bold">La page n&apos;a pas pu s&apos;afficher</h1>
      <p className="max-w-md text-muted-foreground">Rechargez-la. Si le problème continue, appelez-nous au 07 81 68 55 56.</p>
      <Button size="lg" onClick={() => reset()}>
        Recharger la page
      </Button>
    </main>
  );
}
