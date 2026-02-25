# 🔐 Guide d'Administration - ENOPEC Ingénierie

## Accès à l'administration

1. Ouvrez le fichier `admin.html` dans votre navigateur
2. Entrez le mot de passe : **enopec1290**
3. Cliquez sur "Se connecter"

## Fonctionnalités

### 📝 Modification des contenus

L'interface d'administration est organisée en onglets :

- **Hero** : Titre principal, sous-titre et image de fond
- **Introduction** : Titre, sous-titre, 3 points clés et image
- **Prestations** : Tous les contenus des prestations (DPE, Audit, PPPT, STD)
- **Outils** : Titre et description de la section outils
- **Équipements** : Titre et description de la section équipements
- **Valeurs** : Les 4 valeurs de l'entreprise
- **Contact** : Coordonnées (téléphone, emails, adresse)
- **Parchemin** : Contenu de la section parchemin

### 📤 Upload d'images

Pour chaque champ d'image :

1. Cliquez sur "📤 Uploader une image"
2. Sélectionnez votre image
3. L'image sera automatiquement uploadée sur Firebase Storage
4. L'URL sera automatiquement remplie dans le champ

### 💾 Sauvegarde

Après avoir modifié les contenus :

1. Cliquez sur le bouton "💾 Enregistrer toutes les modifications" en bas de la page
2. Attendez la confirmation de sauvegarde
3. Les modifications seront immédiatement visibles sur le site

## Configuration Firebase

Le système utilise Firebase pour stocker les données :

- **Firestore** : Stockage des textes et contenus
- **Storage** : Stockage des images uploadées

### Structure des données

Les données sont stockées dans Firestore sous la collection `siteContent` avec le document `content`.

## Sécurité

- Le mot de passe est stocké côté client (dans le code JavaScript)
- Pour une sécurité renforcée, envisagez d'utiliser Firebase Authentication
- Le mot de passe actuel est : **enopec1290**

## Dépannage

### Les modifications ne s'affichent pas sur le site

1. Vérifiez que vous avez bien cliqué sur "Enregistrer toutes les modifications"
2. Vérifiez la console du navigateur (F12) pour les erreurs
3. Vérifiez que Firebase est correctement configuré

### L'upload d'image ne fonctionne pas

1. Vérifiez que Firebase Storage est activé dans votre projet Firebase
2. Vérifiez les règles de sécurité de Firebase Storage
3. Vérifiez la console pour les erreurs

### Erreur de connexion Firebase

1. Vérifiez que les clés API Firebase sont correctes dans `firebase-config.js`
2. Vérifiez que votre projet Firebase est actif
3. Vérifiez les règles Firestore et Storage dans la console Firebase

## Règles Firebase recommandées

### Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /siteContent/{document} {
      allow read: if true;
      allow write: if request.auth != null; // Ou une condition personnalisée
    }
  }
}
```

### Storage Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null; // Ou une condition personnalisée
    }
  }
}
```

## Support

Pour toute question ou problème, consultez la documentation Firebase :
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [Firebase Storage](https://firebase.google.com/docs/storage)
