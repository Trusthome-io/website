import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarCheck, ShieldCheck, ArrowRight, Award, TrendingUp, Star, Users, Trophy } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className='relative overflow-hidden bg-gradient-hero py-16 md:py-24 lg:py-32'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px]' />
      <div className='absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl' />
      <div className='absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tl from-accent/10 to-transparent blur-2xl' />
      
      <div className='container relative mx-auto px-4 md:px-6 xl:px-8 2xl:px-12'>
        {/* Pre-launch indicators */}
        <div className='mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start md:gap-6'>
          <div className='flex items-center gap-2'>
            <Star className='h-4 w-4 text-primary' />
            <span className='font-medium'>Concept innovant</span>
          </div>
          <div className='flex items-center gap-2'>
            <Users className='h-4 w-4 text-primary' />
            <span className='font-medium'>En développement</span>
          </div>
          <div className='flex items-center gap-2'>
            <Trophy className='h-4 w-4 text-primary' />
            <span className='font-medium'>Lancement 2025</span>
          </div>
        </div>

        <div className='grid items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-24'>
          <div className='animate-fade-in lg:order-1'>
            <h1 className='mb-8 font-headline text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>
              <span className='mb-2 block bg-gradient-warm bg-clip-text text-transparent'>
L&rsquo;avenir de la
              </span>
              <span className='text-accent'>location immobilière</span>
            </h1>
            
            <p className='mb-10 text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl xl:text-3xl xl:leading-relaxed'>
              Nous développons une solution révolutionnaire qui transformera la façon dont les propriétaires gèrent leurs biens. 
              <strong className='text-foreground'> Loyers garantis, gestion complète, rentabilité optimisée</strong> - 
              tout cela arrive bientôt.
            </p>

            {/* Pre-launch CTAs */}
            <div className='flex flex-col gap-4 sm:flex-row'>
              <Button
                asChild
                size='lg'
                className='group relative overflow-hidden bg-gradient-cta text-white shadow-button-modern transition-all duration-300 hover:shadow-button-hover hover:-translate-y-1 hover:scale-[1.02] rounded-xl px-8 py-4 text-lg font-semibold'
              >
                <Link href='#contact' className='relative z-10'>
                  <span className='shimmer absolute inset-0'></span>
                  Être notifié du lancement
                  <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
                </Link>
              </Button>
              
              <Button
                asChild
                size='lg'
                variant='outline'
                className='border-2 border-primary/30 bg-background/90 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-soft rounded-xl px-8 py-4 text-lg font-semibold hover:scale-[1.02]'
              >
                <Link href='#process'>
                  Découvrir le concept
                </Link>
              </Button>
            </div>

            {/* Development badges */}
            <div className='mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground md:gap-6'>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-2 rounded-full bg-primary'></div>
                <span>En développement</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-2 rounded-full bg-primary'></div>
                <span>Concept validé</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-2 rounded-full bg-primary'></div>
                <span>Équipe experte</span>
              </div>
            </div>
          </div>
          <div className='group relative animate-float lg:order-2'>
            {/* Premium glow effect */}
            <div className='absolute -inset-6 rounded-3xl bg-gradient-blue opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-30'></div>
            
            {/* Image container with enhanced styling */}
            <div className='relative overflow-hidden rounded-3xl bg-gradient-card p-2 shadow-premium transition-all duration-500 group-hover:shadow-card-hover group-hover:-translate-y-3 group-hover:rotate-1'>
              <Image
                src='/img/salon.jpg'
                alt='Salon moderne et lumineux, symbolisant la sérénité et la valorisation par TrustHome'
                width={700}
                height={500}
                className='relative w-full rounded-2xl object-cover'
                priority
              />
              
              {/* Development status overlay */}
              <div className='absolute bottom-2 left-2 right-2 rounded-xl bg-background/90 p-3 backdrop-blur-sm sm:bottom-4 sm:left-4 sm:right-4 sm:p-4'>
                <div className='grid grid-cols-3 gap-1 text-center sm:gap-2 md:gap-4'>
                  <div>
                    <div className='text-xs font-bold text-primary sm:text-sm md:text-lg'>2025</div>
                    <div className='text-xs text-muted-foreground sm:text-xs'>Lancement</div>
                  </div>
                  <div>
                    <div className='text-xs font-bold text-primary sm:text-sm md:text-lg'>MVP</div>
                    <div className='text-xs text-muted-foreground sm:text-xs'>En cours</div>
                  </div>
                  <div>
                    <div className='text-xs font-bold text-primary sm:text-sm md:text-lg'>0€</div>
                    <div className='text-xs text-muted-foreground sm:text-xs'>Préinscription</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-20 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:mt-28 lg:grid-cols-4 xl:gap-12'>
          <Card className='group relative overflow-hidden border-0 bg-gradient-card shadow-soft backdrop-blur-sm transition-all duration-500 hover:shadow-premium hover:-translate-y-3 hover:rotate-1 rounded-2xl'>
            <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
            <CardHeader className='relative flex flex-row items-center gap-4 pb-2'>
              <div className='rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20'>
                <CalendarCheck className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='font-headline text-lg font-bold'>Loyer Garanti</CardTitle>
            </CardHeader>
            <CardContent className='relative'>
              <p className='text-muted-foreground leading-relaxed'>
                Recevez votre loyer chaque mois, à date fixe. Fini les assurances loyers impayés
                coûteuses et les vacances locatives.
              </p>
            </CardContent>
          </Card>

          <Card className='group relative overflow-hidden border-0 bg-gradient-card shadow-soft backdrop-blur-sm transition-all duration-500 hover:shadow-premium hover:-translate-y-3 hover:rotate-1 rounded-2xl'>
            <div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
            <CardHeader className='relative flex flex-row items-center gap-4 pb-2'>
              <div className='rounded-full bg-accent/10 p-3 transition-colors group-hover:bg-accent/20'>
                <ShieldCheck className='h-6 w-6 text-accent' />
              </div>
              <CardTitle className='font-headline text-lg font-bold'>Zéro Tracas</CardTitle>
            </CardHeader>
            <CardContent className='relative'>
              <p className='text-muted-foreground leading-relaxed'>
                TrustHome, votre locataire, prend tout en charge : exploitation, entretien,
                embellissements, réparations. Un seul interlocuteur dédié.
              </p>
            </CardContent>
          </Card>

          <Card className='group relative overflow-hidden border-0 bg-gradient-card shadow-soft backdrop-blur-sm transition-all duration-500 hover:shadow-premium hover:-translate-y-3 hover:rotate-1 rounded-2xl'>
            <div className='absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
            <CardHeader className='relative flex flex-row items-center gap-4 pb-2'>
              <div className='rounded-full bg-success/10 p-3 transition-colors group-hover:bg-success/20'>
                <Award className='h-6 w-6 text-success' />
              </div>
              <CardTitle className='font-headline text-lg font-bold'>Valorisation & Contrôle</CardTitle>
            </CardHeader>
            <CardContent className='relative'>
              <p className='text-muted-foreground leading-relaxed'>
                Votre bien est nettoyé professionnellement, maintenu en parfait état et valorisé.
                Vous gardez le contrôle avec un contrat flexible.
              </p>
            </CardContent>
          </Card>

          <Card className='group relative overflow-hidden border-0 bg-gradient-card shadow-soft backdrop-blur-sm transition-all duration-500 hover:shadow-premium hover:-translate-y-3 hover:rotate-1 rounded-2xl'>
            <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
            <CardHeader className='relative flex flex-row items-center gap-4 pb-2'>
              <div className='rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20'>
                <TrendingUp className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='font-headline text-lg font-bold'>Levier Financier</CardTitle>
            </CardHeader>
            <CardContent className='relative'>
              <p className='text-muted-foreground leading-relaxed'>
                Nos baux solides et vos revenus réguliers sont reconnus par les banques, facilitant
                vos futurs investissements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
