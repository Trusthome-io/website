"use client";

import { useState } from "react";

type Step = 1 | 2 | 3 | "done";
type PropType = "studio" | "t2t3" | "t4" | "maison";

interface FormData {
  propType: PropType;
  address: string;
  name: string;
  email: string;
  phone: string;
  timing: string;
  notes: string;
}

const propTypeLabels: Record<PropType, string> = {
  studio: "Studio",
  t2t3: "Appartement T2 / T3",
  t4: "Appartement T4+",
  maison: "Maison individuelle",
};

export function ContactSection() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>({
    propType: "t2t3",
    address: "",
    name: "",
    email: "",
    phone: "",
    timing: "Dès que possible",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function validate(s: Step): boolean {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (s === 1) {
      if (form.address.trim().length < 4) errs.address = "Merci d'indiquer une adresse.";
    }
    if (s === 2) {
      if (!form.name.trim()) errs.name = "Merci d'indiquer votre nom.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Email invalide.";
      if (form.phone.replace(/\D/g, "").length < 8) errs.phone = "Numéro invalide.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function next() {
    if (step === "done") return;
    if (!validate(step)) return;
    if (step === 3) {
      setStep("done");
    } else {
      setStep((s) => (s as number) + 1 as Step);
    }
  }

  function back() {
    if (step === "done" || step === 1) return;
    setStep((s) => (s as number) - 1 as Step);
  }

  const progress = step === "done" ? 3 : (step as number);

  return (
    <section
      id="contact"
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
          <div className="eyebrow">— Démarrez</div>
          <div>
            <h2>Recevez votre proposition sous 48 heures.</h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--line)",
          }}
          className="th-lead-grid"
        >
          {/* Left pitch */}
          <div
            style={{
              padding: 48,
              background: "var(--teal-900)",
              color: "var(--cream-50)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              minHeight: 520,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(500px 300px at 0% 100%, rgba(132,101,153,0.3), transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2
                style={{
                  color: "white",
                  fontSize: 36,
                }}
              >
                Un partenariat, pas un contrat de plus.
              </h2>
              <div
                style={{
                  marginTop: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {[
                  "Étude gratuite, sans engagement",
                  "Réponse chiffrée sous 48h",
                  "Visite à votre convenance",
                  "Contrat rédigé par nos avocats",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: 12,
                      fontSize: 14,
                      color: "var(--cream-100)",
                    }}
                  >
                    <span style={{ color: "#8fdc9d" }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 1,
                marginTop: 36,
                padding: "20px 22px",
                borderLeft: "2px solid var(--violet-600)",
                background: "rgba(0,0,0,0.15)",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: 15,
                  color: "var(--cream-100)",
                  lineHeight: 1.55,
                }}
              >
                « Ça fait 14 mois que je reçois mon loyer le 5, sans exception.
                Je ne me souviens même plus de la dernière fois que j&apos;ai
                pensé à mon appartement de Levallois. »
              </p>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--teal-300)",
                  marginTop: 10,
                  display: "block",
                }}
              >
                Sophie L. · T2 Levallois-Perret
              </span>
            </div>
          </div>

          {/* Right form */}
          <div
            style={{
              padding: 48,
              background: "var(--cream-50)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Progress bar */}
            <div
              style={{ display: "flex", gap: 6, marginBottom: 28 }}
            >
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  style={{
                    flex: 1,
                    height: 3,
                    borderRadius: 999,
                    background:
                      n < progress
                        ? "var(--teal-600)"
                        : n === progress
                        ? "var(--violet-600)"
                        : "var(--cream-200)",
                    transition: "background .3s ease",
                  }}
                />
              ))}
            </div>

            {/* Steps */}
            {step === 1 && (
              <div style={{ animation: "bubIn .4s ease forwards", opacity: 0 }}>
                <h3 style={{ fontSize: 24, fontWeight: 500 }}>Votre bien</h3>
                <p style={{ color: "var(--ink-500)", marginTop: 6, fontSize: 14 }}>
                  Parlez-nous du bien que vous souhaitez nous confier.
                </p>
                <div style={{ marginTop: 22 }}>
                  <FormLabel>Type de bien</FormLabel>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      marginTop: 10,
                    }}
                  >
                    {(["studio", "t2t3", "t4", "maison"] as PropType[]).map((v) => (
                      <label
                        key={v}
                        onClick={() => setForm((f) => ({ ...f, propType: v }))}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          padding: "14px 16px",
                          border: `1px solid ${form.propType === v ? "var(--teal-900)" : "var(--line)"}`,
                          borderRadius: 6,
                          cursor: "pointer",
                          fontSize: 15,
                          background:
                            form.propType === v ? "var(--teal-900)" : "white",
                          color:
                            form.propType === v ? "white" : "var(--ink-900)",
                          transition: "all .15s ease",
                          boxShadow:
                            form.propType === v
                              ? "0 4px 14px -4px rgba(26,58,67,0.3)"
                              : "none",
                        }}
                      >
                        <span
                          style={{
                            width: 16,
                            height: 16,
                            borderRadius: "50%",
                            border: `1px solid ${form.propType === v ? "white" : "var(--line)"}`,
                            flexShrink: 0,
                            boxShadow:
                              form.propType === v
                                ? "inset 0 0 0 3px var(--teal-900)"
                                : "none",
                            background: form.propType === v ? "white" : "transparent",
                          }}
                        />
                        {propTypeLabels[v]}
                      </label>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: 22 }}>
                  <FormLabel>Adresse du bien</FormLabel>
                  <input
                    type="text"
                    placeholder="12 rue de la République, Levallois-Perret"
                    value={form.address}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, address: e.target.value }))
                    }
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      fontFamily: "var(--font-pt-sans)",
                      fontSize: 16,
                      background: "white",
                      border: `1px solid ${errors.address ? "var(--red-600)" : "var(--line)"}`,
                      borderRadius: 6,
                      color: "var(--ink-900)",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                  {errors.address && (
                    <div
                      style={{
                        color: "var(--red-600)",
                        fontSize: 12,
                        marginTop: 6,
                      }}
                    >
                      {errors.address}
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 2 && (
              <div style={{ animation: "bubIn .4s ease forwards", opacity: 0 }}>
                <h3 style={{ fontSize: 24, fontWeight: 500 }}>Vos coordonnées</h3>
                <p style={{ color: "var(--ink-500)", marginTop: 6, fontSize: 14 }}>
                  Nous vous recontactons sous 48h, jamais de spam.
                </p>
                {[
                  {
                    key: "name" as const,
                    label: "Nom complet",
                    type: "text",
                    placeholder: "Sophie Lefèvre",
                  },
                  {
                    key: "email" as const,
                    label: "Email",
                    type: "email",
                    placeholder: "sophie@exemple.fr",
                  },
                  {
                    key: "phone" as const,
                    label: "Téléphone",
                    type: "tel",
                    placeholder: "+33 6 12 34 56 78",
                  },
                ].map((f) => (
                  <div key={f.key} style={{ marginTop: 22 }}>
                    <FormLabel>{f.label}</FormLabel>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, [f.key]: e.target.value }))
                      }
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        fontFamily: "var(--font-pt-sans)",
                        fontSize: 16,
                        background: "white",
                        border: `1px solid ${errors[f.key] ? "var(--red-600)" : "var(--line)"}`,
                        borderRadius: 6,
                        color: "var(--ink-900)",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                    {errors[f.key] && (
                      <div
                        style={{
                          color: "var(--red-600)",
                          fontSize: 12,
                          marginTop: 6,
                        }}
                      >
                        {errors[f.key]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {step === 3 && (
              <div style={{ animation: "bubIn .4s ease forwards", opacity: 0 }}>
                <h3 style={{ fontSize: 24, fontWeight: 500 }}>Précisez</h3>
                <p style={{ color: "var(--ink-500)", marginTop: 6, fontSize: 14 }}>
                  Dernière étape — quelques détails pour personnaliser la
                  proposition.
                </p>
                <div style={{ marginTop: 22 }}>
                  <FormLabel>Quand souhaitez-vous commencer ?</FormLabel>
                  <select
                    value={form.timing}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, timing: e.target.value }))
                    }
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      fontFamily: "var(--font-pt-sans)",
                      fontSize: 16,
                      background: "white",
                      border: "1px solid var(--line)",
                      borderRadius: 6,
                      color: "var(--ink-900)",
                      outline: "none",
                    }}
                  >
                    {[
                      "Dès que possible",
                      "Dans 1–3 mois",
                      "Dans 3–6 mois",
                      "Je me renseigne",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div style={{ marginTop: 22 }}>
                  <FormLabel>Remarques (optionnel)</FormLabel>
                  <textarea
                    placeholder="Ex: appartement meublé, résident à l'étranger, préférence de visite en soirée…"
                    value={form.notes}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, notes: e.target.value }))
                    }
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      fontFamily: "var(--font-pt-sans)",
                      fontSize: 16,
                      background: "white",
                      border: "1px solid var(--line)",
                      borderRadius: 6,
                      color: "var(--ink-900)",
                      outline: "none",
                      resize: "vertical",
                      minHeight: 100,
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>
            )}

            {step === "done" && (
              <div style={{ animation: "bubIn .4s ease forwards", opacity: 0 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#8fdc9d",
                    color: "var(--teal-900)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: 30,
                  }}
                >
                  ✓
                </div>
                <h3 style={{ marginTop: 16, fontSize: 24, fontWeight: 500 }}>
                  Merci, c&apos;est envoyé.
                </h3>
                <p style={{ color: "var(--ink-500)", marginTop: 8 }}>
                  Un chargé d&apos;exploitation vous recontacte sous 48 heures.
                  Votre loyer garanti n&apos;est plus très loin.
                </p>
                <div
                  style={{
                    marginTop: 24,
                    padding: 20,
                    background: "var(--cream-100)",
                    borderRadius: 6,
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: 12,
                    color: "var(--ink-700)",
                    lineHeight: 1.8,
                  }}
                >
                  <div>Type : {propTypeLabels[form.propType]}</div>
                  <div>Adresse : {form.address}</div>
                  <div>Nom : {form.name}</div>
                  <div>Email : {form.email}</div>
                  <div>Téléphone : {form.phone}</div>
                  <div>Démarrage : {form.timing}</div>
                </div>
              </div>
            )}

            {/* Navigation */}
            {step !== "done" && (
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 28,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={back}
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
                    visibility: step === 1 ? "hidden" : "visible",
                  }}
                >
                  ← Précédent
                </button>
                <button
                  onClick={next}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "9px 18px",
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 500,
                    fontSize: 13,
                    borderRadius: 999,
                    background: "var(--violet-600)",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    transition: "transform .15s ease, background .15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--violet-700)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--violet-600)";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  {step === 3 ? "Envoyer" : "Continuer"} →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .th-lead-grid { grid-template-columns: 1fr !important; }
          .th-sec-head { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}

function FormLabel({ children }: { children: React.ReactNode }) {
  return (
    <label
      style={{
        display: "block",
        fontFamily: "var(--font-jetbrains-mono)",
        fontSize: 11,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--ink-500)",
        marginBottom: 8,
      }}
    >
      {children}
    </label>
  );
}
