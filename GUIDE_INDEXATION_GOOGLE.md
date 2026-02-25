# 🔍 Guide d'Indexation Google - ENOPEC Ingénierie

## ✅ Fichiers créés pour le SEO

1. **`robots.txt`** - Indique aux robots d'indexation quelles pages indexer
2. **`sitemap.xml`** - Plan du site pour Google
3. **Meta tags SEO** - Ajoutés dans `index.html`
4. **Schema.org** - Données structurées pour Google

## 📋 Étapes pour indexer le site sur Google

### 1️⃣ Vérifier que le site est en ligne

Assurez-vous que votre site est accessible en ligne avec :
- Un nom de domaine (ex: `enopec-ingenierie.fr`)
- HTTPS activé (certificat SSL)

### 2️⃣ Créer un compte Google Search Console

1. Allez sur : https://search.google.com/search-console
2. Cliquez sur **"Démarrer"**
3. Connectez-vous avec votre compte Google
4. Ajoutez votre propriété (votre site web)

### 3️⃣ Vérifier la propriété du site

**Option A : Méthode HTML (Recommandée)**

1. Dans Google Search Console, choisissez **"Balise HTML"**
2. Copiez le code fourni (ex: `<meta name="google-site-verification" content="...">`)
3. Ajoutez-le dans le `<head>` de `index.html`
4. Cliquez sur **"Vérifier"**

**Option B : Fichier HTML**

1. Téléchargez le fichier HTML fourni par Google
2. Uploadez-le à la racine de votre site
3. Cliquez sur **"Vérifier"**

**Option C : DNS**

1. Ajoutez un enregistrement TXT dans votre DNS
2. Cliquez sur **"Vérifier"**

### 4️⃣ Soumettre le sitemap

Une fois la propriété vérifiée :

1. Dans Google Search Console, allez dans **"Sitemaps"** (menu de gauche)
2. Entrez : `sitemap.xml`
3. Cliquez sur **"Envoyer"**

### 5️⃣ Demander l'indexation

1. Dans Google Search Console, allez dans **"Inspection d'URL"**
2. Entrez l'URL de votre page d'accueil
3. Cliquez sur **"Demander l'indexation"**

## 🔧 Configuration des fichiers

### robots.txt

Le fichier `robots.txt` est déjà créé et configuré. Il :
- Autorise tous les robots à indexer le site
- Bloque l'indexation de l'admin et des pages d'erreur
- Indique l'emplacement du sitemap

### sitemap.xml

Le fichier `sitemap.xml` est créé avec toutes les sections importantes. 

**⚠️ Important :** Modifiez les URLs dans `sitemap.xml` pour correspondre à votre nom de domaine réel.

Recherchez et remplacez :
- `https://www.enopec-ingenierie.fr` → Votre domaine réel
- `2026-02-25` → Date actuelle

### Meta tags

Les meta tags SEO sont déjà ajoutés dans `index.html` :
- ✅ Title optimisé
- ✅ Description optimisée
- ✅ Keywords
- ✅ Open Graph (Facebook)
- ✅ Twitter Cards
- ✅ Schema.org (données structurées)

## 📊 Améliorer le référencement

### 1. Ajouter Google Analytics (optionnel mais recommandé)

Dans le `<head>` de `index.html`, ajoutez :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Remplacez `G-XXXXXXXXXX` par votre ID Google Analytics.

### 2. Optimiser les images

- Ajoutez des attributs `alt` descriptifs à toutes les images
- Compressez les images (utilisez TinyPNG.com)
- Utilisez des formats modernes (WebP)

### 3. Améliorer la vitesse de chargement

- Optimisez les images
- Minifiez le CSS et JavaScript
- Activez la mise en cache

### 4. Créer du contenu de qualité

- Ajoutez régulièrement du nouveau contenu
- Créez un blog (optionnel)
- Obtenez des backlinks de qualité

## 🎯 Mots-clés ciblés

Votre site est optimisé pour :
- DPE Mulhouse
- Audit énergétique Mulhouse
- Bureau d'études énergie Alsace
- Diagnostic performance énergétique
- Rénovation énergétique Mulhouse
- PPPT copropriété
- Simulation thermique dynamique

## ⏱️ Délais d'indexation

- **Première indexation** : 1 à 7 jours
- **Mise à jour du contenu** : 1 à 3 jours
- **Nouvelles pages** : 1 à 5 jours

## 📈 Suivre les performances

Dans Google Search Console, vous pouvez suivre :
- Nombre de pages indexées
- Requêtes de recherche
- Clics et impressions
- Position moyenne dans les résultats

## 🆘 Dépannage

### Le site n'est pas indexé après 2 semaines

1. Vérifiez que le sitemap est bien soumis
2. Vérifiez que `robots.txt` n'bloque pas l'indexation
3. Vérifiez qu'il n'y a pas d'erreurs dans Google Search Console
4. Assurez-vous que le site est accessible publiquement

### Erreur "Sitemap vide"

→ Vérifiez que les URLs dans `sitemap.xml` correspondent à votre domaine réel

### Erreur "robots.txt bloque l'indexation"

→ Vérifiez que `robots.txt` contient `Allow: /`

## ✅ Checklist finale

- [ ] Site en ligne avec HTTPS
- [ ] `robots.txt` uploadé à la racine
- [ ] `sitemap.xml` uploadé à la racine (avec les bonnes URLs)
- [ ] Site vérifié dans Google Search Console
- [ ] Sitemap soumis dans Google Search Console
- [ ] Demande d'indexation effectuée
- [ ] Google Analytics configuré (optionnel)

## 📞 Support

Pour toute question sur l'indexation :
- Documentation Google Search Console : https://support.google.com/webmasters
- Documentation SEO : https://developers.google.com/search/docs
