"use client";

import { useState, useCallback } from "react";

type City = "paris8" | "paris17" | "levallois" | "neuilly" | "asnieres" | "clichy" | "saintouen" | "autre";
type PropType = "studio" | "t2" | "t3" | "t4" | "maison";
type Quality = "standard" | "moderne" | "prestige";
type Duration = "1" | "2" | "3" | "5";

const cityRates: Record<City, number> = {
  paris8: 35,
  paris17: 32,
  levallois: 28,
  neuilly: 34,
  asnieres: 22,
  clichy: 20,
  saintouen: 18,
  autre: 20,
};
const typeMult: Record<PropType, number> = {
  studio: 0.95,
  t2: 1.0,
  t3: 1.05,
  t4: 1.08,
  maison: 1.1,
};
const qualMult: Record<Quality, number> = {
  standard: 0.92,
  moderne: 1.0,
  prestige: 1.12,
};
const durMult: Record<Duration, number> = {
  "1": 0.97,
  "2": 1.0,
  "3": 1.02,
  "5": 1.05,
};

function frFmt(n: number) {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
}

export function EstimatorSection() {
  const [city, setCity] = useState<City>("levallois");
  const [propType, setPropType] = useState<PropType>("t2");
  const [surface, setSurface] = useState(45);
  const [quality, setQuality] = useState<Quality>("moderne");
  const [duration, setDuration] = useState<Duration>("2");

  const monthly = surface * cityRates[city] * typeMult[propType] * qualMult[quality] * durMult[duration];
  const annual = monthly * 12;
  const saved = annual * 0.12;
  const yieldPct = (monthly / (surface * 4000)) * 100;
  const low = monthly * 0.9;
  const high = monthly * 1.1;

  function ChipRow<T extends string>({
    value,
    onChange,
    options,
  }: {
    value: T;
    onChange: (v: T) => void;
    options: { val: T; label: string }[];
  }) {
    return (
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {options.map((o) => (
          <button
            key={o.val}
            onClick={() => onChange(o.val)}
            style={{
              padding: "8px 14px",
              border: `1px solid ${value === o.val ? "var(--teal-900)" : "var(--line)"}`,
              borderRadius: 999,
              fontSize: 13,
              color: value === o.val ? "var(--cream-50)" : "var(--ink-700)",
              background: value === o.val ? "var(--teal-900)" : "white",
              cursor: "pointer",
              transition: "all .15s ease",
              fontFamily: "var(--font-pt-sans)",
            }}
          >
            {o.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <section
      id="estimator"
      style={{
        padding: "120px 0",
        borderTop: "1px solid var(--line)",
        background: "var(--cream-50)",
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
          <div className="eyebrow">— Estimateur</div>
          <div>
            <h2>Combien vaut votre loyer garanti ?</h2>
            <p
              style={{
                color: "var(--ink-500)",
                maxWidth: "58ch",
                fontSize: 17,
                lineHeight: 1.5,
                marginTop: 12,
              }}
            >
              Quatre informations suffisent. Estimation indicative, sans
              engagement — une proposition formelle vous est envoyée sous 48h
              après la visite.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            border: "1px solid var(--line)",
            borderRadius: 20,
            overflow: "hidden",
            background: "var(--cream-50)",
          }}
          className="th-est-grid"
        >
          {/* Form */}
          <div
            style={{
              padding: 40,
              borderRight: "1px solid var(--line)",
            }}
            className="th-est-form-border"
          >
            <Field label="Ville">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value as City)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  fontFamily: "var(--font-pt-sans)",
                  fontSize: 16,
                  background: "white",
                  border: "1px solid var(--line)",
                  borderRadius: 6,
                  color: "var(--ink-900)",
                }}
              >
                <option value="paris8">Paris 8e</option>
                <option value="paris17">Paris 17e</option>
                <option value="levallois">Levallois-Perret (92)</option>
                <option value="neuilly">Neuilly-sur-Seine (92)</option>
                <option value="asnieres">Asnières-sur-Seine (92)</option>
                <option value="clichy">Clichy (92)</option>
                <option value="saintouen">Saint-Ouen (93)</option>
                <option value="autre">Autre · Île-de-France</option>
              </select>
            </Field>

            <Field label="Type de bien">
              <ChipRow
                value={propType}
                onChange={setPropType}
                options={[
                  { val: "studio", label: "Studio" },
                  { val: "t2", label: "T2" },
                  { val: "t3", label: "T3" },
                  { val: "t4", label: "T4+" },
                  { val: "maison", label: "Maison" },
                ]}
              />
            </Field>

            <Field label={`Surface · ${surface} m²`}>
              <input
                type="range"
                min={15}
                max={200}
                value={surface}
                onChange={(e) => setSurface(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--violet-600)" }}
              />
            </Field>

            <Field label="Qualité / finitions">
              <ChipRow
                value={quality}
                onChange={setQuality}
                options={[
                  { val: "standard", label: "Standard" },
                  { val: "moderne", label: "Moderne" },
                  { val: "prestige", label: "Prestige" },
                ]}
              />
            </Field>

            <Field label="Durée envisagée">
              <ChipRow
                value={duration}
                onChange={setDuration}
                options={[
                  { val: "1", label: "1 an" },
                  { val: "2", label: "2 ans" },
                  { val: "3", label: "3 ans" },
                  { val: "5", label: "5 ans+" },
                ]}
              />
            </Field>
          </div>

          {/* Result */}
          <div
            style={{
              padding: 40,
              background: "var(--teal-900)",
              color: "var(--cream-50)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(500px 200px at 100% 100%, rgba(132,101,153,0.3), transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--teal-300)",
                }}
              >
                — Votre loyer garanti estimé
              </div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 500,
                  fontSize: 74,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "white",
                  marginTop: 12,
                  display: "flex",
                  alignItems: "baseline",
                  gap: 6,
                }}
              >
                <span>{frFmt(monthly)}</span>
                <span style={{ fontSize: 32, color: "var(--teal-300)" }}>€</span>
              </div>
              <div
                style={{ marginTop: 14, color: "var(--teal-300)", fontSize: 14 }}
              >
                Fourchette : {frFmt(low)} – {frFmt(high)} €
              </div>

              <div
                style={{
                  marginTop: 32,
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {[
                  [frFmt(annual) + " €", "Revenu annuel"],
                  [frFmt(saved) + " €", "Économie vs agence+GLI"],
                  [yieldPct.toFixed(1) + "%", "Rendement net estimé"],
                ].map(([k, v], i) => (
                  <div
                    key={v}
                    style={{
                      padding: "20px 0",
                      paddingRight: i < 2 ? 16 : 0,
                      borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: 22,
                        fontWeight: 500,
                        color: "white",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {k}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: 10,
                        color: "var(--teal-300)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginTop: 4,
                      }}
                    >
                      {v}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
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
                  marginTop: 32,
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
                Recevoir une proposition formelle →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .th-est-grid { grid-template-columns: 1fr !important; }
          .th-est-form-border { border-right: none !important; border-bottom: 1px solid var(--line) !important; }
          .th-sec-head { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "block", marginBottom: 22 }}>
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
        {label}
      </label>
      {children}
    </div>
  );
}
