import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ConfidenceToolClient } from "@/components/confidence-tool/confidence-tool-client";
import { BrainCircuit } from "lucide-react";

export const metadata = {
  title: "Outil d'Analyse IA - TrustHome",
  description: "Évaluez le potentiel de votre bien avec notre outil d'intelligence artificielle.",
};

export default function ConfidenceToolPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <BrainCircuit className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-primary mb-3">
              Outil d'Analyse IA TrustHome
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez le potentiel de votre propriété en partenariat avec TrustHome grâce à notre analyse par intelligence artificielle. Obtenez un score de confiance et des recommandations personnalisées.
            </p>
          </div>
          <ConfidenceToolClient />
        </div>
      </main>
      <Footer />
    </div>
  );
}
