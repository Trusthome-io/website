
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, ShieldCheck, ArrowRight, Award, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-primary mb-6 leading-tight">
              TrustHome est <span className="text-accent">votre locataire</span> qui vous fait bénéficier d'un <span className="text-accent">revenu passif réellement passif</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground mb-8">
              Notre mission : offrir aux propriétaires la rentabilité locative sans les contraintes.
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
              src="/img/salon.jpg"
              alt="Salon moderne et lumineux, symbolisant la sérénité et la valorisation par TrustHome"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl relative object-cover"
              priority
            />
          </div>
        </div>
        <div className="mt-16 lg:mt-24 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <CalendarCheck className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-xl">Loyer Garanti</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Recevez votre loyer chaque mois, à date fixe. Fini les assurances loyers impayés coûteuses et les vacances locatives.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-xl">Zéro Tracas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">TrustHome, votre locataire, prend tout en charge : exploitation, entretien, embellissements, réparations. Un seul interlocuteur dédié.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Award className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-xl">Valorisation & Contrôle</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Votre bien est nettoyé professionnellement, maintenu en parfait état et valorisé. Vous gardez le contrôle avec un contrat flexible.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <TrendingUp className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-xl">Levier Financier</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Nos baux solides et vos revenus réguliers sont reconnus par les banques, facilitant vos futurs investissements.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
