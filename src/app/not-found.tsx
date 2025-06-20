// src/app/not-found.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 text-center">
      <AlertTriangle className="w-16 h-16 text-primary mb-4" />
      <h1 className="text-4xl font-bold text-primary mb-2">404 - Page Non Trouvée</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Button asChild size="lg">
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          Retour à l&apos;accueil
        </Link>
      </Button>
    </div>
  )
}
