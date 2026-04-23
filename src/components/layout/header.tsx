"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [lang, setLang] = useState<"FR" | "EN">("FR");

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(250, 247, 242, 0.82)",
        backdropFilter: "saturate(1.2) blur(12px)",
        WebkitBackdropFilter: "saturate(1.2) blur(12px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <Link
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            fontSize: 18,
            color: "var(--teal-900)",
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
        </Link>

        <div
          className="th-nav-links"
          style={{
            display: "flex",
            gap: 28,
            alignItems: "center",
            fontSize: 14,
            color: "var(--ink-700)",
          }}
        >
          {(
            [
              ["Pourquoi", "#story"],
              ["Comment", "#process"],
              ["Loyer estimé", "#estimator"],
              ["Comparer", "#compare"],
              ["FAQ", "#faq"],
            ] as const
          ).map(([label, href]) => (
            <a
              key={href}
              href={href}
              style={{ transition: "color .15s ease", color: "var(--ink-700)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--teal-600)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--ink-700)")
              }
            >
              {label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div
            style={{
              display: "inline-flex",
              background: "var(--cream-200)",
              borderRadius: 999,
              padding: 3,
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {(["FR", "EN"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: "5px 10px",
                  borderRadius: 999,
                  background: lang === l ? "var(--teal-900)" : "transparent",
                  color: lang === l ? "var(--cream-50)" : "var(--ink-700)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all .15s ease",
                }}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "9px 14px",
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 500,
              fontSize: 13,
              borderRadius: 999,
              background: "var(--teal-900)",
              color: "var(--cream-50)",
              whiteSpace: "nowrap",
              transition: "transform .15s ease, background .15s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--ink-900)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--teal-900)";
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            Nous contacter
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .th-nav-links { display: none !important; }
        }
        @media (max-width: 480px) {
          .th-header-wrap { padding: 0 20px !important; }
        }
      `}</style>
    </nav>
  );
}
