import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Mail,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { benefits, comparison, faq, nav, site, stats, steps, testimonials } from "@/content";

const icons = {
  calendar: CalendarCheck,
  shield: ShieldCheck,
  sparkles: Sparkles,
  trending: TrendingUp,
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">{children}</p>;
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 md:grid-cols-[1.1fr_1fr] md:pt-40 [&>*]:min-w-0">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Île-de-France & Normandie
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Votre loyer garanti.
              <br />
              <span className="text-muted">Sans les contraintes.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              {site.name} devient votre locataire longue durée. Vous touchez un loyer fixe chaque mois, on s&apos;occupe
              de tout le reste.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-accent-ink transition-opacity hover:opacity-90"
              >
                Estimer mon loyer
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#processus"
                className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3.5 font-medium transition-colors hover:border-ink"
              >
                Comment ça marche
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/img/salon.jpg"
                alt="Salon lumineux d'un appartement géré par TrustHome"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-line bg-surface p-4 shadow-xl shadow-black/5 sm:-left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Check size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold">Loyer versé</p>
                <p className="text-xs text-muted">Chaque mois, à date fixe</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Chiffres */}
        <section className="border-y border-line">
          <div className="mx-auto grid max-w-6xl divide-y divide-line px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((s) => (
              <div key={s.label} className="py-8 sm:px-8 sm:first:pl-0">
                <p className="text-3xl font-semibold tracking-tight">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Avantages */}
        <section id="avantages" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <Eyebrow>Avantages</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              La rentabilité d&apos;une location, la tranquillité en plus.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => {
              const Icon = icons[b.icon];
              return (
                <Reveal key={b.title} delay={i * 80} className="bg-surface p-7">
                  <Icon size={22} className="text-accent" strokeWidth={1.75} />
                  <h3 className="mt-6 text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{b.text}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Constat */}
        <section className="bg-surface">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:py-32">
            <Reveal className="grid grid-cols-2 gap-3">
              {[
                ["/img/cuisine.jpg", "Cuisine équipée"],
                ["/img/masterbedroom.jpg", "Chambre principale"],
                ["/img/douche.jpg", "Salle de bain"],
                ["/img/masterbedroom2.jpg", "Chambre"],
              ].map(([src, alt], i) => (
                <div
                  key={src}
                  className={`relative aspect-square overflow-hidden rounded-2xl ${i % 2 === 1 ? "translate-y-6" : ""}`}
                >
                  <Image src={src} alt={alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>Le constat</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Louer soi-même, c&apos;est souvent plus de stress que prévu.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Retards de paiement, dégradations, vacance locative, crainte du squat… Votre investissement peut vite
                devenir une source d&apos;inquiétude.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Avec {site.name}, vous avez un seul locataire professionnel qui paie à date fixe, entretient et valorise
                votre bien.
              </p>
              <p className="mt-8 text-lg font-medium">Vous n&apos;avez plus qu&apos;à encaisser.</p>
            </Reveal>
          </div>
        </section>

        {/* Processus */}
        <section id="processus" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <Eyebrow>Fonctionnement</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Quatre étapes, et c&apos;est réglé.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 100} className="border-t border-ink pt-6">
                  <span className="text-sm tabular-nums text-muted">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* Comparatif */}
        <section id="comparatif" className="bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
            <Reveal className="max-w-2xl">
              <Eyebrow>Comparatif</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Location classique ou {site.name} ?</h2>
            </Reveal>
            <Reveal delay={100} className="mt-14 overflow-hidden rounded-3xl border border-line">
              <div className="hidden grid-cols-[1fr_1.4fr_1.4fr] border-b border-line bg-bg text-sm font-medium md:grid">
                <div className="p-5" />
                <div className="p-5 text-muted">Location classique</div>
                <div className="bg-accent-soft p-5 text-accent">Avec {site.name}</div>
              </div>
              {comparison.map((row) => (
                <div
                  key={row.label}
                  className="grid border-b border-line last:border-b-0 md:grid-cols-[1fr_1.4fr_1.4fr]"
                >
                  <div className="px-5 pt-5 font-semibold md:p-5">{row.label}</div>
                  <div className="flex gap-3 px-5 py-3 text-[15px] text-muted md:p-5">
                    <Minus size={18} className="mt-0.5 shrink-0" />
                    {row.classic}
                  </div>
                  <div className="flex gap-3 bg-accent-soft px-5 py-3 pb-5 text-[15px] md:p-5">
                    <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                    {row.us}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Avis */}
        <section id="avis" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <Eyebrow>Avis</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ils nous ont confié leur bien.</h2>
          </Reveal>
          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 60} className="mb-5 break-inside-avoid">
                <figure className="rounded-3xl border border-line bg-surface p-7">
                  <p className="text-amber-500" aria-label="5 étoiles sur 5">
                    ★★★★★
                  </p>
                  <blockquote className="mt-4 leading-relaxed">« {t.quote} »</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                      {t.name[0]}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{t.name}</span>
                      <span className="block text-xs text-muted">{t.place}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1fr_1.6fr] md:py-32">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Vos questions.</h2>
              <p className="mt-4 text-muted">
                Une autre question ?{" "}
                <a href="#contact" className="text-ink underline underline-offset-4">
                  Écrivez-nous
                </a>
                .
              </p>
            </Reveal>
            <Reveal delay={100} className="divide-y divide-line border-y border-line">
              {faq.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-medium">
                    {item.q}
                    <Plus size={18} className="shrink-0 text-muted transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 pr-10 leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1fr_1.4fr] md:py-32">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Combien pourrait vous rapporter votre bien ?</h2>
            <p className="mt-4 text-lg text-muted">Estimation gratuite et sans engagement.</p>
            <ul className="mt-10 space-y-3">
              {[
                { href: site.phoneHref, icon: Phone, label: site.phone, hint: "Appeler" },
                { href: site.whatsappHref, icon: MessageCircle, label: "WhatsApp", hint: "Discuter" },
                { href: `mailto:${site.email}`, icon: Mail, label: site.email, hint: "Écrire" },
              ].map(({ href, icon: Icon, label, hint }) => (
                <li key={hint}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-line p-4 transition-colors hover:border-ink"
                  >
                    <Icon size={20} className="text-accent" strokeWidth={1.75} />
                    <span className="min-w-0 flex-1 truncate">{label}</span>
                    <span className="text-sm text-muted group-hover:text-ink">{hint} →</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight">
              {site.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted">Loyer garanti et gestion sans souci pour les propriétaires.</p>
            <p className="mt-2 text-sm text-muted">{site.city}</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-muted">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-line px-5 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <p>Service basé en France · Conforme RGPD</p>
        </div>
      </footer>
    </>
  );
}
