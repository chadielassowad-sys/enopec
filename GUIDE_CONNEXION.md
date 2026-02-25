# 🔥 Guide de Connexion Firebase - Étape par Étape

## ⚠️ Important
Firebase CLI nécessite une connexion interactive dans le navigateur. Suivez ces étapes :

## 📋 Étapes à suivre

### 1️⃣ Ouvrir PowerShell dans le dossier du projet

Ouvrez PowerShell et naviguez vers le dossier :
```powershell
cd C:\Users\chadi\enopec
```

### 2️⃣ Se connecter à Firebase

Exécutez cette commande :
```powershell
firebase login
```

**Ce qui va se passer :**
- Un navigateur va s'ouvrir automatiquement
- Connectez-vous avec votre compte Google (chadi.elassowad@keos-bs.fr)
- Autorisez Firebase CLI
- Revenez au terminal, vous verrez "✔ Success! Logged in as..."

### 3️⃣ Sélectionner le projet

Une fois connecté, exécutez :
```powershell
firebase use enopec-8beb8
```

Vous devriez voir : `Now using project enopec-8beb8`

### 4️⃣ Vérifier la connexion

Vérifiez que tout fonctionne :
```powershell
firebase projects:list
```

Vous devriez voir la liste de vos projets Firebase.

### 5️⃣ Activer Firestore (dans la console web)

1. Allez sur : https://console.firebase.google.com/project/enopec-8beb8
2. Cliquez sur **"Firestore Database"** dans le menu de gauche
3. Cliquez sur **"Créer une base de données"**
4. Choisissez **"Mode test"**
5. Sélectionnez une région (ex: **europe-west**)
6. Cliquez sur **"Activer"**

### 6️⃣ Activer Storage (dans la console web)

1. Dans la même console Firebase, cliquez sur **"Storage"**
2. Cliquez sur **"Commencer"**
3. Acceptez les règles par défaut
4. Cliquez sur **"Terminé"**

### 7️⃣ Déployer les règles de sécurité

Retournez dans PowerShell et exécutez :

```powershell
firebase deploy --only firestore:rules
firebase deploy --only storage:rules
```

## ✅ Vérification finale

Une fois tout configuré :

1. Ouvrez `admin.html` dans votre navigateur
2. Connectez-vous avec le mot de passe : `enopec1290`
3. Les données par défaut seront automatiquement créées au premier chargement

## 🆘 Dépannage

### Erreur "Authentication Error"
→ Exécutez `firebase login` à nouveau

### Erreur "Project not found"
→ Vérifiez que le projet `enopec-8beb8` existe dans votre compte Firebase

### Erreur "Permission denied"
→ Vérifiez que vous avez les droits d'administration sur le projet

### Les règles ne se déploient pas
→ Vérifiez que Firestore et Storage sont activés dans la console
