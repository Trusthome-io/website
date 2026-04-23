"use client";

import { useState, useRef, useEffect } from "react";

type MessageType =
  | { kind: "ai" | "user"; text: string }
  | { kind: "typing" }
  | { kind: "score"; score: number }
  | { kind: "narrative"; text: string };

const INITIAL: MessageType = {
  kind: "ai",
  text: "Bonjour. Indiquez l'adresse de votre bien et je calcule en direct un score de confiance sur Trusthome comme votre locataire.",
};

const factors = [
  { label: "Solvabilité", val: "AAA · 94/100" },
  { label: "Performance quartier", val: "94% · 14 biens" },
  { label: "Adéquation", val: "Fort" },
  { label: "Garanties", val: "Complète" },
];

const features = [
  {
    num: "01",
    title: "Solvabilité & bilan",
    body: "Analyse des bilans Trusthome, trésorerie, garanties bancaires.",
  },
  {
    num: "02",
    title: "Historique du quartier",
    body: "Taux d'occupation Trusthome sur votre secteur, retours propriétaires.",
  },
  {
    num: "03",
    title: "Adéquation du bien",
    body: "Potentiel d'exploitation, demande réelle, compatibilité réglementaire.",
  },
  {
    num: "04",
    title: "Engagements contractuels",
    body: "Clauses de sortie, plafonds de responsabilité, garanties Trusthome.",
  },
];

