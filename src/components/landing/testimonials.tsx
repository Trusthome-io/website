import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Maxime DL.",
    title: "Propriétaire d'un T3 à Clichy (92)",
    quote: "TrustHome gère mon T3 à Clichy depuis plusieurs mois et le résultat est sans appel : loyer versé à date fixe, zéro tracas administratif. L'équipe est disponible, réactive et vraiment professionnelle. Je recommande à tous les propriétaires de la région.",
    avatar: "ML",
    rating: 5,
    image: "https://api.dicebear.com/9.x/personas/svg?seed=Maxime&backgroundColor=c0aede&hair=shortCombover&eyes=eyesNatural&mouth=smile",
    imageHint: "man professional"
  },
  {
    name: "David P.",
    title: "Propriétaire d'une maison individuelle à Saint-Germain-en-Laye (78)",
    quote: "Au départ, j'avais quelques inquiétudes à l'idée de louer ma maison à Saint-Germain-en-Laye pendant mon expatriation. Finalement, avec TrustHome, tout s'est fait simplement : le loyer est versé régulièrement, sans souci, et la maison est bien entretenue. C'est rassurant de savoir que tout est géré sérieusement en mon absence.",
    avatar: "DP",
    rating: 5,
    image: "https://api.dicebear.com/9.x/personas/svg?seed=DavidP&backgroundColor=d1d4f9&hair=shortComboverChops&eyes=eyesRound&mouth=smile",
    imageHint: "man house"
  },
  {
    name: "Nathalie M.",
    title: "Propriétaire d'un T3 à Versailles (78)",
    quote: "Grâce à TrustHome, mon T3 à Versailles me garantit un loyer régulier chaque mois, sans que j'aie à gérer quoi que ce soit. L'équipe est sérieuse et réactive, ce qui est vraiment appréciable. Je peux profiter de ma retraite tranquillement.",
    avatar: "NM",
    rating: 5,
    image: "https://api.dicebear.com/9.x/personas/svg?seed=Nathalie&backgroundColor=ffdfbf&hair=wavyBob&eyes=eyesNatural&mouth=smile",
    imageHint: "woman senior"
  },
  {
    name: "Isabelle B.",
    title: "Propriétaire d'un T2 à Asnières-sur-Seine (92)",
    quote: "J'étais un peu sceptique au début, mais TrustHome a complètement transformé la gestion de mon T2 à Asnières. Zéro vacance locative, un entretien nickel.",
    avatar: "IB",
    rating: 5,
    image: "https://api.dicebear.com/9.x/personas/svg?seed=Isabelle&backgroundColor=ffd5dc&hair=straightBun&eyes=eyesNatural&mouth=smile",
    imageHint: "woman city"
  },
  {
    name: "Thomas R.",
    title: "Propriétaire d'une maison individuelle à Deauville (14)",
    quote: "TrustHome gère mon appartement depuis plusieurs mois et tout se passe bien. Le loyer est versé régulièrement, le bien est entretenu et j'ai des nouvelles de temps en temps sur la gestion. C'est rassurant au quotidien, et je regrette de ne pas les avoir connus plus tôt.",
    avatar: "TR",
    rating: 5,
    image: "https://api.dicebear.com/9.x/personas/svg?seed=ThomasR&backgroundColor=c7ecee&hair=shortAndClean&eyes=eyesNatural&mouth=smile",
    imageHint: "man professional"
  }
];

export function Testimonials() {
  return (
    <section id="avis" aria-labelledby="avis-title" className="bg-paper">
      <div className="container py-16 md:py-24">
        <h2 id="avis-title" className="max-w-2xl text-3xl font-bold md:text-4xl">
          Ils nous louent déjà leur logement
        </h2>
        <div className="mt-10 columns-1 gap-5 md:columns-2 lg:columns-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="mb-5 break-inside-avoid rounded-lg border bg-white p-6">
              <div className="flex gap-0.5" aria-label={`${testimonial.rating} sur 5`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className={`size-4 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-muted"}`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 leading-relaxed text-navy">&laquo;&nbsp;{testimonial.quote}&nbsp;&raquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage src={testimonial.image} alt="" />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <span>
                  <span className="block font-semibold text-navy">{testimonial.name}</span>
                  <span className="block text-sm text-muted-foreground">{testimonial.title}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
