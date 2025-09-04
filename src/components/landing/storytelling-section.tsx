import { ShieldAlert } from 'lucide-react';
import Image from 'next/image';

export function StorytellingSection() {
  return (
    <section className='bg-secondary/20 py-12 md:py-20'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-12 text-center'>
          <ShieldAlert className='mx-auto mb-4 h-8 w-8 text-primary' />
          <h2 className='mb-4 font-headline text-3xl font-bold text-primary md:text-4xl'>
            Location Traditionnelle : Entre attentes et réalités contraignantes
          </h2>
        </div>

        <div className='mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2'>
          <div className='space-y-6 text-lg text-foreground'>
            <p>
              Louer son appartement ou sa maison peut vite devenir une source de stress : retards de
              paiement, dégradations coûteuses, et la crainte constante des squatteurs peuvent
              transformer votre investissement en cauchemar.
            </p>
            <p>
              Chez TrustHome, nous comprenons ces défis. C&apos;est pourquoi nous devenons votre
              unique locataire professionnel.
            </p>
            <p>
              Nous vous garantissons un loyer fixe, versé ponctuellement, prenons en charge
              l&apos;exploitation, l&apos;entretien et la valorisation de votre bien, et vous
              offrons une tranquillité d&apos;esprit totale.
            </p>
            <p className='text-xl font-semibold text-accent'>
              Fini les tracas, vous n&apos;avez plus qu&apos;à encaisser votre loyer en toute
              sérénité.
            </p>
          </div>

          <div className='relative'>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src='/img/masterbedroom.jpg'
                alt='Chambre principale moderne et élégante'
                width={300}
                height={200}
                className='h-48 rounded-lg object-cover shadow-lg'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              <Image
                src='/img/cuisine.jpg'
                alt='Cuisine moderne et équipée'
                width={300}
                height={200}
                className='h-48 rounded-lg object-cover shadow-lg'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              <Image
                src='/img/douche.jpg'
                alt='Salle de bain moderne'
                width={300}
                height={200}
                className='h-48 rounded-lg object-cover shadow-lg'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              <Image
                src='/img/masterbedroom2.jpg'
                alt='Chambre secondaire confortable'
                width={300}
                height={200}
                className='h-48 rounded-lg object-cover shadow-lg'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
