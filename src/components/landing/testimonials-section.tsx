import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie L.",
    title: "Propriétaire à Paris",
    quote: "Depuis que j'ai confié mon appartement à TrustHome, je n'ai plus aucun souci de gestion. Loyer garanti et tranquillité d'esprit, je recommande vivement !",
    avatar: "SL",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    imageHint: "woman portrait"
  },
  {
    name: "Marc D.",
    title: "Investisseur immobilier",
    quote: "TrustHome est un partenaire fiable et professionnel. Leur approche de la sous-location est innovante et très avantageuse pour les propriétaires.",
    avatar: "MD",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    imageHint: "man portrait"
  },
  {
    name: "Isabelle B.",
    title: "Propriétaire d'un studio",
    quote: "J'étais sceptique au début, mais TrustHome a dépassé toutes mes attentes. Plus de vacances locatives et un service client impeccable.",
    avatar: "IB",
    rating: 4,
    image: "https://placehold.co/100x100.png",
    imageHint: "woman smiling"
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