export function AiConfidenceSection() {
  const [messages, setMessages] = useState<MessageType[]>([INITIAL]);
  const [input, setInput] = useState("");
  const [scoreBar, setScoreBar] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setInput("");

    const userMsg: MessageType = { kind: "user", text: trimmed };
    const typing: MessageType = { kind: "typing" };
    setMessages((m) => [...m, userMsg, typing]);

    const score = 88 + Math.floor(Math.random() * 10);

    setTimeout(() => {
      setMessages((m) => {
        const without = m.filter((msg) => msg.kind !== "typing");
        return [...without, { kind: "score", score }];
      });
      setTimeout(() => setScoreBar(score), 100);

      setTimeout(() => {
        setMessages((m) => [
          ...m,
          {
            kind: "narrative",
            text: `Score de confiance ${score}/100 · Trusthome présente une solvabilité AAA, un taux d'occupation de 94% sur votre secteur, et des garanties bancaires couvrant 24 mois de loyer. Nous recommandons ce bien pour un contrat de 2 ans.`,
          },
        ]);
      }, 800);
    }, 1400);
  }

  return (
    <section
      id="ai"
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
            marginBottom: 56,
          }}
          className="th-sec-head"
        >
          <div className="eyebrow">— Outil de confiance</div>
          <div>
            <h2>
              Un score de confiance sur{" "}
              <em
                style={{
                  fontFamily: "'PT Sans', serif",
                  color: "var(--violet-600)",
                  fontStyle: "italic",
                }}
              >
                notre
              </em>{" "}
              capacité à tenir l&apos;engagement.
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
              Avant de signer, notre IA évalue Trusthome comme locataire sur
              votre bien : solvabilité, historique du quartier, fiabilité du
              modèle. Transparence totale.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "start",
          }}
          className="th-ai-grid"
        >
          {/* Chat UI */}
          <div>
            <div
              style={{
                background: "var(--cream-50)",
                border: "1px solid var(--line)",
                borderRadius: 20,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                minHeight: 520,
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: "18px 22px",
                  borderBottom: "1px solid var(--line)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background:
                        "conic-gradient(from 210deg, var(--violet-600), var(--teal-600), var(--violet-600))",
                      animation: "orbspin 8s linear infinite",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 500,
                        fontSize: 15,
                        color: "var(--teal-900)",
                      }}
                    >
                      Trusthome · Confidence
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: 10,
                        color: "var(--ink-500)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Modèle · th-confidence-04
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setMessages([INITIAL]);
                    setScoreBar(0);
                  }}
                  style={{
                    padding: "9px 14px",
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 500,
                    fontSize: 13,
                    borderRadius: 999,
                    background: "transparent",
                    color: "var(--teal-900)",
                    border: "1px solid var(--teal-900)",
                    cursor: "pointer",
                  }}
                >
                  Réinitialiser
                </button>
              </div>

              {/* Messages */}
              <div
                ref={bodyRef}
                style={{
                  flex: 1,
                  padding: 20,
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {messages.map((msg, i) => {
                  if (msg.kind === "typing") {
                    return (
                      <div
                        key={i}
                        style={{
                          maxWidth: "85%",
                          padding: "14px 16px",
                          borderRadius: 16,
                          borderTopLeftRadius: 4,
                          background: "white",
                          border: "1px solid var(--line)",
                          alignSelf: "flex-start",
                          opacity: 0,
                          transform: "translateY(6px)",
                          animation: "bubIn .4s ease forwards",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            gap: 4,
                            padding: "4px 0",
                          }}
                        >
                          {[0, 1, 2].map((j) => (
                            <span
                              key={j}
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                background: "var(--ink-300)",
                                display: "inline-block",
                                animation: `typ 1s ease-in-out infinite`,
                                animationDelay: `${j * 0.15}s`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  }

                  if (msg.kind === "score") {
                    return (
                      <div
                        key={i}
                        style={{
                          alignSelf: "flex-start",
                          background: "linear-gradient(180deg, white, var(--violet-100))",
                          border: "1px solid var(--violet-300)",
                          borderTopLeftRadius: 4,
                          borderRadius: 16,
                          padding: 18,
                          width: "85%",
                          opacity: 0,
                          transform: "translateY(6px)",
                          animation: "bubIn .4s ease forwards",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--font-jetbrains-mono)",
                            fontSize: 10,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--violet-700)",
                          }}
                        >
                          Score de confiance Trusthome
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-space-grotesk)",
                            fontSize: 48,
                            fontWeight: 500,
                            color: "var(--teal-900)",
                            letterSpacing: "-0.02em",
                            lineHeight: 1,
                            marginTop: 6,
                          }}
                        >
                          {msg.score}
                          <span
                            style={{
                              fontSize: 20,
                              color: "var(--ink-500)",
                            }}
                          >
                            /100
                          </span>
                        </div>
                        <div
                          style={{
                            marginTop: 12,
                            height: 6,
                            borderRadius: 999,
                            background: "var(--cream-200)",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              background:
                                "linear-gradient(90deg, var(--teal-600), var(--violet-600))",
                              width: `${scoreBar}%`,
                              transition: "width 1.2s ease",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            marginTop: 14,
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            gap: 6,
                          }}
                        >
                          {factors.map((f) => (
                            <div
                              key={f.label}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: 13,
                                color: "var(--ink-700)",
                                fontFamily: "var(--font-jetbrains-mono)",
                              }}
                            >
                              <span>{f.label}</span>
                              <span style={{ color: "var(--teal-900)" }}>
                                {f.val}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  const isUser = msg.kind === "user";
                  return (
                    <div
                      key={i}
                      style={{
                        maxWidth: "85%",
                        padding: "14px 16px",
                        fontSize: 14.5,
                        lineHeight: 1.5,
                        borderRadius: 16,
                        borderTopLeftRadius: isUser ? 16 : 4,
                        borderTopRightRadius: isUser ? 4 : 16,
                        background: isUser ? "var(--teal-900)" : "white",
                        border: isUser ? "none" : "1px solid var(--line)",
                        color: isUser ? "white" : "var(--ink-900)",
                        alignSelf: isUser ? "flex-end" : "flex-start",
                        opacity: 0,
                        transform: "translateY(6px)",
                        animation: "bubIn .4s ease forwards",
                      }}
                    >
                      {"text" in msg ? msg.text : ""}
                    </div>
                  );
                })}
              </div>

              {/* Input */}
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: 14,
                  borderTop: "1px solid var(--line)",
                  display: "flex",
                  gap: 8,
                  background: "white",
                }}
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="12 rue de la République, Levallois-Perret"
                  style={{
                    flex: 1,
                    padding: "12px 14px",
                    border: "1px solid var(--line)",
                    borderRadius: 999,
                    fontFamily: "var(--font-pt-sans)",
                    fontSize: 14,
                    background: "var(--cream-50)",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--teal-900)",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                  }}
                >
                  →
                </button>
              </form>
            </div>
          </div>

          {/* Feature list */}
          <div>
            <h3 style={{ fontSize: 28 }}>Ce que l&apos;outil évalue pour vous.</h3>
            <p
              style={{
                marginTop: 16,
                color: "var(--ink-500)",
                fontSize: 16,
                lineHeight: 1.55,
              }}
            >
              Plutôt que de vous demander à vous d&apos;évaluer votre locataire,
              nous inversons la relation : nous vous donnons les mêmes outils
              qu&apos;une banque pour évaluer Trusthome.
            </p>
            <div
              style={{
                marginTop: 32,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {features.map((f) => (
                <div
                  key={f.num}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "40px 1fr",
                    gap: 18,
                    alignItems: "start",
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: "var(--violet-600)",
                      paddingTop: 4,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {f.num}
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>{f.title}</h4>
                    <p
                      style={{
                        color: "var(--ink-500)",
                        marginTop: 4,
                        fontSize: 14,
                        lineHeight: 1.55,
                      }}
                    >
                      {f.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes typ {
          50% { transform: translateY(-4px); background: var(--teal-600); }
        }
        @media (max-width: 980px) {
          .th-ai-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .th-sec-head { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
