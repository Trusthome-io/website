"use client";

import { useState } from "react";

const tabs = [
  {
    label: "Stabilité financière",
    left: {
      title: "Location classique",
      body: "Risque d'impayés, frais d'agence (5–10%), GLI (2–4%). Vacance locative moyenne de 3 semaines par rotation.",
      metric: "– 12%",
      metricLabel: "/ rendement annuel",
    },
    right: {
      title: "Avec Trusthome",
      body: "Loyer garanti à date fixe, versé même si le bien est vacant. Zéro frais d'agence, zéro GLI. Un bail direct.",
      metric: "+0%",
      metricLabel: "de perte · prévisible",
    },
  },
  {
    label: "Sécurité juridique",
    left: {
      title: "Location classique",
      body: "Risque de squatteur, bail rigide, préavis de 6 mois, procédures d'expulsion pouvant durer 2 ans.",
      metric: "24",
      metricLabel: "mois max · recours",
    },
    right: {
      title: "Avec Trusthome",
      body: "Aucun risque de squatteur. Contrat flexible 1–3+ ans avec clauses de sortie négociées en amont.",
      metric: "0",
      metricLabel: "risque de squat",
    },
  },
  {
    label: "Entretien du bien",
    left: {
      title: "Location classique",
      body: "Bien rendu avec usure marquée. Remise en peinture 1 500–3 000€, nettoyage en fin de bail, réparations à votre charge.",
      metric: "3 000 €",
      metricLabel: "/ rotation",
    },
    right: {
      title: "Avec Trusthome",
      body: "Nettoyages professionnels plusieurs fois par semaine, embellissements réguliers, maintenance proactive.",
      metric: "0 €",
      metricLabel: "à votre charge",
    },
  },
  {
    label: "Charge mentale",
    left: {
      title: "Location classique",
      body: "Sollicitations imprévues, relations locataires complexes, états des lieux, attestations d'assurance, régularisations de charges.",
      metric: "~12h",
      metricLabel: "/ mois en moyenne",
    },
    right: {
      title: "Avec Trusthome",
      body: "Un seul interlocuteur dédié, reporting trimestriel, et votre temps qui redevient vôtre.",
      metric: "~0h",
      metricLabel: "/ mois",
    },
  },
  {
    label: "Levier bancaire",
    left: {
      title: "Location classique",
      body: "Revenus locatifs souvent pondérés à 70% par les banques, preuves de stabilité demandées sur 2 ans.",
      metric: "×0.7",
      metricLabel: "revenus retenus",
    },
    right: {
      title: "Avec Trusthome",
      body: "Bail solide, revenus garantis. Les banques partenaires retiennent 95–100% des loyers dans votre capacité d'emprunt.",
      metric: "×1.0",
      metricLabel: "revenus retenus",
    },
  },
];

export function ComparisonSection() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section
      id="compare"
      style={{
        padding: "120px 0",
        background: "var(--cream-100)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 72,
            marginBottom: 28,
          }}
          className="th-sec-head"
        >
          <div className="eyebrow">— Comparer</div>
          <div>
            <h2>
              Location classique, ou Trusthome comme locataire ?
            </h2>
            <p
              style={{
                color: "var(--ink-500)",
                maxWidth: "58ch",
                fontSize: 17,
                lineHeight: 1.5,
                marginTop: 12,
              }}
            >
              Passez la souris sur chaque critère pour voir la différence
              concrète, chiffres à l&apos;appui.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            borderBottom: "1px solid var(--line)",
            paddingBottom: 0,
            marginTop: 28,
          }}
        >
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              style={{
                padding: "12px 14px",
                fontSize: 13,
                color: active === i ? "var(--teal-900)" : "var(--ink-500)",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 500,
                borderBottom: active === i
                  ? "2px solid var(--violet-600)"
                  : "2px solid transparent",
                marginBottom: -1,
                whiteSpace: "nowrap",
                background: "transparent",
                border: "none",
                borderBottomWidth: 2,
                borderBottomStyle: "solid",
                borderBottomColor: active === i ? "var(--violet-600)" : "transparent",
                cursor: "pointer",
                transition: "color .15s ease",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Body */}
        <div style={{ marginTop: 28 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              border: "1px solid var(--line)",
              borderRadius: 12,
              overflow: "hidden",
            }}
            className="th-comp-body"
          >
            {/* Classic */}
            <div style={{ padding: 28, background: "var(--cream-100)" }}>
              <h4
                style={{
                  fontSize: 14,
                  fontFamily: "var(--font-jetbrains-mono)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 500,
                  color: "var(--red-600)",
                  margin: 0,
                }}
              >
                {tab.left.title}
              </h4>
              <p
                style={{
                  marginTop: 14,
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "var(--ink-700)",
                }}
              >
                {tab.left.body}
              </p>
              <div
                style={{
                  marginTop: 20,
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 34,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "var(--red-600)",
                }}
              >
                {tab.left.metric}{" "}
                <span
                  style={{
                    fontSize: 14,
                    color: "var(--ink-500)",
                    fontFamily: "var(--font-jetbrains-mono)",
                  }}
                >
                  {tab.left.metricLabel}
                </span>
              </div>
            </div>

            {/* Trusthome */}
            <div
              style={{
                padding: 28,
                background: "var(--teal-900)",
                color: "var(--cream-50)",
              }}
            >
              <h4
                style={{
                  fontSize: 14,
                  fontFamily: "var(--font-jetbrains-mono)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 500,
                  color: "#8fdc9d",
                  margin: 0,
                }}
              >
                {tab.right.title}
              </h4>
              <p
                style={{
                  marginTop: 14,
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "var(--cream-100)",
                }}
              >
                {tab.right.body}
              </p>
              <div
                style={{
                  marginTop: 20,
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 34,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "#8fdc9d",
                }}
              >
                {tab.right.metric}{" "}
                <span
                  style={{
                    fontSize: 14,
                    color: "var(--teal-300)",
                    fontFamily: "var(--font-jetbrains-mono)",
                  }}
                >
                  {tab.right.metricLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .th-comp-body { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .th-sec-head { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
