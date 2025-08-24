# Guide de déploiement sur IONOS Space

## Configuration effectuée

### 1. Configuration Next.js
- Modifié `next.config.ts` pour l'export statique
- Ajouté `output: 'export'` et `trailingSlash: true`
- Configuré `images: { unoptimized: true }`

### 2. GitHub Actions
- Créé `.github/workflows/ionos-deploy.yml`
- Configuration automatique du déploiement sur push vers `main`
- Build avec Node.js 20 et cache npm

### 3. Scripts package.json
- Ajouté `npm run export` (alias de build)
- Ajouté `npm run deploy:ionos` pour tester localement

## Configuration requise sur IONOS Space

### Variables secrets GitHub
Dans les settings du repository GitHub, ajoutez ces secrets :

```
IONOS_API_KEY=votre_clé_api_ionos
IONOS_PROJECT_ID=votre_project_id
IONOS_REMOTE_HOST=votre_remote_host
```

### Étapes de déploiement

1. **Première fois :**
   - Connectez votre repository GitHub à IONOS Space
   - Configurez les secrets dans GitHub Settings > Secrets and variables > Actions

2. **Déploiements automatiques :**
   - Chaque push sur `main` déclenchera le déploiement
   - Le workflow build et déploie automatiquement

3. **Test local :**
   ```bash
   npm run deploy:ionos
   ```
   Vérifiez le dossier `out/` contient les fichiers statiques.

## Structure de déploiement
- Dossier source : `out/` (généré par Next.js export)
- Fichier de configuration : `.htaccess` dans `public/`
- Build automatique avec lint et typecheck

## Vérifications avant déploiement
- ✅ Build réussi sans erreurs
- ✅ Export statique configuré
- ✅ GitHub Actions configuré
- ✅ Scripts de déploiement ajoutés