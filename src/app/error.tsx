// src/app/error.tsx
'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 text-center">
      <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
      <h1 className="text-3xl font-bold text-destructive mb-2">Oups ! Quelque chose s&apos;est mal passé.</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Nous avons rencontré une erreur inattendue. Veuillez réessayer.
      </p>
      {error?.message && (
        <p className="text-sm text-muted-foreground bg-muted p-2 rounded-md mb-6 max-w-md">
          Détail de l&apos;erreur: {error.message}
        </p>
      )}
      <Button onClick={() => reset()} size="lg">
        <RefreshCw className="mr-2 h-4 w-4" />
        Réessayer
      </Button>
    </div>
  )
}
