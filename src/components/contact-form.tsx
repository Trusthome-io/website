"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/content";

// Si NEXT_PUBLIC_FORMSPREE_ID est défini, le formulaire envoie vers Formspree.
// Sinon il ouvre la messagerie du visiteur avec le message pré-rempli.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const types = ["Studio", "T2", "T3", "T4 et +", "Maison"];

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!FORMSPREE_ID) {
      const body = [
        `Nom : ${data.name}`,
        `Email : ${data.email}`,
        `Téléphone : ${data.phone || "-"}`,
        `Bien : ${data.type} — ${data.city}`,
        "",
        data.message || "",
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Demande d'estimation — ${data.city}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-3xl border border-line bg-surface p-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-ink">
          <Check size={20} />
        </span>
        <h3 className="text-xl font-semibold">Merci, c&apos;est noté.</h3>
        <p className="text-muted">Nous revenons vers vous rapidement avec une première estimation.</p>
        <button type="button" onClick={() => setStatus("idle")} className="text-sm underline underline-offset-4">
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-line bg-bg px-4 py-3 text-base outline-none transition-colors placeholder:text-muted/70 focus:border-ink";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-line bg-surface p-6 sm:grid-cols-2 sm:p-8">
      <label className="grid gap-1.5 text-sm">
        Nom complet
        <input name="name" required minLength={2} autoComplete="name" className={field} placeholder="Jean Dupont" />
      </label>
      <label className="grid gap-1.5 text-sm">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="jean@exemple.fr" />
      </label>
      <label className="grid gap-1.5 text-sm">
        Téléphone <span className="sr-only">(facultatif)</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="06 12 34 56 78" />
      </label>
      <label className="grid gap-1.5 text-sm">
        Type de bien
        <select name="type" required defaultValue="" className={field}>
          <option value="" disabled>
            Choisir…
          </option>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm sm:col-span-2">
        Ville ou adresse du bien
        <input name="city" required minLength={2} className={field} placeholder="Clichy, 92110" />
      </label>
      <label className="grid gap-1.5 text-sm sm:col-span-2">
        Message <span className="text-muted">(facultatif)</span>
        <textarea name="message" rows={3} className={field} placeholder="Surface, étage, disponibilité…" />
      </label>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">Gratuit et sans engagement. Vos données ne sont jamais revendues.</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-ink transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Envoi…" : "Recevoir mon estimation"}
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600 sm:col-span-2">
          L&apos;envoi a échoué. Réessayez ou écrivez-nous à {site.email}.
        </p>
      )}
    </form>
  );
}
