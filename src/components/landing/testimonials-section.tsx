'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Laurent',
    role: 'Propriétaire',
    location: 'Paris 15e',
    quote:
      "Avec TrustHome, j'ai enfin trouvé la tranquillité d'esprit. Plus de soucis avec les locataires, les réparations ou les impayés. Je reçois mon loyer chaque mois et mon appartement est entre de bonnes mains.",
    rating: 5,
    revenue: '+420€',
    avatar: 'SL',
  },
  {
    id: 2,
    name: 'Jean-Pierre Martin',
    role: 'Investisseur immobilier',
    location: 'Marseille',
    quote:
      "En tant qu'investisseur, TrustHome m'a permis de diversifier mon portefeuille sans les contraintes de gestion. Leur professionnalisme et leur transparence sont exemplaires. Je recommande vivement !",
    rating: 5,
    revenue: '+680€',
    avatar: 'JM',
  },
  {
    id: 3,
    name: 'Marie Dubois',
    role: 'Propriétaire',
    location: 'Lyon',
    quote:
      'Grâce à TrustHome, mon bien a été valorisé et je touche plus qu\'avant, sans aucun effort de ma part. Le processus a été simple et rapide. Une solution parfaite pour les propriétaires occupés.',
    rating: 5,
    revenue: '+520€',
    avatar: 'MD',
  },
  {
    id: 4,
    name: 'Laurent Roux',
    role: 'Propriétaire',
    location: 'Toulouse',
    quote:
      'J\'hésitais avant de faire appel à TrustHome, mais après 6 mois, je ne peux que recommander. Service impeccable, communication parfaite et surtout un loyer garanti qui me permet de dormir tranquille.',
    rating: 5,
    revenue: '+395€',
    avatar: 'LR',
  },
  {
    id: 5,
    name: 'Catherine Moreau',
    role: 'Investisseuse',
    location: 'Nice',
    quote:
      'TrustHome a transformé mon investissement locatif en véritable machine à cash-flow. Fini les vacances locatives et les mauvais payeurs. C\'est la solution que tout investisseur devrait connaître !',
    rating: 5,
    revenue: '+750€',
    avatar: 'CM',
  },
];

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-secondary/20 to-background py-16 md:py-24'>
      {/* Background decorative elements */}
      <div className='absolute left-0 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-warm opacity-5 blur-3xl' />
      <div className='absolute right-0 bottom-0 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-navy opacity-5 blur-2xl' />
      
      <div className='container relative mx-auto px-4 md:px-6'>
        {/* Header */}
        <div className='mb-16 text-center'>
          <div className='mb-6 inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-medium text-success'>
            <Star className='h-4 w-4 fill-success' />
            4.9/5 - 500+ propriétaires satisfaits
          </div>
          <h2 className='mb-4 font-headline text-3xl font-bold text-foreground md:text-4xl lg:text-5xl'>
            Ils ont fait confiance à 
            <span className='bg-gradient-warm bg-clip-text text-transparent'> TrustHome</span>
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl'>
            Découvrez les témoignages authentiques de propriétaires qui ont transformé leurs biens en revenus garantis
          </p>
        </div>

        {/* Main carousel */}
        <div className='relative mx-auto max-w-4xl'>
          <div className='overflow-hidden rounded-3xl'>
            <div 
              className='flex transition-transform duration-500 ease-out'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className='w-full flex-shrink-0'>
                  <Card className='border-0 bg-gradient-card shadow-premium backdrop-blur-sm'>
                    <CardContent className='p-8 md:p-12'>
                      <div className='flex flex-col items-center text-center'>
                        {/* Quote icon */}
                        <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10'>
                          <Quote className='h-8 w-8 text-primary' />
                        </div>
                        
                        {/* Stars */}
                        <div className='mb-6 flex'>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className='h-5 w-5 fill-primary text-primary' />
                          ))}
                        </div>
                        
                        {/* Testimonial content */}
                        <blockquote className='mb-8 text-xl leading-relaxed text-muted-foreground md:text-2xl'>
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        
                        {/* Author info */}
                        <div className='flex flex-col items-center gap-4 md:flex-row'>
                          <Avatar className='h-16 w-16 ring-2 ring-primary/20'>
                            <AvatarFallback className='bg-gradient-warm text-white'>
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className='text-center md:text-left'>
                            <div className='font-headline text-lg font-bold text-foreground'>{testimonial.name}</div>
                            <div className='text-sm text-muted-foreground'>
                              {testimonial.role} • {testimonial.location}
                            </div>
                            <div className='mt-1 inline-flex items-center gap-1 rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success'>
                              {testimonial.revenue} /mois
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            variant='outline'
            size='icon'
            className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full border-2 bg-background/80 backdrop-blur-sm transition-all hover:scale-110 hover:shadow-soft'
            onClick={prevSlide}
          >
            <ChevronLeft className='h-5 w-5' />
          </Button>
          
          <Button
            variant='outline'
            size='icon'
            className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full border-2 bg-background/80 backdrop-blur-sm transition-all hover:scale-110 hover:shadow-soft'
            onClick={nextSlide}
          >
            <ChevronRight className='h-5 w-5' />
          </Button>
        </div>

        {/* Dots indicator */}
        <div className='mt-8 flex justify-center gap-2'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Trust indicators */}
        <div className='mt-16 grid grid-cols-1 gap-8 text-center md:grid-cols-3'>
          <div className='flex flex-col items-center gap-2'>
            <div className='text-3xl font-bold text-primary'>500+</div>
            <div className='text-sm text-muted-foreground'>Propriétaires satisfaits</div>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <div className='text-3xl font-bold text-primary'>98%</div>
            <div className='text-sm text-muted-foreground'>Taux de satisfaction</div>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <div className='text-3xl font-bold text-primary'>24h</div>
            <div className='text-sm text-muted-foreground'>Temps de réponse moyen</div>
          </div>
        </div>
      </div>
    </section>
  );
}
