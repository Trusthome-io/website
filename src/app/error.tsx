// src/app/error.tsx
'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center'>
      <AlertTriangle className='mb-4 h-16 w-16 text-destructive' />
      <h1 className='mb-2 text-3xl font-bold text-destructive'>
        Oups ! Quelque chose s&apos;est mal passé.
      </h1>
      <p className='mb-6 text-lg text-muted-foreground'>
        Nous avons rencontré une erreur inattendue. Veuillez réessayer.
      </p>
      {error?.message && (
        <p className='mb-6 max-w-md rounded-md bg-muted p-2 text-sm text-muted-foreground'>
          Détail de l&apos;erreur: {error.message}
        </p>
      )}
      <Button onClick={() => reset()} size='lg'>
        <RefreshCw className='mr-2 h-4 w-4' />
        Réessayer
      </Button>
    </div>
  );
}
