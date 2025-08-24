# Déploiement sur IONOS via FTP

## Configuration

### 1. Variables secrets GitHub
Dans Settings > Secrets and variables > Actions, ajoutez :

```
IONOS_FTP_SERVER=votre-serveur-ftp.ionos.fr
IONOS_FTP_USERNAME=votre-username-ftp
IONOS_FTP_PASSWORD=votre-password-ftp
```

### 2. Informations FTP Ionos
Vous pouvez trouver ces informations dans :
- Ionos Panel > Hébergement Web > Détails
- Ou dans vos emails de configuration Ionos

### 3. Configuration DNS
Dans Ionos DNS, supprimez la redirection et pointez directement :
```
Type: A
Nom: @
Valeur: [IP de votre hébergement Ionos]

Type: CNAME
Nom: www
Valeur: trusthome.io
```

### 4. Déploiement
- Chaque push sur `main` déploiera automatiquement
- Les fichiers vont dans le dossier racine de votre hébergement
- SSL automatique avec votre domaine

## Avantages
- ✅ Déploiement direct sur votre hébergement Ionos
- ✅ Pas de redirection nécessaire
- ✅ Utilise votre domaine trusthome.io directement
- ✅ SSL inclus avec Ionos