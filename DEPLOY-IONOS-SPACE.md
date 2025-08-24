# Déploiement sur IONOS Deploy Now

## Configuration correcte

### 1. Connecter le repository via IONOS Deploy Now
1. Allez sur https://deploy-now.ionos.space/
2. Connectez votre compte GitHub
3. Sélectionnez le repository `Trusthome-io/website`
4. IONOS détectera automatiquement Next.js

### 2. Configuration automatique
- **Framework** : Next.js (détecté automatiquement)
- **Build Command** : `npm run build` ou `bun run build`
- **Output Directory** : `out/`
- **Node.js Version** : 20

### 3. Configuration de votre domaine
Dans IONOS Deploy Now :
1. Ajoutez `trusthome.io` comme domaine custom
2. IONOS configurera automatiquement SSL
3. Pointera votre domaine vers le déploiement

### 4. Variables d'environnement
Si besoin, ajoutez dans IONOS Deploy Now :
```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

## Avantages IONOS Deploy Now
- ✅ Détection automatique de Next.js
- ✅ SSL automatique
- ✅ Gestion DNS automatique
- ✅ Pas de workflow GitHub Actions à maintenir
- ✅ Interface graphique simple

## Note importante
- Supprimez les workflows GitHub Actions custom (déjà fait)
- IONOS Deploy Now gère tout automatiquement
- Votre domaine sera directement sur trusthome.io