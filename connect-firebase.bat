@echo off
echo ========================================
echo Connexion et Configuration Firebase
echo ========================================
echo.

echo Etape 1: Connexion a Firebase...
echo Un navigateur va s'ouvrir pour vous connecter...
echo.
firebase login

echo.
echo Etape 2: Selection du projet enopec-8beb8...
firebase use enopec-8beb8

if %ERRORLEVEL% EQU 0 (
    echo.
    echo Projet selectionne avec succes!
    echo.
    echo Etape 3: Verification de la configuration...
    firebase projects:list
    echo.
    echo ========================================
    echo Configuration terminee!
    echo ========================================
    echo.
    echo Prochaines etapes:
    echo 1. Activez Firestore dans la console Firebase
    echo 2. Activez Storage dans la console Firebase  
    echo 3. Deployez les regles avec les commandes suivantes:
    echo    firebase deploy --only firestore:rules
    echo    firebase deploy --only storage:rules
) else (
    echo.
    echo ERREUR: Impossible de selectionner le projet
    echo Verifiez que vous etes connecte et que le projet existe
)

echo.
pause
