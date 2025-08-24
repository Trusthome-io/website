# Déploiement sur GitHub Pages avec domaine custom

## Configuration effectuée

### 1. GitHub Actions
- Créé `.github/workflows/deploy-github-pages.yml`
- Déploiement automatique sur push vers `main`
- Utilise le dossier `out/` généré par Next.js

### 2. Domaine custom
- Créé `public/CNAME` avec `trusthome.io`
- Configuration Next.js adaptée pour GitHub Pages

## Configuration requise

### 1. Activer GitHub Pages
1. Allez dans les Settings de votre repository GitHub
2. Section "Pages" 
3. Source : "GitHub Actions"

### 2. Configuration DNS chez Ionos
Remplacez la redirection actuelle par ces enregistrements DNS :

**Option A - Enregistrements A (recommandé) :**
```
Type: A
Nom: @
Valeur: 185.199.108.153
```
```
Type: A  
Nom: @
Valeur: 185.199.109.153
```
```
Type: A
Nom: @
Valeur: 185.199.110.153
```
```
Type: A
Nom: @
Valeur: 185.199.111.153
```
```
Type: CNAME
Nom: www
Valeur: votre-username.github.io
```

**Option B - CNAME (alternative) :**
```
Type: CNAME
Nom: @
Valeur: votre-username.github.io
```

### 3. Déploiement
1. Pushez vers `main`
2. Le workflow va builder et déployer automatiquement
3. Votre site sera accessible sur `https://trusthome.io`

## Avantages GitHub Pages
- ✅ Gratuit
- ✅ SSL automatique
- ✅ CDN inclus
- ✅ Déploiement automatique
- ✅ Pas de redirection nécessaire