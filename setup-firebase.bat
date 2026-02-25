@echo off
echo ========================================
echo Configuration Firebase - ENOPEC
echo ========================================
echo.

echo Etape 1: Connexion a Firebase...
echo Veuillez vous connecter dans votre navigateur qui va s'ouvrir...
firebase login

echo.
echo Etape 2: Selection du projet...
firebase use enopec-8beb8

echo.
echo Etape 3: Deploiement des regles Firestore...
firebase deploy --only firestore:rules

echo.
echo Etape 4: Deploiement des regles Storage...
firebase deploy --only storage:rules

echo.
echo ========================================
echo Configuration terminee!
echo ========================================
echo.
echo Vous pouvez maintenant utiliser admin.html
pause
