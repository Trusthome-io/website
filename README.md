# 🏠 TrustHome Website

[![CI/CD Pipeline](https://github.com/Trusthome-io/website/actions/workflows/ci.yml/badge.svg)](https://github.com/Trusthome-io/website/actions/workflows/ci.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/trusthome-io/deploys)

Site web professionnel pour TrustHome - Votre partenaire de confiance pour tous vos projets immobiliers et de rénovation.

## 🚀 Technologies

- **Framework:** Next.js 15.2.3 avec App Router
- **Language:** TypeScript 5+  
- **Styling:** Tailwind CSS avec shadcn/ui
- **UI Components:** Radix UI (accessibilité optimisée)
- **State Management:** TanStack Query + Context API
- **Database:** Firebase (si activé)
- **AI Integration:** Google Genkit
- **Deployment:** Netlify avec déploiement automatique
- **Testing:** Jest + Testing Library
- **Code Quality:** ESLint + Prettier + Husky + lint-staged

## 📁 Structure du Projet

```
src/
├── app/                 # App Router (Next.js 13+)
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI (shadcn/ui)
│   ├── layout/         # Header, Footer, etc.
│   └── landing/        # Composants de la landing page
├── config/             # Configuration du site
├── constants/          # Constantes globales
├── hooks/              # Hooks React personnalisés
├── lib/                # Utilitaires et configurations
├── types/              # Types TypeScript
└── utils/              # Fonctions utilitaires
```

## 🛠️ Installation

### Prérequis

- Node.js 20+
- npm ou yarn

### Setup

1. **Cloner le projet**
```bash
git clone https://github.com/Trusthome-io/website.git
cd website
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer l'environnement**
```bash
cp .env.example .env.local
# Éditer .env.local avec vos variables
```

4. **Démarrer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur [http://localhost:9002](http://localhost:9002)

## 📝 Scripts Disponibles

### Développement
- `npm run dev` - Serveur de développement avec Turbopack
- `npm run build` - Build de production
- `npm run start` - Démarrer le serveur de production

### Qualité de Code
- `npm run lint` - Linter et corriger automatiquement
- `npm run lint:check` - Vérifier le linting uniquement  
- `npm run format` - Formatter le code avec Prettier
- `npm run format:check` - Vérifier le formatage uniquement
- `npm run typecheck` - Vérification TypeScript
- `npm run validate` - Validation complète (types + lint + format)

### Tests
- `npm run test` - Lancer les tests
- `npm run test:watch` - Tests en mode watch
- `npm run test:coverage` - Tests avec couverture de code

### AI & Development
- `npm run genkit:dev` - Serveur de développement Genkit
- `npm run genkit:watch` - Genkit en mode watch

## 🚀 Déploiement

### Branches
- `main` - Production (trusthome.io)
- `dev` - Développement (preview deployments)

### Pipeline CI/CD

Le projet utilise GitHub Actions pour :

1. **Quality Checks**
   - Vérification TypeScript
   - Linting ESLint
   - Formatage Prettier
   - Tests automatisés
   - Couverture de code

2. **Build & Deploy**
   - Build de production automatique
   - Déploiement sur Netlify
   - Previews automatiques sur les PRs

## 📞 Support

Pour toute question ou support :

- **Email:** dev@trusthome.io
- **Issues:** [GitHub Issues](https://github.com/Trusthome-io/website/issues)

---

**TrustHome** - Rénovation et Projets Immobiliers de Confiance
