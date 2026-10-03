# trusthome.io — site vitrine

Site vitrine de TrustHome : une entreprise loue le logement des propriétaires d'Île-de-France (hors Paris) et leur verse le loyer chaque mois.

Le site ne collecte aucune demande lui-même. Tous les boutons d'action renvoient vers le **tunnel de demande** (projet de l'équipe externe), avec des UTM qui permettent de reconnaître dans le tableau admin les leads venus du site :

```
?utm_source=trusthome.io&utm_medium=site&utm_campaign=vitrine&utm_content=<emplacement>
```

Emplacements : `header`, `menu-mobile`, `hero`, `fonctionnement`, `bas-de-page`, `barre-mobile`.

## Développement

```bash
npm install
npm run dev        # http://localhost:9002
npm run build      # export statique dans out/
npm run lint
npm run typecheck
```

Stack : Next.js 16 (export statique), React 19, Tailwind CSS 3, composants shadcn/ui. Hébergement : Netlify.

## Configuration

Voir `.env.example`.

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_FUNNEL_URL` | URL du tunnel. À passer sur `https://proprietaires.trusthome.io` quand le sous-domaine sera en place (#29). |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID du Meta Pixel. Vide : aucun traceur et aucun bandeau cookies. Renseigné : bandeau Accepter / Refuser, et le pixel ne se charge qu'après accord. |

Les variables `NEXT_PUBLIC_*` sont figées au build : il faut reconstruire le site après les avoir modifiées.

## Où modifier quoi

- Coordonnées, SIREN, URL du tunnel : `src/lib/site.ts`
- Textes de la page d'accueil : `src/components/landing/*`
- Logo (SVG temporaire, #28) : `src/components/brand/logo.tsx`, `public/brand/`, `src/app/icon.svg`
- Pixel et consentement : `src/lib/tracking.ts`, `src/components/analytics/`
- Photos : `public/img/`, à redimensionner à 1600 px maximum avant de les ajouter (le site ne les optimise pas)
