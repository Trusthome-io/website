// src/app/not-found.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center'>
      <AlertTriangle className='mb-4 h-16 w-16 text-primary' />
      <h1 className='mb-2 text-4xl font-bold text-primary'>404 - Page Non Trouvée</h1>
      <p className='mb-8 text-lg text-muted-foreground'>
        Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Button asChild size='lg'>
        <Link href='/'>
          <Home className='mr-2 h-4 w-4' />
          Retour à l&apos;accueil
        </Link>
      </Button>
    </div>
  );
}
