@echo off
echo ========================================
echo Reconnexion Firebase
echo ========================================
echo.

echo Etape 1: Deconnexion...
firebase logout

echo.
echo Etape 2: Reconnexion...
echo Un navigateur va s'ouvrir pour vous connecter...
firebase login

echo.
echo Etape 3: Navigation vers le dossier du projet...
cd /d "%~dp0"

echo.
echo Etape 4: Selection du projet enopec-8beb8...
firebase use enopec-8beb8

echo.
echo Etape 5: Verification...
firebase projects:list

echo.
echo ========================================
echo Reconnexion terminee!
echo ========================================
echo.
pause
