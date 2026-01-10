
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie L.",
    title: "Propriétaire d'un T2 à Levallois-Perret (92)",
    quote: "Mon T2 lumineux avec son charmant balcon à Levallois-Perret est entre de bonnes mains avec TrustHome. Je n'ai plus à me soucier des retards de paiement ou de la recherche de locataires. Les loyers sont versés à date fixe et mon appartement est toujours impeccable. Une vraie tranquillité d'esprit, je recommande vivement !",
    avatar: "SL",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie&backgroundColor=b6e3f4",
    imageHint: "woman apartment"
  },
  {
    name: "Marc D.",
    title: "Investisseur à Clichy & Paris 17ème (92/75)",
    quote: "En tant qu'investisseur avec plusieurs appartements – notamment un grand studio à Clichy et un deux-pièces à Paris 17ème – TrustHome a simplifié ma vie. Leur modèle d'exploitation est performant, les revenus sont garantis et mes biens sont valorisés. Un partenaire professionnel et fiable que je conseille fortement.",
    avatar: "MD",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marc&backgroundColor=c0aede",
    imageHint: "man investor"
  },
  {
    name: "Isabelle B.",
    title: "Propriétaire d'un studio à Asnières-sur-Seine (92)",
    quote: "J'étais un peu sceptique au début, mais TrustHome a transformé la location de mon studio meublé avec goût à Asnières. Zéro vacance locative, un entretien nickel et un service client au top. Mes attentes ont été largement dépassées, 5 étoiles méritées pour la gestion de mon bien de A à Z !",
    avatar: "IB",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabelle&backgroundColor=ffd5dc",
    imageHint: "woman city"
  },
  {
    name: "David P.",
    title: "Propriétaire d'une maison à Saint-Ouen (93)",
    quote: "J'avais des appréhensions à louer ma maison avec petit jardin à Saint-Ouen pendant mon expatriation. TrustHome m'a offert une solution clé en main : loyer versé rubis sur l'ongle, et ma maison est entretenue comme si j'y étais. Une sérénité inestimable, surtout pour un bien de cette taille !",
    avatar: "DP",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=d1d4f9",
    imageHint: "man house"
  },
  {
    name: "Nathalie M.",
    title: "Propriétaire d'un T3 à Neuilly-sur-Seine (92)",
    quote: "Grâce à TrustHome, mon T3 à Neuilly génère des revenus stables chaque mois sans aucun souci de gestion. L'équipe est réactive et professionnelle. Je peux enfin profiter de ma retraite sans m'occuper de la location. Un service remarquable que je conseille à tous les propriétaires !",
    avatar: "NM",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nathalie&backgroundColor=ffdfbf",
    imageHint: "woman senior"
  },
  {
    name: "Thomas R.",
    title: "Propriétaire d'un appartement à Paris 8ème (75)",
    quote: "TrustHome gère mon appartement dans le 8ème arrondissement depuis 6 mois et c'est un sans-faute. Loyer garanti, bien entretenu, reporting régulier. Je regrette de ne pas les avoir connus plus tôt ! Pour les propriétaires qui veulent dormir sur leurs deux oreilles, c'est la solution idéale.",
    avatar: "TR",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas&backgroundColor=c7ecee",
    imageHint: "man professional"
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
