"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Qu'est-ce que l'exploitation professionnelle de biens avec Trusthome ?",
    a: "Trusthome devient votre locataire direct. Nous signons un bail avec vous, nous prenons en charge l'exploitation du bien (ménage, maintenance, embellissements), et vous versons un loyer garanti chaque mois, que le bien soit occupé ou non.",
  },
  {
    q: "Mon loyer est-il garanti même si le bien n'est pas occupé ?",
    a: "Oui. C'est la promesse fondamentale de Trusthome. Votre loyer est versé le 5 de chaque mois, indépendamment du taux d'occupation du bien. La gestion de la vacance est entièrement de notre ressort.",
  },
  {
    q: "Qui s'occupe de l'entretien et des réparations ?",
    a: "Trusthome prend en charge l'entretien courant, les petites réparations, les nettoyages professionnels et les embellissements réguliers. Vous n'avez pas à intervenir ni à gérer de prestataires. Un seul interlocuteur, zéro charge mentale.",
  },
  {
    q: "Quels sont les frais avec Trusthome ?",
    a: "Aucuns frais d'agence, aucune GLI. Vous signez directement avec Trusthome. Notre modèle économique repose sur l'exploitation locative du bien, pas sur des commissions prélevées sur votre loyer.",
  },
  {
    q: "Quelle est la durée typique d'un contrat ?",
    a: "Nos contrats sont généralement signés pour 1 à 3 ans, avec des clauses de sortie négociées en amont pour les deux parties. Chaque contrat est rédigé par nos avocats et adapté à votre situation.",
  },
  {
    q: "Comment Trusthome me protège-t-il du risque de squatteurs ?",
    a: "En tant que locataire professionnel, Trusthome ne présente aucun risque de squat. Notre statut juridique et nos garanties bancaires vous offrent une sécurité que n'offre pas un locataire particulier.",
  },
  {
    q: "Trusthome peut-il m'aider à obtenir un prêt bancaire ?",
    a: "Oui. Nos baux sécurisés sont reconnus par les banques partenaires, qui retiennent généralement 95 à 100% de vos revenus locatifs dans votre capacité d'emprunt. C'est un levier significatif pour financer vos investissements futurs.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
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
            marginBottom: 56,
          }}
          className="th-sec-head"
        >
          <div className="eyebrow">— FAQ</div>
          <div>
            <h2>Questions fréquentes.</h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 72,
            alignItems: "start",
          }}
          className="th-faq-grid"
        >
          {/* Illustration */}
          <div>
            <div
              className="plh plh-violet"
              style={{ aspectRatio: "4/5", minHeight: 0 }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  padding: "10px 12px",
                  color: "var(--teal-900)",
                  background: "rgba(250,247,242,0.82)",
                  borderTopRightRadius: 8,
                }}
              >
                illustration · sérénité
              </span>
            </div>
          </div>

          {/* Accordion */}
          <div
            style={{
              borderTop: "1px solid var(--line)",
            }}
          >
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{ borderBottom: "1px solid var(--line)" }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "22px 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 20,
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: 19,
                      fontWeight: 500,
                      color: isOpen ? "var(--violet-600)" : "var(--teal-900)",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      transition: "color .15s ease",
                    }}
                  >
                    <span>{faq.q}</span>
                    <span
                      style={{
                        fontSize: 28,
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 300,
                        color: "var(--violet-600)",
                        transition: "transform .3s ease",
                        transform: isOpen ? "rotate(45deg)" : "none",
                        flexShrink: 0,
                        lineHeight: 1,
                        display: "inline-block",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? 400 : 0,
                      overflow: "hidden",
                      transition: "max-height .35s ease",
                    }}
                  >
                    <div
                      style={{
                        padding: "0 0 24px",
                        color: "var(--ink-500)",
                        fontSize: 15,
                        lineHeight: 1.6,
                        maxWidth: "62ch",
                      }}
                    >
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .th-faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .th-sec-head { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
