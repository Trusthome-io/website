"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "Étape 01",
    title: "Soumission du bien",
    body: "Remplissez notre formulaire en ligne : adresse, surface, photos. 3 minutes, pas plus.",
  },
  {
    num: "Étape 02",
    title: "Visite & inspection",
    body: "Un chargé d'exploitation visite le bien, évalue son potentiel, comprend ses spécificités.",
  },
  {
    num: "Étape 03",
    title: "Évaluation & proposition",
    body: "Sous 48h, vous recevez une proposition de loyer garanti transparente, sans engagement.",
  },
  {
    num: "Étape 04",
    title: "Signature du bail",
    body: "Un contrat rédigé par avocats, 1–3 ans, avec clauses de sortie. Trusthome devient votre locataire.",
  },
  {
    num: "Étape 05",
    title: "Prise en charge intégrale",
    body: "Nettoyages, embellissements, maintenance préventive — nous traitons le bien comme le nôtre.",
  },
  {
    num: "Étape 06",
    title: "Encaissez sereinement",
    body: "Le 5 de chaque mois, votre loyer arrive. Chaque mois. Sans exception.",
  },
];

const scenes = [
  <svg key={0} viewBox="0 0 300 200" aria-hidden="true" style={{ width: "min(80%, 360px)", height: "auto" }}>
    <rect x="20" y="40" width="260" height="130" rx="10" fill="none" stroke="#68a3b3" strokeWidth="1.5"/>
    <rect x="36" y="60" width="120" height="10" rx="2" fill="#68a3b3"/>
    <rect x="36" y="80" width="228" height="24" rx="4" fill="#2f6a77"/>
    <rect x="36" y="112" width="228" height="24" rx="4" fill="#2f6a77"/>
    <rect x="36" y="144" width="120" height="12" rx="2" fill="#846599"/>
  </svg>,
  <svg key={1} viewBox="0 0 300 200" aria-hidden="true" style={{ width: "min(80%, 360px)", height: "auto" }}>
    <path d="M60 140 L60 90 L150 40 L240 90 L240 140 Z" fill="none" stroke="#68a3b3" strokeWidth="1.5"/>
    <rect x="85" y="100" width="40" height="40" fill="#2f6a77"/>
    <rect x="175" y="100" width="40" height="40" fill="#2f6a77"/>
    <circle cx="240" cy="50" r="18" fill="#846599" fillOpacity="0.3" stroke="#846599" strokeWidth="1.5"/>
    <path d="M235 50 L242 56 L249 46" stroke="#846599" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key={2} viewBox="0 0 300 200" aria-hidden="true" style={{ width: "min(80%, 360px)", height: "auto" }}>
    <rect x="30" y="40" width="240" height="120" rx="8" fill="none" stroke="#68a3b3" strokeWidth="1.5"/>
    <text x="50" y="80" fontFamily="JetBrains Mono" fontSize="12" fill="#a8cdd5">Loyer garanti</text>
    <text x="50" y="120" fontFamily="Space Grotesk" fontSize="34" fontWeight="500" fill="#fff">2 340 €</text>
    <text x="50" y="145" fontFamily="JetBrains Mono" fontSize="10" fill="#846599">/ mois · 36 mois</text>
  </svg>,
  <svg key={3} viewBox="0 0 300 200" aria-hidden="true" style={{ width: "min(80%, 360px)", height: "auto" }}>
    <rect x="50" y="30" width="200" height="150" rx="6" fill="none" stroke="#68a3b3" strokeWidth="1.5"/>
    <rect x="70" y="50" width="100" height="6" fill="#a8cdd5"/>
    <rect x="70" y="66" width="160" height="4" fill="#68a3b3" opacity="0.5"/>
    <rect x="70" y="76" width="140" height="4" fill="#68a3b3" opacity="0.5"/>
    <rect x="70" y="86" width="150" height="4" fill="#68a3b3" opacity="0.5"/>
    <path d="M70 140 Q90 130, 110 140 T150 140" stroke="#846599" strokeWidth="2" fill="none"/>
    <circle cx="155" cy="140" r="3" fill="#846599"/>
  </svg>,
  <svg key={4} viewBox="0 0 300 200" aria-hidden="true" style={{ width: "min(80%, 360px)", height: "auto" }}>
    <circle cx="90" cy="100" r="32" fill="none" stroke="#68a3b3" strokeWidth="1.5"/>
    <path d="M78 100 L88 110 L104 92" stroke="#8fdc9d" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="150" y="70" width="120" height="8" rx="2" fill="#846599"/>
    <rect x="150" y="90" width="100" height="6" rx="2" fill="#68a3b3"/>
    <rect x="150" y="106" width="90" height="6" rx="2" fill="#68a3b3"/>
    <rect x="150" y="122" width="110" height="6" rx="2" fill="#68a3b3"/>
  </svg>,
  <svg key={5} viewBox="0 0 300 200" aria-hidden="true" style={{ width: "min(80%, 360px)", height: "auto" }}>
    <rect x="30" y="60" width="240" height="90" rx="8" fill="#846599" fillOpacity="0.3" stroke="#846599" strokeWidth="1.5"/>
    <text x="50" y="100" fontFamily="JetBrains Mono" fontSize="10" fill="#a8cdd5">05 / MOIS · VIREMENT REÇU</text>
    <text x="50" y="132" fontFamily="Space Grotesk" fontSize="28" fontWeight="500" fill="#fff">+2 340 €</text>
  </svg>,
];

