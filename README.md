# TrustHome — site vitrine

Landing page de [trusthome.io](https://trusthome.io) : Next.js 16 + Tailwind CSS 4, export statique, hébergée sur Netlify.

Le site ne collecte aucune demande lui-même. Tous les boutons d'action renvoient vers le **tunnel de demande** (projet de l'équipe externe), avec des UTM qui permettent de reconnaître dans le tableau admin les leads venus du site :

```
?utm_source=trusthome.io&utm_medium=site&utm_campaign=vitrine&utm_content=<emplacement>
```

Emplacements : `header`, `menu-mobile`, `hero`, `fonctionnement`, `contact`, `barre-mobile`.

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # génère out/ (site statique, CNAME inclus)
npm run typecheck
```

## Contenu

Tous les textes (avantages, étapes, comparatif, avis, FAQ, coordonnées, SIREN) sont dans `src/content.ts`. Le JSON-LD et `/llms.txt` en sont générés automatiquement.
Les images sont dans `public/img/` : à redimensionner à 1600 px maximum avant de les ajouter.

## Configuration (`.env.example`)

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_FUNNEL_URL` | URL du tunnel. À passer sur `https://proprietaires.trusthome.io` quand le sous-domaine sera en place (#29). |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID du Meta Pixel. Vide : aucun traceur et aucun bandeau cookies. Renseigné : bandeau Accepter / Refuser, et le pixel ne se charge qu'après accord. |

Les variables `NEXT_PUBLIC_*` sont figées au build : il faut redéployer après les avoir modifiées.

## SEO et moteurs de réponse IA (GEO)

- Métadonnées, Open Graph (`public/og.jpg`), `sitemap.xml`, `robots.txt`
- JSON-LD : `Organization`, `WebSite`, `Service` (zone : France), `FAQPage`
- `robots.txt` autorise explicitement les robots de Google (AI Overviews), Bing, ChatGPT, Perplexity, Claude et Apple
- `/llms.txt` : résumé factuel en Markdown pour les moteurs de réponse
- FAQ rédigée comme les questions qu'on tape dans Google ou qu'on pose à une IA, avec la réponse directe en premier
