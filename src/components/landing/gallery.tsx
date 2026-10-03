import Image from 'next/image';

const photos = [
  { src: '/img/salon.jpg', alt: 'Salon lumineux avec canapé et table basse', w: 1067, h: 1600 },
  { src: '/img/cuisine.jpg', alt: 'Cuisine équipée et rangée', w: 1600, h: 1067 },
  { src: '/img/masterbedroom.jpg', alt: 'Chambre principale au lit fait', w: 1600, h: 1067 },
  { src: '/img/douche.jpg', alt: 'Salle de douche propre', w: 1600, h: 1067 },
  { src: '/img/masterbedroom2.jpg', alt: 'Seconde chambre', w: 1600, h: 1083 },
];

export function Gallery() {
  const [tall, ...rest] = photos;
  return (
    <section aria-labelledby="logements-title" className="bg-white">
      <div className="container py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 id="logements-title" className="text-3xl font-bold md:text-4xl">
            Des logements dont nous nous occupons déjà
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ménage fait régulièrement, petites réparations traitées quand elles se présentent. C&apos;est notre
            équipe qui le fait, et c&apos;est nous qui payons.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] lg:grid-rows-2">
          <Image
            src={tall.src}
            alt={tall.alt}
            width={tall.w}
            height={tall.h}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-72 w-full rounded-lg object-cover sm:row-span-2 sm:h-full lg:row-span-2"
          />
          {rest.map((photo) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              loading="lazy"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-56 w-full rounded-lg object-cover lg:h-64"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
