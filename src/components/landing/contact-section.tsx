'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, Star } from 'lucide-react';

const CONTACT_EMAIL = 'ajithanmoorthy@outlook.fr';
const CONTACT_PHONE = '0781685556';
const CONTACT_PHONE_FORMATTED = '07 81 68 55 56';
const WHATSAPP_NUMBER = '33781685556'; // Format international sans le +

export function ContactSection() {
  const handlePhoneClick = () => {
    window.location.href = `tel:${CONTACT_PHONE}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${CONTACT_EMAIL}`;
  };

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
            Contactez-nous directement
          </div>
          <h2 className='mb-4 font-headline text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl'>
            Nous sommes là pour vous
            <span className='bg-gradient-warm bg-clip-text text-transparent'> accompagner</span>
          </h2>
          <p className='mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl'>
            Une question ? Besoin d&apos;informations ? Contactez-nous par téléphone, WhatsApp ou email.
          </p>
        </div>

        <div className='mx-auto max-w-4xl'>
          <Card className='border-0 bg-gradient-card shadow-premium backdrop-blur-sm'>
            <CardHeader className='text-center'>
              <CardTitle className='font-headline text-xl font-bold text-foreground sm:text-2xl md:text-3xl'>
                Choisissez votre moyen de contact préféré
              </CardTitle>
              <CardDescription className='text-sm text-muted-foreground sm:text-base md:text-lg'>
                Notre équipe est disponible pour répondre à toutes vos questions
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6 p-6 sm:p-8'>
              {/* Phone Call Button */}
              <div className='group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                <div className='relative z-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
                  <div className='flex items-center gap-4'>
                    <div className='flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm'>
                      <Phone className='h-7 w-7 text-white' />
                    </div>
                    <div className='text-center sm:text-left'>
                      <h3 className='text-lg font-semibold text-white'>Appelez-nous</h3>
                      <p className='text-2xl font-bold text-white'>{CONTACT_PHONE_FORMATTED}</p>
                    </div>
                  </div>
                  <Button
                    onClick={handlePhoneClick}
                    size='lg'
                    className='bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105'
                  >
                    <Phone className='mr-2 h-5 w-5' />
                    Appeler maintenant
                  </Button>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className='group relative overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-green-600 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]'>
                <div className='absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                <div className='relative z-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
                  <div className='flex items-center gap-4'>
                    <div className='flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm'>
                      <MessageCircle className='h-7 w-7 text-white' />
                    </div>
                    <div className='text-center sm:text-left'>
                      <h3 className='text-lg font-semibold text-white'>WhatsApp</h3>
                      <p className='text-2xl font-bold text-white'>{CONTACT_PHONE_FORMATTED}</p>
                    </div>
                  </div>
                  <Button
                    onClick={handleWhatsAppClick}
                    size='lg'
                    className='bg-white text-green-600 hover:bg-green-50 font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105'
                  >
                    <MessageCircle className='mr-2 h-5 w-5' />
                    Discuter sur WhatsApp
                  </Button>
                </div>
              </div>

              {/* Email Button */}
              <div className='group relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                <div className='relative z-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
                  <div className='flex items-center gap-4'>
                    <div className='flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm'>
                      <Mail className='h-7 w-7 text-white' />
                    </div>
                    <div className='text-center sm:text-left'>
                      <h3 className='text-lg font-semibold text-white'>Email</h3>
                      <p className='text-lg font-bold text-white sm:text-xl break-all'>{CONTACT_EMAIL}</p>
                    </div>
                  </div>
                  <Button
                    onClick={handleEmailClick}
                    size='lg'
                    className='bg-white text-orange-600 hover:bg-orange-50 font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105'
                  >
                    <Mail className='mr-2 h-5 w-5' />
                    Nous écrire
                  </Button>
                </div>
              </div>

              {/* Trust indicators */}
              <div className='mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground sm:gap-6 sm:text-sm'>
                <div className='flex items-center gap-2'>
                  <div className='h-2 w-2 rounded-full bg-success'></div>
                  <span>Réponse rapide</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='h-2 w-2 rounded-full bg-success'></div>
                  <span>Disponible 7j/7</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='h-2 w-2 rounded-full bg-success'></div>
                  <span>Gratuit et sans engagement</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
