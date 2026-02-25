# 🔥 Configuration Firebase - Guide Rapide

## Étapes de configuration

### Option 1 : Script automatique (Windows)

Double-cliquez sur `setup-firebase.bat` et suivez les instructions.

### Option 2 : Script automatique (Linux/Mac)

```bash
chmod +x setup-firebase.sh
./setup-firebase.sh
```

### Option 3 : Configuration manuelle

#### 1. Se connecter à Firebase

```bash
firebase login
```

Cela ouvrira votre navigateur pour vous connecter avec votre compte Google.

#### 2. Sélectionner le projet

```bash
firebase use enopec-8beb8
```

#### 3. Déployer les règles Firestore

```bash
firebase deploy --only firestore:rules
```

#### 4. Déployer les règles Storage

```bash
firebase deploy --only storage:rules
```

## Vérification dans la console Firebase

Après le déploiement, vérifiez dans la [console Firebase](https://console.firebase.google.com/) :

1. **Firestore Database** :
   - Allez dans "Firestore Database"
   - Vérifiez que la base de données est créée
   - Vérifiez les règles dans l'onglet "Règles"

2. **Storage** :
   - Allez dans "Storage"
   - Vérifiez que Storage est activé
   - Vérifiez les règles dans l'onglet "Règles"

## Activer les services dans la console

Si Firestore ou Storage ne sont pas encore activés :

1. Allez sur https://console.firebase.google.com/project/enopec-8beb8
2. **Pour Firestore** :
   - Cliquez sur "Firestore Database" dans le menu
   - Cliquez sur "Créer une base de données"
   - Choisissez "Mode test" (vous pouvez changer les règles plus tard)
   - Sélectionnez une région (ex: europe-west)

3. **Pour Storage** :
   - Cliquez sur "Storage" dans le menu
   - Cliquez sur "Commencer"
   - Acceptez les règles par défaut

## Test de la configuration

Une fois configuré :

1. Ouvrez `admin.html` dans votre navigateur
2. Connectez-vous avec le mot de passe : `enopec1290`
3. Les données par défaut seront automatiquement initialisées au premier chargement

## Dépannage

### Erreur "Project not found"
- Vérifiez que le projet `enopec-8beb8` existe dans votre compte Firebase
- Vérifiez que vous êtes connecté avec le bon compte Google

### Erreur "Permission denied"
- Vérifiez que vous avez les droits d'administration sur le projet Firebase
- Vérifiez que Firestore et Storage sont activés

### Les données ne se chargent pas
- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Vérifiez que Firestore est bien activé et que les règles permettent la lecture