export function ProcessSection() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { threshold: 0.6 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section
      id="process"
      style={{
        padding: "120px 0",
        borderTop: "1px solid var(--line)",
        background: "var(--cream-50)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 72,
            marginBottom: 56,
          }}
          className="th-sec-head"
        >
          <div className="eyebrow">— Comment ça marche</div>
          <div>
            <h2>Six étapes, de la soumission à votre premier loyer.</h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "start",
          }}
          className="th-process-layout"
        >
          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                style={{
                  position: "relative",
                  padding: "28px 0 28px 48px",
                  borderTop: "1px solid var(--line)",
                  borderBottom: i === steps.length - 1 ? "1px solid var(--line)" : "none",
                  transition: "opacity .3s ease",
                  opacity: active === i ? 1 : 0.45,
                }}
                onClick={() => setActive(i)}
              >
                {/* Dot */}
                <span
                  style={{
                    position: "absolute",
                    left: 10,
                    top: 38,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: active === i ? "var(--violet-600)" : "var(--cream-100)",
                    border: active === i ? "1px solid var(--violet-600)" : "1px solid var(--line)",
                    transition: "background .3s ease, border-color .3s ease, transform .3s ease",
                    transform: active === i ? "scale(1.3)" : "scale(1)",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: 11,
                    color: "var(--violet-600)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ marginTop: 10, fontSize: 22 }}>{step.title}</h3>
                <p
                  style={{
                    color: "var(--ink-500)",
                    marginTop: 8,
                    fontSize: 15,
                    maxWidth: "52ch",
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* Visual card */}
          <div
            style={{
              position: "sticky",
              top: 100,
              aspectRatio: "4 / 5",
              borderRadius: 20,
              background: "var(--teal-900)",
              color: "var(--cream-50)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 32,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--teal-300)",
              }}
            >
              <span>Trusthome · Flux propriétaire</span>
              <span>
                {String(active + 1).padStart(2, "0")} / 06
              </span>
            </div>

            {/* Scenes */}
            <div
              style={{
                position: "relative",
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px 0",
              }}
            >
              {scenes.map((scene, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: active === i ? 1 : 0,
                    transform: active === i ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity .45s ease, transform .45s ease",
                  }}
                >
                  {scene}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 500,
                  fontSize: 24,
                  letterSpacing: "-0.015em",
                  color: "white",
                  maxWidth: "24ch",
                }}
              >
                {steps[active].title}
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                {steps.map((_, i) => (
                  <span
                    key={i}
                    style={{
                      width: 20,
                      height: 3,
                      borderRadius: 999,
                      background: active === i ? "var(--violet-600)" : "rgba(255,255,255,0.15)",
                      transition: "background .3s ease",
                      display: "block",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .th-process-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
          .th-sec-head { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
