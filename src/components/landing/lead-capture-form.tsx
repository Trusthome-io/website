'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, ArrowRight, Star } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez entrer une adresse e-mail valide.' }),
  phone: z.string().optional(),
  propertyAddress: z.string().min(5, { message: "L'adresse doit contenir au moins 5 caractères." }),
  message: z.string().optional(),
});

export function LeadCaptureForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      propertyAddress: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement actual form submission logic (e.g., send to backend or email service)
    // console.log('Form submitted:', values); // Disabled for production
    toast({
      title: 'Message envoyé !',
      description: 'Merci de nous avoir contactés. Nous reviendrons vers vous rapidement.',
      variant: 'default',
    });
    form.reset();
  }

  return (
    <section id='contact' className='relative overflow-hidden bg-gradient-to-br from-secondary/30 to-background py-16 md:py-24'>
      {/* Background elements */}
      <div className='absolute left-1/2 top-0 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-warm opacity-10 blur-3xl' />
      <div className='absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-navy opacity-5 blur-2xl' />
      
      <div className='container relative mx-auto px-4 md:px-6'>
        {/* Enhanced header */}
        <div className='mb-12 text-center'>
          <div className='mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary'>
            <Star className='h-4 w-4 fill-primary' />
            Consultation gratuite & sans engagement
          </div>
          <h2 className='mb-4 font-headline text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl'>
            Transformez votre bien en 
            <span className='bg-gradient-warm bg-clip-text text-transparent'> revenus garantis</span>
          </h2>
          <p className='mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl'>
            Découvrez en 24h combien TrustHome peut vous rapporter chaque mois, sans aucun risque ni frais cachés.
          </p>
        </div>

        <Card className='mx-auto max-w-2xl border-0 bg-gradient-card shadow-premium backdrop-blur-sm'>
          <CardHeader className='text-center'>
            <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-warm shadow-glow'>
              <Mail className='h-8 w-8 text-white' />
            </div>
            <CardTitle className='font-headline text-xl font-bold text-foreground sm:text-2xl md:text-3xl'>
              Obtenez votre estimation personnalisée
            </CardTitle>
            <CardDescription className='text-sm text-muted-foreground sm:text-base md:text-lg'>
              Remplissez ce formulaire pour recevoir une estimation de revenus adaptée à votre bien.
              <strong className='block mt-2 text-primary'>Réponse garantie sous 24h</strong>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 sm:space-y-6'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input placeholder='Votre nom complet' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresse e-mail</FormLabel>
                      <FormControl>
                        <Input type='email' placeholder='Votre e-mail' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone (Optionnel)</FormLabel>
                      <FormControl>
                        <Input type='tel' placeholder='Votre numéro de téléphone' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='propertyAddress'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresse du bien</FormLabel>
                      <FormControl>
                        <Input placeholder='Adresse complète de votre propriété' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optionnel)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='Ajoutez des détails ou questions spécifiques ici...'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type='submit'
                  size='lg'
                  className='group relative w-full overflow-hidden bg-gradient-cta text-white shadow-button-modern transition-all duration-300 hover:shadow-button-hover hover:-translate-y-1 hover:scale-[1.02] rounded-xl py-4 text-lg font-semibold'
                >
                  <span className='shimmer absolute inset-0'></span>
                  <span className='relative z-10 flex items-center justify-center gap-2'>
                    Obtenir mon estimation gratuite
                    <ArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
                  </span>
                </Button>
                
                {/* Trust indicators below the button */}
                <div className='flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground sm:gap-6 sm:text-sm'>
                  <div className='flex items-center gap-2'>
                    <div className='h-2 w-2 rounded-full bg-success'></div>
                    <span>100% gratuit</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='h-2 w-2 rounded-full bg-success'></div>
                    <span>Sans engagement</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='h-2 w-2 rounded-full bg-success'></div>
                    <span>Données sécurisées</span>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
