'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Target, Zap, Shield, Rocket, Building } from 'lucide-react';

export function VisionSection() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-secondary/20 to-background py-16 md:py-24'>
      {/* Background decorative elements */}
      <div className='absolute left-0 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-warm opacity-5 blur-3xl' />
      <div className='absolute right-0 bottom-0 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-navy opacity-5 blur-2xl' />
      
      <div className='container relative mx-auto px-4 md:px-6'>
        {/* Header */}
        <div className='mb-16 text-center'>
          <div className='mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary'>
            <Rocket className='h-4 w-4' />
            Notre Vision
          </div>
          <h2 className='mb-4 font-headline text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl'>
            Révolutionner 
            <span className='bg-gradient-warm bg-clip-text text-transparent'> l&rsquo;immobilier locatif</span>
          </h2>
          <p className='mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg md:text-xl'>
            Nous développons une plateforme qui éliminera les contraintes de la gestion locative 
            en offrant aux propriétaires une solution complète, transparente et rentable.
          </p>
        </div>

        {/* Vision Cards */}
        <div className='grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <Card className='group relative overflow-hidden border-0 bg-gradient-card shadow-soft backdrop-blur-sm transition-all duration-500 hover:shadow-premium hover:-translate-y-2'>
            <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
            <CardContent className='relative p-6 sm:p-8'>
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20'>
                <Lightbulb className='h-8 w-8 text-primary' />
              </div>
              <h3 className='mb-4 font-headline text-xl font-bold text-foreground'>Innovation</h3>
              <p className='text-muted-foreground leading-relaxed'>
                Nous repensons complètement l&rsquo;expérience de la location immobilière grâce à une technologie de pointe 
                et une approche centrée sur l&rsquo;utilisateur.
              </p>
            </CardContent>
          </Card>

          <Card className='group relative overflow-hidden border-0 bg-gradient-card shadow-soft backdrop-blur-sm transition-all duration-500 hover:shadow-premium hover:-translate-y-2'>
            <div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
            <CardContent className='relative p-6 sm:p-8'>
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20'>
                <Target className='h-8 w-8 text-accent' />
              </div>
              <h3 className='mb-4 font-headline text-xl font-bold text-foreground'>Mission</h3>
              <p className='text-muted-foreground leading-relaxed'>
                Simplifier la vie des propriétaires en prenant en charge intégralement la gestion de leurs biens 
                tout en optimisant leur rentabilité.
              </p>
            </CardContent>
          </Card>

          <Card className='group relative overflow-hidden border-0 bg-gradient-card shadow-soft backdrop-blur-sm transition-all duration-500 hover:shadow-premium hover:-translate-y-2'>
            <div className='absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
            <CardContent className='relative p-6 sm:p-8'>
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 transition-colors group-hover:bg-success/20'>
                <Zap className='h-8 w-8 text-success' />
              </div>
              <h3 className='mb-4 font-headline text-xl font-bold text-foreground'>Impact</h3>
              <p className='text-muted-foreground leading-relaxed'>
                Transformer les propriétaires stressés en investisseurs sereins grâce à des revenus garantis 
                et une gestion sans faille.
              </p>
            </CardContent>
          </Card>

          <Card className='group relative overflow-hidden border-0 bg-gradient-card shadow-soft backdrop-blur-sm transition-all duration-500 hover:shadow-premium hover:-translate-y-2'>
            <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
            <CardContent className='relative p-6 sm:p-8'>
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20'>
                <Shield className='h-8 w-8 text-primary' />
              </div>
              <h3 className='mb-4 font-headline text-xl font-bold text-foreground'>Confiance</h3>
              <p className='text-muted-foreground leading-relaxed'>
                Construire une relation de confiance durable basée sur la transparence, 
                le professionnalisme et des résultats mesurables.
              </p>
            </CardContent>
          </Card>

          <Card className='group relative overflow-hidden border-0 bg-gradient-card shadow-soft backdrop-blur-sm transition-all duration-500 hover:shadow-premium hover:-translate-y-2'>
            <div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
            <CardContent className='relative p-6 sm:p-8'>
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20'>
                <Building className='h-8 w-8 text-accent' />
              </div>
              <h3 className='mb-4 font-headline text-xl font-bold text-foreground'>Excellence</h3>
              <p className='text-muted-foreground leading-relaxed'>
                Maintenir les plus hauts standards de qualité dans la gestion et l&rsquo;entretien 
                de chaque propriété qui nous est confiée.
              </p>
            </CardContent>
          </Card>

          <Card className='group relative overflow-hidden border-0 bg-gradient-card shadow-soft backdrop-blur-sm transition-all duration-500 hover:shadow-premium hover:-translate-y-2'>
            <div className='absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
            <CardContent className='relative p-6 sm:p-8'>
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 transition-colors group-hover:bg-success/20'>
                <Rocket className='h-8 w-8 text-success' />
              </div>
              <h3 className='mb-4 font-headline text-xl font-bold text-foreground'>Croissance</h3>
              <p className='text-muted-foreground leading-relaxed'>
                Accompagner nos partenaires propriétaires dans la croissance et l&rsquo;optimisation 
                de leur patrimoine immobilier.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Development Timeline */}
        <div className='mt-20'>
          <div className='mb-12 text-center'>
            <h3 className='mb-4 font-headline text-xl font-bold text-foreground sm:text-2xl md:text-3xl'>
              Feuille de route
            </h3>
            <p className='mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg'>
              Découvrez les étapes clés de notre développement vers le lancement
            </p>
          </div>

          <div className='grid gap-6 sm:gap-8 md:grid-cols-3'>
            <div className='relative flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10'>
                <div className='h-8 w-8 rounded-full bg-success flex items-center justify-center'>
                  <span className='text-xs font-bold text-white'>1</span>
                </div>
              </div>
              <h4 className='mb-2 font-semibold text-foreground'>Concept & Validation</h4>
              <p className='text-sm text-muted-foreground'>
                Étude de marché, validation du concept et constitution de l&rsquo;équipe fondatrice
              </p>
              <div className='mt-2 text-xs text-success font-medium'>✓ Terminé</div>
            </div>

            <div className='relative flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10'>
                <div className='h-8 w-8 rounded-full bg-primary flex items-center justify-center'>
                  <span className='text-xs font-bold text-white'>2</span>
                </div>
              </div>
              <h4 className='mb-2 font-semibold text-foreground'>Développement MVP</h4>
              <p className='text-sm text-muted-foreground'>
                Création de la plateforme, tests internes et optimisations
              </p>
              <div className='mt-2 text-xs text-primary font-medium'>🔄 En cours</div>
            </div>

            <div className='relative flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted-foreground/10'>
                <div className='h-8 w-8 rounded-full bg-muted-foreground/30 flex items-center justify-center'>
                  <span className='text-xs font-bold text-muted-foreground'>3</span>
                </div>
              </div>
              <h4 className='mb-2 font-semibold text-foreground'>Lancement Beta</h4>
              <p className='text-sm text-muted-foreground'>
                Tests avec propriétaires pilotes, ajustements et préparation du lancement
              </p>
              <div className='mt-2 text-xs text-muted-foreground font-medium'>Q2 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}