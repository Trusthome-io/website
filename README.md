# TrustHome — site vitrine

Landing page de [trusthome.io](https://trusthome.io) : Next.js 16 + Tailwind CSS 4, export statique.

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
```

## Contenu

Tous les textes (avantages, étapes, comparatif, avis, FAQ, coordonnées) sont dans `src/content.ts`.
Les images sont dans `public/img/` (max 2000 px).

## Formulaire de contact

- Sans configuration : le formulaire ouvre la messagerie du visiteur avec la demande pré-remplie.
- Avec [Formspree](https://formspree.io) : définir `NEXT_PUBLIC_FORMSPREE_ID` au build pour recevoir les demandes directement.

## Build

```bash
npm run build      # génère out/ (site statique, CNAME inclus)
```
