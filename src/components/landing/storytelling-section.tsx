import Image from "next/image";

export function StorytellingSection() {
  const before = [
    "Retards de paiement et impayés récurrents — coût moyen 6 mois de loyer.",
    "Vacance locative entre deux baux, agence à 8% commissions comprises.",
    "Dégradations, rendu en mauvais état, remise en peinture à chaque rotation.",
    "Risque squatteur, préavis rigides, charge administrative constante.",
  ];
  const after = [
    "Loyer versé le 5 du mois — même si le bien est temporairement vide.",
    "Zéro frais d'agence, zéro GLI. Un bail direct, un seul signataire.",
    "Entretien professionnel, embellissements compris. Le bien se valorise.",
    "Un contrat flexible rédigé par des avocats, avec clauses de sortie.",
  ];

  const images = [
    { src: "/img/salon.jpg", alt: "Salon lumineux — bien géré par Trusthome", label: "salon · lumière naturelle" },
    { src: "/img/cuisine.jpg", alt: "Cuisine équipée — bien géré par Trusthome", label: "cuisine équipée" },
    { src: "/img/douche.jpg", alt: "Salle de bain — bien géré par Trusthome", label: "salle de bain" },
    { src: "/img/masterbedroom.jpg", alt: "Chambre principale — bien géré par Trusthome", label: "chambre principale" },
  ];

  return (
    <section
      id="story"
      style={{
        padding: "120px 0",
        background: "var(--cream-100)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
        {/* Section header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 72,
            marginBottom: 56,
          }}
          className="th-sec-head"
        >
          <div className="eyebrow">— Le problème</div>
          <div>
            <h2>
              La location classique,{" "}
              <em
                style={{
                  fontFamily: "'PT Sans', serif",
                  color: "var(--violet-600)",
                  fontStyle: "italic",
                }}
              >
                entre promesse et cauchemar.
              </em>
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
          className="th-story-grid"
        >
          {/* Before/After cards */}
          <div>
            {/* Before */}
            <div
              style={{
                padding: 32,
                background: "var(--cream-100)",
                borderRadius: 12,
                border: "1px solid var(--cream-200)",
              }}
            >
              <h4
                style={{
                  color: "var(--red-600)",
                  fontFamily: "var(--font-jetbrains-mono)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: 12,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Avec un locataire classique
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0" }}>
                {before.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 14,
                      padding: "14px 0",
                      borderTop: "1px dashed var(--cream-200)",
                      color: "var(--ink-700)",
                      fontSize: 15,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--red-600)",
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: 18,
                        width: 20,
                        flexShrink: 0,
                      }}
                    >
                      ×
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div
              style={{
                marginTop: 20,
                padding: 32,
                background: "var(--teal-900)",
                color: "var(--cream-50)",
                borderRadius: 12,
              }}
            >
              <h4
                style={{
                  color: "var(--teal-300)",
                  fontFamily: "var(--font-jetbrains-mono)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: 12,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Avec Trusthome comme locataire
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0" }}>
                {after.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 14,
                      padding: "14px 0",
                      borderTop: "1px dashed rgba(168, 205, 213, 0.25)",
                      fontSize: 15,
                    }}
                  >
                    <span
                      style={{
                        color: "#8fdc9d",
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: 16,
                        width: 20,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image grid */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            {images.map((img, i) => (
              <div
                key={img.src}
                style={{
                  position: "relative",
                  minHeight: i === 0 || i === 3 ? 280 : 200,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(26,58,67,0.4) 0%, transparent 45%)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 12,
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.82)",
                  }}
                >
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .th-sec-head { grid-template-columns: 1fr !important; gap: 20px !important; }
          .th-story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
