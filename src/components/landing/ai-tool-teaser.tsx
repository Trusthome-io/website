import { Button } from "@/components/ui/button";
import { BrainCircuit, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AiToolTeaserSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative order-last md:order-first">
             <Image
              src="https://placehold.co/500x350.png"
              alt="Illustration IA et analyse de données"
              width={500}
              height={350}
              className="rounded-lg shadow-2xl"
              data-ai-hint="abstract AI data"
            />
          </div>
          <div>
            <BrainCircuit className="h-12 w-12 mb-4" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              Évaluez le Potentiel de Votre Bien avec l'IA
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              Notre outil d'intelligence artificielle analyse les caractéristiques de votre propriété et son emplacement pour vous donner un score de confiance. Découvrez si votre bien est idéal pour un partenariat avec TrustHome.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/confidence-tool">
                Tester l'outil d'IA <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
