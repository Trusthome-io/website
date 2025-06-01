import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-primary mb-6 leading-tight">
              Confiez-nous votre bien, gagnez en <span className="text-accent">sérénité</span> et en <span className="text-accent">revenus</span>.
            </h1>
            <p className="text-lg md:text-xl text-foreground mb-8">
              TrustHome révolutionne la gestion locative pour les propriétaires. Profitez d'un loyer garanti, d'une gestion sans tracas et d'une tranquillité d'esprit inégalée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#contact">
                  Démarrez avec TrustHome <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="#process">
                  Comment ça marche ?
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Illustration d'une maison moderne et sécurisée"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl relative"
              data-ai-hint="modern house illustration"
            />
          </div>
        </div>
        <div className="mt-16 lg:mt-24 grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <CalendarCheck className="h-10 w-10 text-primary" />
              <CardTitle className="font-headline text-xl">Loyer Garanti</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Recevez votre loyer chaque mois, sans faute, même si le bien est vacant.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <ShieldCheck className="h-10 w-10 text-primary" />
              <CardTitle className="font-headline text-xl">Gestion Sans Souci</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Nous prenons en charge l'entretien, les réparations et toutes les démarches administratives.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Zap className="h-10 w-10 text-primary" />
              <CardTitle className="font-headline text-xl">Processus Simplifié</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Une évaluation rapide de votre bien et une signature de contrat en toute transparence.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
