"use client";

export function TrustLogosSection() {
  const logos = [
    "Les Échos",
    "BFM Immo",
    "FNAIM",
    "Cafpi",
    "PAP.fr",
    "SeLoger Pro",
  ];

  return (
    <section
      style={{
        padding: "40px 0",
        borderTop: "1px solid var(--line)",
        background: "var(--cream-50)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
        <div
          className="eyebrow"
          style={{ textAlign: "center", marginBottom: 28 }}
        >
          — Partenaires &amp; presse
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
          className="th-logos-grid"
        >
          {logos.map((logo, i) => (
            <div
              key={logo}
              style={{
                padding: "34px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRight: i < logos.length - 1 ? "1px solid var(--line)" : "none",
                color: "var(--ink-300)",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: 17,
                letterSpacing: "-0.01em",
                filter: "grayscale(100%)",
                opacity: 0.75,
                transition: "opacity .2s ease, color .2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.color = "var(--teal-700)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.75";
                (e.currentTarget as HTMLElement).style.color = "var(--ink-300)";
              }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .th-logos-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .th-logos-grid > div:nth-child(3) { border-right: none !important; }
          .th-logos-grid > div:nth-child(4),
          .th-logos-grid > div:nth-child(5),
          .th-logos-grid > div:nth-child(6) { border-top: 1px solid var(--line); }
          .th-logos-grid > div:nth-child(6) { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}
