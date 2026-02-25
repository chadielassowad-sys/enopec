@echo off
echo ========================================
echo Finalisation Configuration Firebase
echo ========================================
echo.

echo Etape 1: Verification de la connexion...
firebase projects:list

echo.
echo Etape 2: Deploiement des regles Firestore...
firebase deploy --only firestore:rules

echo.
echo Etape 3: Activation Storage (si pas encore fait)...
echo IMPORTANT: Si Storage n'est pas active, allez sur:
echo https://console.firebase.google.com/project/enopec-8beb8/storage
echo Cliquez sur "Commencer" puis "Termine"
echo.
pause

echo.
echo Etape 4: Deploiement des regles Storage...
firebase deploy --only storage:rules

echo.
echo ========================================
echo Configuration terminee!
echo ========================================
echo.
echo Vous pouvez maintenant:
echo 1. Ouvrir admin.html dans votre navigateur
echo 2. Se connecter avec le mot de passe: enopec1290
echo 3. Modifier tous les contenus du site
echo.
pause
