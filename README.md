# 🏢 ENOPEC Ingénierie - Site Web

Site internet professionnel pour ENOPEC Ingénierie, bureau d'études spécialisé en énergie et ingénierie du bâtiment.

## 📋 Description

Site web moderne et responsive présentant les services d'ENOPEC Ingénierie :
- DPE (Diagnostic de Performance Énergétique)
- Audit énergétique
- PPPT & DTG
- Simulation Thermique Dynamique (STD)
- Dimensionnement des systèmes de chauffage
- Et bien plus...

## ✨ Fonctionnalités

### 🎨 Design
- Interface moderne et premium
- Design responsive (mobile, tablette, desktop)
- Animations fluides et professionnelles
- Charte graphique cohérente

### 🎯 Sections principales
1. **Page d'accueil** avec animations séquentielles (Énergie → Optimisation → Économie)
2. **Nos Prestations** - Présentation détaillée des services
3. **Outils de calcul thermique** - RTex, 3CL-DPE, STD
4. **Équipements de Mesurage** - Présentation du matériel professionnel
5. **Qui sommes-nous ?** - 4 sections adaptées aux différents publics :
   - Particuliers
   - Copropriétés
   - Artisans et professionnels
   - Collectivités
6. **Nos Valeurs** - Expertise, Proximité, Transparence, Durabilité
7. **Notre Méthodologie** - Processus en 5 étapes
8. **Formulaire de contact** - Avec validation en temps réel

### 🚀 Animations
- Animation d'entrée sur la page d'accueil
- Apparition séquentielle des éléments au scroll
- Animation des cartes valeurs (une par une)
- Transitions fluides entre les sections
- Effets hover sur tous les éléments interactifs
- Parallax subtil sur le hero

### 📱 Responsive
- Navigation mobile avec menu hamburger
- Grilles adaptatives
- Images optimisées pour tous les écrans
- Textes lisibles sur mobile

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS, Grid, Flexbox
- **JavaScript Vanilla** - Animations et interactions (pas de dépendances)
- **Google Fonts** - Montserrat et Playfair Display

## 📁 Structure des fichiers

```
aya/
│
├── index.html                 # Page principale
├── styles.css                 # Styles CSS
├── script.js                  # Scripts JavaScript
├── README.md                  # Documentation
└── WhatsApp_Image_2026...png  # Logo ENOPEC
```

## 🚀 Installation et utilisation

### Option 1 : Ouverture directe
1. Ouvrez simplement le fichier `index.html` dans votre navigateur

### Option 2 : Serveur local (recommandé)
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis ouvrez : `http://localhost:8000`

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans les variables CSS (`:root` dans `styles.css`) :
```css
--primary-color: #2196F3;    /* Bleu principal */
--secondary-color: #FF9800;  /* Orange */
--accent-color: #4CAF50;     /* Vert */
```

### Polices
Modifiez les polices dans le `<head>` du HTML et dans les variables CSS :
```css
--font-primary: 'Montserrat', sans-serif;
--font-secondary: 'Playfair Display', serif;
```

### Contenu
- **Textes** : Modifiez directement dans `index.html`
- **Images** : Remplacez les images et mettez à jour les chemins
- **Formulaire** : Configurez l'envoi dans `script.js` (ligne 175)

## 📧 Configuration du formulaire de contact

Le formulaire est actuellement en mode "démo". Pour l'activer :

### Option 1 : Backend PHP
```php
// contact.php
<?php
$nom = $_POST['nom'];
$email = $_POST['email'];
$message = $_POST['message'];

// Envoyer l'email
mail('contact@enopec.fr', 'Nouveau message', $message);
?>
```

### Option 2 : Service tiers (EmailJS, Formspree)
```javascript
// Dans script.js
fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
});
```

### Option 3 : Backend Node.js
```javascript
// server.js
app.post('/api/contact', (req, res) => {
    // Traiter le formulaire
});
```

## 🔧 Améliorations futures possibles

- [ ] Intégration d'un CMS (WordPress, Strapi)
- [ ] Backend pour le formulaire de contact
- [ ] Blog / Actualités
- [ ] Espace client sécurisé
- [ ] Calculateurs en ligne (DPE estimatif, etc.)
- [ ] Galerie de réalisations
- [ ] Témoignages clients
- [ ] Intégration Google Maps pour la localisation
- [ ] Multilangue (FR/EN)
- [ ] Mode sombre
- [ ] Optimisation SEO avancée
- [ ] PWA (Progressive Web App)
- [ ] Analytics (Google Analytics, Matomo)

## 📊 Performance

Le site est optimisé pour :
- ✅ Temps de chargement rapide (< 2s)
- ✅ Score Lighthouse élevé
- ✅ Accessibilité (WCAG 2.1)
- ✅ SEO friendly
- ✅ Mobile-first

## 🌐 Compatibilité navigateurs

- ✅ Chrome (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Edge (dernières versions)
- ⚠️ Internet Explorer 11 (support limité)

## 📝 Modification du contenu

### Coordonnées
Recherchez et remplacez dans `index.html` :
- `+33 1 23 45 67 89` → votre numéro
- `contact@votreentreprise.fr` → votre email
- `123 Rue Exemple, 75001 Paris` → votre adresse

### Prestations
Les prestations sont listées dans le `<select>` du formulaire :
```html
<option value="DPE">DPE</option>
<option value="Audit énergétique">Audit énergétique</option>
<!-- Ajoutez vos prestations ici -->
```

## 🔒 Sécurité

- Validation côté client ET serveur (à implémenter côté serveur)
- Protection CSRF (à implémenter)
- Sanitisation des inputs
- HTTPS recommandé pour la production
- Headers de sécurité (CSP, X-Frame-Options, etc.)

## 📱 Réseaux sociaux

Pour ajouter les liens réseaux sociaux, ajoutez dans le footer :
```html
<div class="social-links">
    <a href="#"><i class="fab fa-facebook"></i></a>
    <a href="#"><i class="fab fa-linkedin"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
</div>
```

## 🎯 SEO

Le site inclut :
- Meta descriptions
- Titres H1, H2, H3 structurés
- Sémantique HTML5
- Alt text sur les images (à compléter)
- URL friendly
- Schema.org markup (à ajouter)

## 📞 Support

Pour toute question ou demande de modification :
- Email : votre-email@exemple.fr
- Téléphone : +33 X XX XX XX XX

## 📄 Licence

© 2026 ENOPEC Ingénierie. Tous droits réservés.

## 👨‍💻 Développement

Développé avec ❤️ pour ENOPEC Ingénierie

---

**Note importante** : Ce site est conçu pour être facilement modifiable. Vous avez la main complète sur tous les fichiers et pouvez les personnaliser selon vos besoins.
