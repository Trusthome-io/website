
import { ShieldAlert } from "lucide-react";

export function StorytellingSection() {
  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <ShieldAlert className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            La Location : Un Chemin Parsemé d'Embûches ?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground">
          <p>
            Louer son appartement ou sa maison peut vite devenir une source de stress : retards de paiement, dégradations coûteuses, et la crainte constante des squatteurs peuvent transformer votre investissement en cauchemar.
          </p>
          <p>
            Chez TrustHome, nous comprenons ces défis. C'est pourquoi nous devenons votre unique locataire professionnel.
          </p>
          <p>
            Nous vous garantissons un loyer fixe, versé ponctuellement, prenons en charge l'exploitation, l'entretien et la valorisation de votre bien, et vous offrons une tranquillité d'esprit totale.
          </p>
          <p className="font-semibold text-accent">
            Fini les tracas, vous n'avez plus qu'à encaisser votre loyer en toute sérénité.
          </p>
        </div>
      </div>
    </section>
  );
}
