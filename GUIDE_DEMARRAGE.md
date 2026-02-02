# 🚀 Guide de Démarrage Rapide - ENOPEC Ingénierie

## 📋 Checklist avant mise en ligne

### 1️⃣ Personnalisation du contenu
- [ ] Remplacer le logo dans `index.html`
- [ ] Mettre à jour les coordonnées (téléphone, email, adresse)
- [ ] Vérifier tous les textes et descriptions
- [ ] Adapter les prestations selon vos services
- [ ] Ajouter vos vraies photos (si disponibles)

### 2️⃣ Configuration du formulaire
- [ ] Choisir une solution d'envoi (PHP, EmailJS, Formspree, etc.)
- [ ] Tester l'envoi d'emails
- [ ] Configurer l'adresse de réception

### 3️⃣ SEO et référencement
- [ ] Modifier les meta descriptions
- [ ] Ajouter Google Analytics (optionnel)
- [ ] Créer un fichier `robots.txt`
- [ ] Créer un `sitemap.xml`
- [ ] Optimiser les images (compression)

### 4️⃣ Hébergement
- [ ] Choisir un hébergeur (OVH, O2Switch, Hostinger, etc.)
- [ ] Acheter un nom de domaine (ex: enopec-ingenierie.fr)
- [ ] Configurer le certificat SSL (HTTPS)
- [ ] Uploader les fichiers via FTP/SFTP

---

## 🔧 Modifications rapides

### Changer les couleurs

Ouvrez `styles.css` et modifiez les lignes 5-12 :

```css
:root {
    --primary-color: #2196F3;    /* Couleur principale */
    --secondary-color: #FF9800;  /* Couleur secondaire */
    --accent-color: #4CAF50;     /* Couleur accent */
}
```

### Changer les coordonnées

Dans `index.html`, recherchez (Ctrl+F) et remplacez :

1. **Téléphone** : `+33 1 23 45 67 89`
2. **Email** : `contact@votreentreprise.fr`
3. **Adresse** : `123 Rue Exemple, 75001 Paris`

### Ajouter/Modifier une prestation

Dans `index.html`, trouvez la section `<select id="objet">` et ajoutez/modifiez :

```html
<option value="Ma nouvelle prestation">Ma nouvelle prestation</option>
```

### Modifier le logo

Remplacez le fichier image du logo et mettez à jour le chemin dans `index.html` :

```html
<img src="votre-logo.png" alt="ENOPEC Ingénierie">
```

---

## 🌐 Mise en ligne (Hébergement)

### Option 1 : Hébergement traditionnel (recommandé)

**Fournisseurs suggérés :**
- **O2Switch** (🇫🇷 Français, excellent support) - ~5€/mois
- **OVH** (🇫🇷 Français, très connu) - ~3-10€/mois
- **Hostinger** (International, économique) - ~2-5€/mois

**Étapes :**
1. Acheter l'hébergement + domaine
2. Se connecter au FTP (FileZilla recommandé)
3. Uploader tous les fichiers du site
4. Tester le site

**Informations FTP nécessaires :**
- Hôte : ftp.votre-domaine.fr
- Utilisateur : votre-login
- Mot de passe : votre-password
- Port : 21 (ou 22 pour SFTP)

### Option 2 : Hébergement gratuit (pour tests)

**Netlify** (Gratuit, très simple) :
1. Créer un compte sur netlify.com
2. Glisser-déposer le dossier du site
3. Site en ligne en 30 secondes !

**GitHub Pages** (Gratuit) :
1. Créer un repository GitHub
2. Uploader les fichiers
3. Activer GitHub Pages dans Settings

### Option 3 : VPS (pour les experts)

**Fournisseurs :**
- DigitalOcean (~5$/mois)
- Scaleway (~3€/mois)
- AWS, Google Cloud (avec free tier)

---

## 📧 Configuration du formulaire de contact

### Solution 1 : Formspree (le plus simple, gratuit)

1. Allez sur https://formspree.io
2. Créez un compte gratuit
3. Créez un nouveau formulaire
4. Copiez le code de formulaire fourni

Dans `script.js`, remplacez ligne 175-180 :

