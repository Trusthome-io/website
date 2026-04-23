"use client";

import { useState, useRef } from "react";

const testimonials = [
  {
    quote:
      "Ça fait 14 mois que je reçois mon loyer le 5, sans exception. Je ne me souviens même plus de la dernière fois que j'ai pensé à mon appartement de Levallois.",
    name: "Sophie L.",
    title: "Propriétaire T2, Levallois-Perret",
    featured: true,
  },
  {
    quote:
      "J'ai trois biens confiés à Trusthome. Le premier contrat a tellement bien fonctionné que j'ai signé les deux suivants dans la foulée. Zéro vacance en 22 mois.",
    name: "Marc D.",
    title: "Investisseur, Paris 17e",
    featured: false,
  },
  {
    quote:
      "J'étais sceptique au début — trop beau pour être vrai. Mais après un an, je dois admettre que c'est exactement ce qu'ils ont promis. Loyer le 5, pas de stress.",
    name: "Isabelle B.",
    title: "Propriétaire T3, Asnières",
    featured: false,
  },
  {
    quote:
      "Expatrié à Singapour, je ne pouvais pas gérer mon bien moi-même. Trusthome s'occupe de tout et je reçois le virement chaque mois. La tranquillité d'esprit, c'est n'a pas de prix.",
    name: "David P.",
    title: "Propriétaire T2, Paris 8e",
    featured: false,
  },
  {
    quote:
      "À la retraite, je voulais la paix. Plus de locataires qui appellent pour une ampoule, plus de courses chez le bricoleur. Trusthome a changé ma vie de propriétaire.",
    name: "Nathalie M.",
    title: "Propriétaire T4, Neuilly-sur-Seine",
    featured: false,
  },
  {
    quote:
      "6 mois d'expérience dans le 8ème et je suis conquis. Le bien est impeccable, les comptes rendus trimestriels sont clairs, et le loyer est toujours là à temps.",
    name: "Thomas R.",
    title: "Propriétaire T2, Paris 8e",
    featured: false,
  },
];

export function TestimonialsSection() {
  const [offset, setOffset] = useState(0);
  const cardWidth = 460;
  const gap = 20;
  const max = testimonials.length - 1;

  function prev() {
    setOffset((o) => Math.max(0, o - 1));
  }
  function next() {
    setOffset((o) => Math.min(max, o + 1));
  }

  return (
    <section
      id="testimonials"
      style={{
        padding: "120px 0",
        borderTop: "1px solid var(--line)",
        background: "var(--cream-50)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 72,
            marginBottom: 40,
          }}
          className="th-sec-head"
        >
          <div className="eyebrow">— Ils nous font confiance</div>
          <div>
            <h2>Des propriétaires qui dorment mieux.</h2>
          </div>
        </div>

        {/* Stage */}
        <div
          style={{
            overflow: "hidden",
            margin: "0 -40px",
            padding: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: gap,
              transform: `translateX(-${offset * (cardWidth + gap)}px)`,
              transition: "transform .5s cubic-bezier(.22,.61,.36,1)",
              willChange: "transform",
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  flex: `0 0 min(${cardWidth}px, 85vw)`,
                  padding: 32,
                  border: `1px solid ${t.featured ? "transparent" : "var(--line)"}`,
                  borderRadius: 20,
                  background: t.featured ? "var(--teal-900)" : "var(--cream-50)",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 320,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 400,
                    fontSize: 22,
                    lineHeight: 1.32,
                    color: t.featured ? "white" : "var(--teal-900)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: 40,
                      color: t.featured ? "var(--violet-300)" : "var(--violet-600)",
                      lineHeight: 0.8,
                      marginBottom: -18,
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    &ldquo;
                  </span>
                  {t.quote}
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: 22,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 600,
                        color: t.featured ? "white" : "var(--teal-900)",
                        fontSize: 15,
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: t.featured ? "var(--teal-300)" : "var(--ink-500)",
                        marginTop: 2,
                      }}
                    >
                      {t.title}
                    </div>
                  </div>
                  <div style={{ color: "#c79b3a", fontSize: 13, letterSpacing: 2 }}>
                    ★★★★★
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 32,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setOffset(i)}
                style={{
                  width: offset === i ? 40 : 22,
                  height: 3,
                  borderRadius: 999,
                  background: offset === i ? "var(--violet-600)" : "var(--line)",
                  border: "none",
                  cursor: "pointer",
                  transition: "background .2s ease, width .2s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {[["←", prev], ["→", next]].map(([label, handler]) => (
              <button
                key={label as string}
                onClick={handler as () => void}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "1px solid var(--line)",
                  color: "var(--teal-900)",
                  background: "var(--cream-50)",
                  cursor: "pointer",
                  transition: "all .15s ease",
                  fontSize: 16,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--teal-900)";
                  (e.currentTarget as HTMLElement).style.color = "var(--cream-50)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--teal-900)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--cream-50)";
                  (e.currentTarget as HTMLElement).style.color = "var(--teal-900)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
                }}
              >
                {label as string}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .th-sec-head { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
