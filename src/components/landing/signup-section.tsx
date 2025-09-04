'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, ArrowRight, Bell, Star } from 'lucide-react';

export function SignupSection() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Inscription confirmée !',
        description: 'Vous serez parmi les premiers informés du lancement de TrustHome.',
        variant: 'default',
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-primary/5 to-background py-16 md:py-24'>
      {/* Background decorative elements */}
      <div className='absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-warm opacity-10 blur-3xl' />
      <div className='absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-navy opacity-5 blur-2xl' />
      
      <div className='container relative mx-auto px-4 md:px-6'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <div className='mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary'>
            <Bell className='h-4 w-4' />
            Soyez les premiers informés
          </div>
          <h2 className='mb-4 font-headline text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl'>
            Le lancement approche
          </h2>
          <p className='mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl'>
            Rejoignez notre liste d&rsquo;attente pour être notifié dès que TrustHome sera disponible
            et bénéficier d&rsquo;un accès prioritaire.
          </p>
        </div>

        <Card className='mx-auto max-w-2xl border-0 bg-gradient-card shadow-premium backdrop-blur-sm'>
          <CardHeader className='text-center pb-4'>
            <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-warm shadow-glow'>
              <Mail className='h-8 w-8 text-white' />
            </div>
            <CardTitle className='font-headline text-xl font-bold text-foreground sm:text-2xl'>
              Inscription gratuite à la liste d&rsquo;attente
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='flex flex-col gap-3 sm:flex-row'>
                <Input
                  type='email'
                  placeholder='Votre adresse e-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='flex-1'
                  required
                />
                <Button
                  type='submit'
                  disabled={isLoading}
                  className='group relative overflow-hidden bg-gradient-cta-orange text-white shadow-orange transition-all duration-300 hover:shadow-glow-orange hover:-translate-y-1 hover:scale-[1.02] rounded-xl px-6 py-3 font-semibold sm:w-auto'
                >
                  <span className='shimmer absolute inset-0'></span>
                  <span className='relative z-10 flex items-center justify-center gap-2'>
                    {isLoading ? 'Inscription...' : 'M&rsquo;inscrire'}
                    {!isLoading && <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />}
                  </span>
                </Button>
              </div>
            </form>

            {/* Benefits */}
            <div className='grid gap-4 pt-4 border-t border-border/50 sm:grid-cols-3'>
              <div className='flex items-center gap-3 text-sm text-muted-foreground'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-success/10'>
                  <Star className='h-4 w-4 text-success' />
                </div>
                <span>Accès prioritaire</span>
              </div>
              <div className='flex items-center gap-3 text-sm text-muted-foreground'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10'>
                  <Bell className='h-4 w-4 text-primary' />
                </div>
                <span>Première notification</span>
              </div>
              <div className='flex items-center gap-3 text-sm text-muted-foreground'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-accent/10'>
                  <Mail className='h-4 w-4 text-accent' />
                </div>
                <span>0 spam garanti</span>
              </div>
            </div>

            {/* Statistics preview */}
            <div className='grid grid-cols-3 gap-4 pt-4 border-t border-border/50'>
              <div className='text-center'>
                <div className='text-lg font-bold text-primary sm:text-2xl'>Q2 2025</div>
                <div className='text-xs text-muted-foreground sm:text-sm'>Lancement prévu</div>
              </div>
              <div className='text-center'>
                <div className='text-lg font-bold text-primary sm:text-2xl'>MVP</div>
                <div className='text-xs text-muted-foreground sm:text-sm'>En développement</div>
              </div>
              <div className='text-center'>
                <div className='text-lg font-bold text-primary sm:text-2xl'>100%</div>
                <div className='text-xs text-muted-foreground sm:text-sm'>Gratuit</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}