
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie L.",
    title: "Propriétaire d'un T2 à Paris (Le Marais)",
    quote: "Mon T2 dans le Marais est entre de bonnes mains avec TrustHome. Plus de stress lié à la gestion locative, loyers reçus à date fixe et mon bien est toujours impeccable. Une vraie tranquillité d'esprit, je recommande vivement !",
    avatar: "SL",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    imageHint: "woman paris"
  },
  {
    name: "Marc D.",
    title: "Investisseur (plusieurs appartements en Île-de-France)",
    quote: "En tant qu'investisseur avec plusieurs appartements en Île-de-France, TrustHome a simplifié ma vie. Leur modèle d'exploitation est performant, les revenus sont garantis et mes biens sont valorisés. Un partenaire professionnel et fiable que je conseille fortement.",
    avatar: "MD",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    imageHint: "man investor"
  },
  {
    name: "Isabelle B.",
    title: "Propriétaire d'un studio à Lyon (près de la Part-Dieu)",
    quote: "J'étais un peu sceptique au début, mais TrustHome a transformé la location de mon studio près de la Part-Dieu à Lyon. Zéro vacance locative, un entretien nickel et un service client au top. Mes attentes ont été largement dépassées, 5 étoiles méritées !",
    avatar: "IB",
    rating: 5, // Changé de 4 à 5
    image: "https://placehold.co/100x100.png",
    imageHint: "woman lyon"
  },
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
                <p className="text-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
