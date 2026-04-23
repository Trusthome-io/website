"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export function HeroSection() {
  const [amount, setAmount] = useState(2340);

  useEffect(() => {
    const id = setInterval(() => {
      setAmount((a) => {
        const diff = 2340 - a;
        if (Math.abs(diff) < 1) return 2340;
        return a + diff * 0.1;
      });
    }, 50);
    return () => clearInterval(id);
  }, []);

  const fmt = (n: number) =>
    Math.round(n)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");

  return (
    <section
      style={{
        paddingTop: 80,
        paddingBottom: 60,
        background: "var(--cream-50)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
        <div className="eyebrow">— Pour propriétaires en Île-de-France</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr 1fr",
            gap: 72,
            alignItems: "end",
            marginTop: 22,
          }}
          className="th-hero-grid"
        >
          {/* Left column */}
          <div>
            <h1 style={{ margin: 0 }}>
              <span style={{ display: "block" }}>Un loyer</span>
              <span style={{ display: "block" }}>
                <span
                  className="squiggle"
                  style={{
                    color: "var(--violet-600)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontFamily: "'PT Sans', serif",
                  }}
                >
                  garanti
                </span>
                ,
              </span>
              <span style={{ display: "block" }}>chaque 5 du mois.</span>
            </h1>

            <p
              style={{
                maxWidth: 520,
                color: "var(--ink-700)",
                fontSize: 18,
                marginTop: 28,
                lineHeight: 1.55,
              }}
            >
              Trusthome devient votre locataire longue durée. Nous prenons en
              charge l&apos;entretien, les imprévus, et les mauvaises surprises.
              Vous encaissez votre loyer — même les mois où le bien est vacant.
            </p>

            <div
              style={{
                marginTop: 36,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href="#estimator"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 22px",
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 500,
                  fontSize: 15,
                  borderRadius: 999,
                  background: "var(--violet-600)",
                  color: "white",
                  textDecoration: "none",
                  transition: "transform .15s ease, background .15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--violet-700)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--violet-600)";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                Estimer mon loyer garanti →
              </a>
              <a
                href="#process"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 22px",
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 500,
                  fontSize: 15,
                  borderRadius: 999,
                  background: "transparent",
                  color: "var(--teal-900)",
                  border: "1px solid var(--teal-900)",
                  textDecoration: "none",
                  transition: "all .15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--teal-900)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--cream-50)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--teal-900)";
                }}
              >
                Comment ça marche
              </a>
            </div>
          </div>

          {/* Payout card */}
          <div>
            {/* Property photo preview */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 200,
                borderRadius: 16,
                overflow: "hidden",
                marginBottom: 16,
              }}
            >
              <Image
                src="/img/masterbedroom2.jpg"
                alt="Bien géré par Trusthome — chambre principale"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 980px) 100vw, 50vw"
                priority
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(26,58,67,0.45) 0%, transparent 50%)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: 12,
                  left: 14,
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                T2 · Levallois-Perret 92 · Bien géré par Trusthome
              </span>
            </div>

            <div
              style={{
                background: "var(--teal-900)",
                color: "var(--cream-50)",
                borderRadius: 20,
                padding: 28,
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 40px 80px -30px rgba(26,58,67,0.5)",
              }}
            >
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(600px 200px at 100% 0%, rgba(132,101,153,0.35), transparent 60%), radial-gradient(400px 300px at 0% 100%, rgba(70,132,153,0.4), transparent 60%)",
                  pointerEvents: "none",
                }}
              />

              {/* Header row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: 11,
                  color: "var(--teal-300)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <span>Virement · Loyer mensuel</span>
                <span
                  style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#8fdc9d",
                      boxShadow: "0 0 0 4px rgba(143,220,157,0.15)",
                      animation: "pulse 2s ease-in-out infinite",
                      display: "inline-block",
                    }}
                  />
                  Programmé
                </span>
              </div>

              {/* Amount */}
              <div
                style={{
                  position: "relative",
                  marginTop: 18,
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 500,
                  fontSize: 68,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: "white",
                  display: "flex",
                  alignItems: "baseline",
                  gap: 4,
                }}
              >
                <span>{fmt(amount)}</span>
                <span style={{ fontSize: 32, color: "var(--teal-300)" }}>€</span>
              </div>

              <div
                style={{
                  position: "relative",
                  color: "var(--teal-300)",
                  marginTop: 6,
                  fontSize: 14,
                }}
              >
                Versé le 5 du mois · T2, Levallois-Perret 92
              </div>

              {/* Timeline bars */}
              <div
                style={{
                  position: "relative",
                  marginTop: 24,
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                  gap: 6,
                }}
              >
                {months.map((m, i) => {
                  const isPaid = i < 9;
                  const isCurrent = i === 9;
                  return (
                    <div
                      key={i}
                      style={{
                        height: 34,
                        borderRadius: 6,
                        background: isPaid
                          ? "linear-gradient(180deg, var(--violet-600), var(--violet-700))"
                          : isCurrent
                          ? "linear-gradient(180deg, #8fdc9d, #2d7d5a)"
                          : "rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        paddingBottom: 5,
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: 10,
                        color: isPaid
                          ? "white"
                          : isCurrent
                          ? "#0a1a14"
                          : "var(--teal-300)",
                      }}
                    >
                      {m}
                    </div>
                  );
                })}
              </div>

              {/* Footer row */}
              <div
                style={{
                  position: "relative",
                  marginTop: 22,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 12,
                  color: "var(--teal-300)",
                  fontFamily: "var(--font-jetbrains-mono)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                <span>12 mois · 0 retard</span>
                <span>28 080 € versés</span>
              </div>
            </div>
          </div>
        </div>

        {/* Meta bar */}
        <div
          style={{
            marginTop: 72,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
          className="th-meta-grid"
        >
          {[
            ["100%", "Loyer garanti mensuel"],
            ["0 €", "Frais d'agence ou GLI"],
            ["1–3 ans", "Contrat flexible"],
            ["48h", "Réponse à votre dossier"],
          ].map(([k, v], i) => (
            <div
              key={v}
              style={{
                padding: "20px 24px 20px 0",
                borderRight: i < 3 ? "1px solid var(--line)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 28,
                  fontWeight: 500,
                  color: "var(--teal-900)",
                  letterSpacing: "-0.02em",
                }}
              >
                {k}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--ink-500)",
                  marginTop: 2,
                  fontFamily: "var(--font-jetbrains-mono)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .th-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 720px) {
          .th-meta-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
