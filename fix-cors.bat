@echo off
echo ============================================
echo  CORRECTION CORS - Firebase Storage
echo ============================================
echo.
echo Cette commande va autoriser les uploads d'images
echo depuis www.enopec.fr vers Firebase Storage.
echo.
echo Etape 1 : Connexion Google Cloud...
echo.
call gcloud auth login
echo.
echo Etape 2 : Selection du projet...
call gcloud config set project enopec-8beb8
echo.
echo Etape 3 : Application des regles CORS...
call gsutil cors set cors.json gs://enopec-8beb8.appspot.com
echo.
if %ERRORLEVEL% EQU 0 (
    echo ============================================
    echo  CORS configure avec succes !
    echo  Les uploads d'images fonctionnent mnt.
    echo ============================================
) else (
    echo ============================================
    echo  ERREUR : essayez la methode alternative
    echo  (voir ci-dessous)
    echo ============================================
    echo.
    echo Si gsutil n'est pas installe, allez sur :
    echo https://cloud.google.com/sdk/docs/install
    echo Installez Google Cloud SDK puis relancez ce script.
)
echo.
pause
