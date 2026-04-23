"use client";

export function Footer() {
  const cols = [
    {
      title: "Produit",
      links: [
        ["Comment ça marche", "#process"],
        ["Estimer mon loyer", "#estimator"],
        ["Comparer", "#compare"],
        ["Outil de confiance", "#ai"],
      ],
    },
    {
      title: "Société",
      links: [
        ["À propos", "#"],
        ["Presse", "#"],
        ["Nous rejoindre", "#"],
        ["Contact", "#contact"],
      ],
    },
    {
      title: "Légal",
      links: [
        ["Mentions légales", "#"],
        ["Politique de confidentialité", "#"],
        ["CGU", "#"],
      ],
    },
  ];

  return (
    <footer
      style={{
        background: "var(--teal-900)",
        color: "var(--cream-100)",
        padding: "80px 0 40px",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 40,
          }}
          className="th-foot-grid"
        >
          {/* Brand col */}
          <div>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                fontSize: 18,
                color: "white",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 7,
                  background:
                    "linear-gradient(135deg, var(--teal-600) 0%, var(--teal-600) 50%, var(--violet-600) 50%, var(--violet-600) 100%)",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 6,
                    borderRadius: 3,
                    background: "var(--cream-50)",
                    display: "block",
                  }}
                />
              </span>
              <span>Trusthome</span>
            </a>
            <p
              style={{
                marginTop: 18,
                fontSize: 14,
                maxWidth: "36ch",
                color: "var(--teal-300)",
                lineHeight: 1.55,
              }}
            >
              Le locataire qui vous verse un loyer garanti, entretient votre
              bien, et vous laisse dormir.
            </p>
            <p
              style={{
                marginTop: 16,
                fontSize: 12,
                color: "var(--teal-500)",
                fontFamily: "var(--font-jetbrains-mono)",
              }}
            >
              Clichy · Hauts-de-Seine
            </p>
            <p
              style={{
                marginTop: 4,
                fontSize: 12,
                color: "var(--teal-500)",
                fontFamily: "var(--font-jetbrains-mono)",
              }}
            >
              ajithanmoorthy@outlook.fr
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h5
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--teal-300)",
                  fontWeight: 500,
                  marginBottom: 16,
                }}
              >
                {col.title}
              </h5>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  fontSize: 14,
                }}
              >
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      style={{
                        color: "var(--cream-100)",
                        textDecoration: "none",
                        transition: "color .15s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "white")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "var(--cream-100)")
                      }
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 60,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "var(--teal-300)",
            fontFamily: "var(--font-jetbrains-mono)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>© 2026 Trusthome SAS · Clichy</span>
          <span>Fait avec soin en Île-de-France</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .th-foot-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .th-foot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
