
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie L.",
    title: "Propriétaire d'un T2 à Saint-Germain-en-Laye",
    quote: "Mon T2 lumineux avec son charmant balcon à Saint-Germain-en-Laye est entre de bonnes mains avec TrustHome. Je n'ai plus à me soucier des retards de paiement ou de la recherche de locataires. Les loyers sont versés à date fixe et mon appartement est toujours impeccable. Une vraie tranquillité d'esprit, je recommande vivement !",
    avatar: "SL",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    imageHint: "woman apartment"
  },
  {
    name: "Marc D.",
    title: "Investisseur (appartements à Fontainebleau & St-Germain)",
    quote: "En tant qu'investisseur avec plusieurs appartements – notamment un grand studio à Fontainebleau et un deux-pièces à Saint-Germain-en-Laye – TrustHome a simplifié ma vie. Leur modèle d'exploitation est performant, les revenus sont garantis et mes biens sont valorisés. Un partenaire professionnel et fiable que je conseille fortement.",
    avatar: "MD",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    imageHint: "man investor"
  },
  {
    name: "Isabelle B.",
    title: "Propriétaire d'un studio à Tours",
    quote: "J'étais un peu sceptique au début, mais TrustHome a transformé la location de mon studio meublé avec goût dans le centre de Tours. Zéro vacance locative, un entretien nickel et un service client au top. Mes attentes ont été largement dépassées, 5 étoiles méritées pour la gestion de mon bien de A à Z !",
    avatar: "IB",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    imageHint: "woman city"
  },
  {
    name: "David P.",
    title: "Propriétaire d'une maison de ville à Rouen",
    quote: "J'avais des appréhensions à louer ma maison de ville avec petit jardin à Rouen pendant mon expatriation. TrustHome m'a offert une solution clé en main : loyer versé rubis sur l'ongle, et ma maison est entretenue comme si j'y étais. Une sérénité inestimable, surtout pour un bien de cette taille !",
    avatar: "DP",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    imageHint: "man house"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Ce que nos clients disent de nous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfaction de nos propriétaires est notre meilleure publicité. Découvrez leurs expériences avec TrustHome.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="font-headline text-xl">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`} />
                  ))}
                </div>
                <p className="text-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
