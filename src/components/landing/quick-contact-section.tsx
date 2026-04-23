"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";

const CONTACT_PHONE = "0781685556";
const CONTACT_PHONE_FORMATTED = "07 81 68 55 56";
const CONTACT_EMAIL = "ajithanmoorthy@outlook.fr";
const WHATSAPP_NUMBER = "33781685556";

const channels = [
  {
    icon: Phone,
    label: "Appel téléphonique",
    value: CONTACT_PHONE_FORMATTED,
    sub: "Lun – Sam · 9h – 19h",
    color: "#2f6a77",
    href: `tel:${CONTACT_PHONE}`,
    cta: "Appeler maintenant",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT_PHONE_FORMATTED,
    sub: "Réponse sous 30 min",
    color: "#2d7d5a",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    cta: "Ouvrir WhatsApp",
    newTab: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    sub: "Réponse sous 24h",
    color: "#846599",
    href: `mailto:${CONTACT_EMAIL}`,
    cta: "Nous écrire",
  },
];

export function QuickContactSection() {
  return (
    <section
      id="quick-contact"
      style={{
        padding: "120px 0",
        background: "var(--cream-50)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 72,
            marginBottom: 64,
          }}
          className="th-sec-head"
        >
          <div className="eyebrow">— Contact direct</div>
          <div>
            <h2>
              Une question ?{" "}
              <em
                style={{
                  fontFamily: "'PT Sans', serif",
                  color: "var(--violet-600)",
                  fontStyle: "italic",
                }}
              >
                Parlons-nous.
              </em>
            </h2>
            <p
              style={{
                color: "var(--ink-500)",
                fontSize: 17,
                lineHeight: 1.55,
                marginTop: 12,
                maxWidth: "52ch",
              }}
            >
              Pas besoin de remplir un formulaire. Si vous souhaitez juste
              en savoir plus, notre équipe est disponible par téléphone,
              WhatsApp ou email — sans engagement.
            </p>
          </div>
        </div>

        {/* Channel cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="th-qc-grid"
        >
          {channels.map(({ icon: Icon, label, value, sub, color, href, cta, newTab }) => (
            <a
              key={label}
              href={href}
              target={newTab ? "_blank" : undefined}
              rel={newTab ? "noopener noreferrer" : undefined}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                padding: "32px 28px",
                borderRadius: 14,
                border: "1px solid var(--line)",
                background: "white",
                textDecoration: "none",
                transition: "box-shadow .2s ease, transform .2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 40px -10px rgba(26,58,67,0.18)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: `${color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={24} style={{ color }} />
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div
                  className="eyebrow"
                  style={{ color: "var(--ink-300)", marginBottom: 6 }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 500,
                    fontSize: 17,
                    color: "var(--teal-900)",
                    wordBreak: "break-all",
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--ink-500)",
                    marginTop: 4,
                  }}
                >
                  {sub}
                </div>
              </div>

              {/* CTA */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "11px 18px",
                  borderRadius: 999,
                  background: color,
                  color: "white",
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 500,
                  fontSize: 14,
                  alignSelf: "flex-start",
                }}
              >
                <Icon size={15} />
                {cta}
              </div>
            </a>
          ))}
        </div>

        {/* Trust bar */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 32px",
            justifyContent: "center",
          }}
        >
          {[
            "Gratuit et sans engagement",
            "Aucune pression commerciale",
            "Réponse rapide garantie",
          ].map((item) => (
            <span
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "var(--ink-500)",
                fontFamily: "var(--font-jetbrains-mono)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--green-600)",
                  flexShrink: 0,
                }}
              />
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .th-sec-head { grid-template-columns: 1fr !important; gap: 20px !important; }
          .th-qc-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .th-qc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
