export function ValuesSection() {
  const values = [
    {
      num: "01",
      title: "Loyer garanti",
      body: "Versé à date fixe, même si le bien est vacant. Aucune GLI à payer, aucun impayé à redouter.",
    },
    {
      num: "02",
      title: "Zéro tracas",
      body: "Nous gérons l'entretien, les petites réparations, les embellissements. Un seul interlocuteur.",
    },
    {
      num: "03",
      title: "Votre bien valorisé",
      body: "Nettoyages professionnels réguliers, maintenance proactive. Votre bien se bonifie, il ne s'use pas.",
    },
    {
      num: "04",
      title: "Levier bancaire",
      body: "Nos baux solides sont reconnus par les banques pour financer vos investissements futurs.",
    },
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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
          className="th-values-grid"
        >
          {values.map((v, i) => (
            <div
              key={v.num}
              style={{
                padding: "36px 28px 36px 0",
                borderRight: i < 3 ? "1px solid var(--line)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "var(--violet-600)",
                  textTransform: "uppercase",
                }}
              >
                {v.num}
              </div>
              <h3 style={{ marginTop: 18 }}>{v.title}</h3>
              <p
                style={{
                  color: "var(--ink-500)",
                  marginTop: 10,
                  fontSize: 15,
                  lineHeight: 1.55,
                  maxWidth: "28ch",
                }}
              >
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .th-values-grid { grid-template-columns: 1fr 1fr !important; }
          .th-values-grid > div:nth-child(2) { border-right: none !important; }
        }
        @media (max-width: 560px) {
          .th-values-grid { grid-template-columns: 1fr !important; }
          .th-values-grid > div { border-right: none !important; border-bottom: 1px solid var(--line) !important; }
          .th-values-grid > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
