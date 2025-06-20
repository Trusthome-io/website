
import { ShieldAlert } from "lucide-react";
import Image from "next/image";

export function StorytellingSection() {
  return (
    <section className="py-12 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <ShieldAlert className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Location Traditionnelle : Entre attentes et réalités contraignantes
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 text-lg text-foreground">
            <p>
              Louer son appartement ou sa maison peut vite devenir une source de stress : retards de paiement, dégradations coûteuses, et la crainte constante des squatteurs peuvent transformer votre investissement en cauchemar.
            </p>
            <p>
              Chez TrustHome, nous comprenons ces défis. C&apos;est pourquoi nous devenons votre unique locataire professionnel.
            </p>
            <p>
              Nous vous garantissons un loyer fixe, versé ponctuellement, prenons en charge l&apos;exploitation, l&apos;entretien et la valorisation de votre bien, et vous offrons une tranquillité d&apos;esprit totale.
            </p>
            <p className="font-semibold text-accent text-xl">
              Fini les tracas, vous n&apos;avez plus qu&apos;à encaisser votre loyer en toute sérénité.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/img/masterbedroom.jpg"
                alt="Chambre principale moderne et élégante"
                width={300}
                height={200}
                className="rounded-lg shadow-lg object-cover h-48"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <Image
                src="/img/cuisine.jpg"
                alt="Cuisine moderne et équipée"
                width={300}
                height={200}
                className="rounded-lg shadow-lg object-cover h-48"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <Image
                src="/img/douche.jpg"
                alt="Salle de bain moderne"
                width={300}
                height={200}
                className="rounded-lg shadow-lg object-cover h-48"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <Image
                src="/img/masterbedroom2.jpg"
                alt="Chambre secondaire confortable"
                width={300}
                height={200}
                className="rounded-lg shadow-lg object-cover h-48"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
