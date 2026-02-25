# 🔥 Activer Firebase Storage - Guide Rapide

## ⚠️ Important

Firebase Storage doit être activé manuellement dans la console Firebase avant de pouvoir uploader des images.

## 📋 Étapes

### 1. Aller dans la console Firebase

Ouvrez votre navigateur et allez sur :
**https://console.firebase.google.com/project/enopec-8beb8/storage**

### 2. Activer Storage

1. Cliquez sur **"Commencer"** ou **"Get Started"**
2. Acceptez les règles par défaut (ou modifiez-les si nécessaire)
3. Cliquez sur **"Terminé"** ou **"Done"**

### 3. Déployer les règles Storage

Une fois Storage activé, retournez dans PowerShell et exécutez :

```powershell
firebase deploy --only storage:rules
```

Vous devriez voir :
```
+  Deploy complete!
```

## ✅ Vérification

Une fois Storage activé et les règles déployées :

1. Ouvrez `admin.html` dans votre navigateur
2. Connectez-vous avec le mot de passe : `enopec1290`
3. Essayez d'uploader une image
4. Si ça fonctionne, vous verrez "Image uploadée avec succès !"

## 🆘 Dépannage

### Erreur "Storage has not been set up"
→ Storage n'est pas encore activé. Suivez les étapes ci-dessus.

### Erreur "Permission denied"
→ Vérifiez que les règles Storage permettent l'écriture. Les règles par défaut devraient fonctionner.

### L'upload ne fonctionne pas
→ Vérifiez la console du navigateur (F12) pour voir les erreurs détaillées.
