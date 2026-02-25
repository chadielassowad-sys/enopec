# 🔄 Guide de Reconnexion Firebase

## Problème
Vous êtes connecté mais les credentials ont expiré ou vous n'êtes pas dans le bon répertoire.

## Solution : Se reconnecter

### Option 1 : Script automatique (Recommandé)

Double-cliquez sur **`reconnect-firebase.bat`**

### Option 2 : Commandes manuelles

Dans PowerShell, exécutez ces commandes **dans l'ordre** :

#### 1. Aller dans le dossier du projet
```powershell
cd C:\Users\chadi\enopec
```

#### 2. Se déconnecter (optionnel, pour être sûr)
```powershell
firebase logout
```

#### 3. Se reconnecter
```powershell
firebase login
```
→ Un navigateur s'ouvrira, connectez-vous avec votre compte Google

#### 4. Sélectionner le projet
```powershell
firebase use enopec-8beb8
```

#### 5. Vérifier que ça fonctionne
```powershell
firebase projects:list
```

## ✅ Vérification

Si tout fonctionne, vous devriez voir :
- `Now using project enopec-8beb8`
- La liste de vos projets Firebase

## 🚀 Prochaines étapes

Une fois reconnecté, vous pouvez :

1. **Activer Firestore** dans la console : https://console.firebase.google.com/project/enopec-8beb8/firestore
2. **Activer Storage** dans la console : https://console.firebase.google.com/project/enopec-8beb8/storage
3. **Déployer les règles** :
   ```powershell
   firebase deploy --only firestore:rules
   firebase deploy --only storage:rules
   ```
