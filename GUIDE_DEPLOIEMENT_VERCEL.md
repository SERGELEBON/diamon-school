# 📚 Guide complet pour déployer sur Vercel avec base de données gratuite

## 📋 Étapes à suivre (pour débutant)

### 1️⃣ **Créer une base de données PostgreSQL gratuite sur Neon**

1. Allez sur **https://neon.tech**
2. Cliquez sur **"Start Free"**
3. Connectez-vous avec votre compte **GitHub**
4. Cliquez sur **"Create a project"**
5. Donnez un nom à votre projet (ex: "diamond-beauty-db")
6. Choisissez la région **Europe** (plus proche)
7. Cliquez sur **"Create project"**
8. **IMPORTANT**: Copiez l'URL de connexion qui ressemble à :
   ```
   postgresql://username:password@ep-xxx.eu-central-1.aws.neon.tech/neondb?sslmode=require
   ```
   Gardez cette URL, vous en aurez besoin !

### 2️⃣ **Préparer votre projet GitHub**

1. Créez un compte GitHub si vous n'en avez pas : **https://github.com**
2. Créez un nouveau repository (dépôt) :
   - Cliquez sur **"New"** (bouton vert)
   - Nom : `diamond-beauty-school`
   - Laissez en **Public**
   - **NE PAS** initialiser avec README
   - Cliquez sur **"Create repository"**

3. Dans votre terminal (dans le dossier du projet), tapez :
   ```bash
   git init
   git add .
   git commit -m "Premier commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/diamond-beauty-school.git
   git push -u origin main
   ```

### 3️⃣ **Déployer sur Vercel**

1. Allez sur **https://vercel.com**
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre GitHub
5. Cliquez sur **"Add New Project"**
6. Sélectionnez votre repository **"diamond-beauty-school"**
7. Cliquez sur **"Import"**

### 4️⃣ **Configurer les variables d'environnement sur Vercel**

**TRÈS IMPORTANT** : Dans la page de configuration avant le déploiement :

1. Ouvrez la section **"Environment Variables"**
2. Ajoutez une variable :
   - **Name** : `DATABASE_URL`
   - **Value** : Collez l'URL de Neon que vous avez copiée
   - Cliquez sur **"Add"**

### 5️⃣ **Déployer**

1. Cliquez sur **"Deploy"**
2. Attendez 2-3 minutes
3. Vercel va :
   - Installer les dépendances
   - Générer Prisma
   - Construire l'application
   - La déployer

### 6️⃣ **Initialiser la base de données**

Une fois déployé, vous devez créer les tables dans votre base de données :

1. Dans votre terminal local :
   ```bash
   # Créez un fichier .env.production avec votre URL Neon
   echo "DATABASE_URL=postgresql://..." > .env.production

   # Appliquez le schema à la base de données
   npx prisma db push --skip-generate
   ```

### 🎉 **C'est terminé !**

Votre site est maintenant en ligne à l'adresse :
`https://diamond-beauty-school.vercel.app`

## ❓ **Questions fréquentes**

### "Je n'ai pas GitHub, c'est obligatoire ?"
Oui, Vercel fonctionne avec GitHub, GitLab ou Bitbucket. GitHub est le plus simple.

### "Est-ce vraiment gratuit ?"
- **Vercel** : Gratuit pour les projets personnels (100GB de bande passante/mois)
- **Neon** : Gratuit jusqu'à 3GB de stockage
- **GitHub** : Gratuit pour les repos publics

### "Mon déploiement a échoué"
Vérifiez :
1. Que vous avez bien ajouté `DATABASE_URL` dans les variables d'environnement
2. Que l'URL de la base de données est correcte
3. Regardez les logs d'erreur sur Vercel

### "Comment mettre à jour mon site ?"
1. Faites vos modifications en local
2. Testez avec `bun run dev`
3. Committez et pushez sur GitHub :
   ```bash
   git add .
   git commit -m "Mise à jour"
   git push
   ```
4. Vercel redéploie automatiquement !

## 🔧 **Commandes utiles**

```bash
# Tester en local avec la DB de production
DATABASE_URL="votre-url-neon" bun run dev

# Voir le schema de la DB
npx prisma studio

# Réinitialiser la DB (attention, efface tout !)
npx prisma db push --force-reset
```

## 📝 **Checklist avant déploiement**

- [ ] Schema Prisma changé de SQLite à PostgreSQL ✅
- [ ] Package.json mis à jour avec les bons scripts ✅
- [ ] Compte Neon créé avec URL copiée
- [ ] Projet sur GitHub
- [ ] Variables d'environnement configurées sur Vercel
- [ ] `.env` local NON committé (doit être dans .gitignore)

## 🆘 **Besoin d'aide ?**

- Documentation Vercel : https://vercel.com/docs
- Documentation Neon : https://neon.tech/docs
- Documentation Prisma : https://www.prisma.io/docs

Bonne chance pour votre déploiement ! 🚀