```javascript
fetch('https://formspree.io/f/VOTRE_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    showNotification('Merci pour votre message !', 'success');
    contactForm.reset();
})
.catch((error) => {
    showNotification('Une erreur est survenue.', 'error');
});
```

### Solution 2 : EmailJS (gratuit jusqu'à 200 emails/mois)

1. Créez un compte sur https://www.emailjs.com/
2. Suivez le guide d'intégration
3. Copiez votre Service ID, Template ID, User ID

```javascript
emailjs.send("VOTRE_SERVICE_ID", "VOTRE_TEMPLATE_ID", data)
    .then(() => {
        showNotification('Message envoyé !', 'success');
    });
```

### Solution 3 : PHP (si votre hébergeur supporte PHP)

Créez un fichier `contact.php` :

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "votre-email@enopec.fr";
    $subject = "Nouveau message depuis le site";
    $body = "Nom: $nom\nEmail: $email\nMessage: $message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
```

Et dans `script.js` :

```javascript
fetch('contact.php', {
    method: 'POST',
    body: formData,
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        showNotification('Message envoyé !', 'success');
    }
});
```

---

## 🎨 Personnalisation avancée

### Ajouter une nouvelle section

```html
<section class="ma-nouvelle-section">
    <div class="container">
        <h2>Mon Titre</h2>
        <p>Mon contenu...</p>
    </div>
</section>
```

Et dans `styles.css` :

```css
.ma-nouvelle-section {
    padding: 100px 0;
    background: var(--light-gray);
}
```

### Changer les animations

Dans `styles.css`, modifiez les transitions :

```css
:root {
    --transition: all 0.5s ease; /* Plus lent */
}
```

### Ajouter des icônes (Font Awesome)

Dans le `<head>` de `index.html` :

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

Utilisation :

```html
<i class="fas fa-phone"></i> <!-- Téléphone -->
<i class="fas fa-envelope"></i> <!-- Email -->
<i class="fas fa-map-marker-alt"></i> <!-- Localisation -->
```

---

## 📊 Analytics (Google Analytics)

1. Créez un compte Google Analytics
2. Obtenez votre ID de suivi (ex: G-XXXXXXXXXX)
3. Ajoutez dans le `<head>` de `index.html` :

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

---

## 🔍 SEO : Fichiers à créer

### robots.txt

Créez un fichier `robots.txt` à la racine :

```
User-agent: *
Allow: /

Sitemap: https://votre-domaine.fr/sitemap.xml
```

### sitemap.xml

Créez un fichier `sitemap.xml` :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://votre-domaine.fr/</loc>
    <lastmod>2026-02-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 🚨 Dépannage

### Le site ne s'affiche pas correctement

1. Vérifiez que tous les fichiers sont uploadés
2. Vérifiez les chemins des fichiers CSS et JS
3. Ouvrez la console du navigateur (F12) pour voir les erreurs

### Le formulaire ne fonctionne pas

1. Vérifiez la configuration dans `script.js`
2. Testez d'abord en local
3. Vérifiez que le serveur supporte l'envoi d'emails

### Les animations ne marchent pas

1. Vérifiez que `script.js` est bien chargé
2. Ouvrez la console (F12) et regardez les erreurs
3. Testez dans un autre navigateur

---

## 📞 Besoin d'aide ?

Si vous avez besoin d'assistance pour :
- Mise en ligne du site
- Configuration du formulaire
- Modifications personnalisées
- Formation à l'utilisation

N'hésitez pas à contacter votre développeur ou à consulter les ressources en ligne.

---

## ✅ Liste de contrôle finale

Avant de mettre en ligne :

- [ ] Tous les textes sont corrects
- [ ] Les coordonnées sont à jour
- [ ] Le formulaire fonctionne
- [ ] Le site est testé sur mobile
- [ ] Le site est testé sur tous les navigateurs
- [ ] Les images sont optimisées
- [ ] Le certificat SSL est installé (HTTPS)
- [ ] Google Analytics est configuré (optionnel)
- [ ] Le site est sauvegardé

---

**Félicitations ! Votre site est prêt à être mis en ligne ! 🎉**
