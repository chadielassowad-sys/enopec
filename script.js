// ========================================
// Navigation Mobile
// ========================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// ========================================
// Animation Hero Features (Énergie, Optimisation, Économie)
// ========================================
function animateHeroFeatures() {
    const features = document.querySelectorAll('.animate-feature');
    
    features.forEach((feature, index) => {
        const delay = parseInt(feature.getAttribute('data-delay'));
        setTimeout(() => {
            feature.classList.add('show');
        }, delay * 800);
    });
}

// Démarrer l'animation au chargement de la page
window.addEventListener('load', () => {
    animateHeroFeatures();
});

// ========================================
// Feature Cards Click Handler (Modal)
// ========================================
const featureContent = {
    energie: {
        title: "Énergie",
        subtitle: "Innover pour une énergie durable et performante",
        content: `
            <p>Chez ENOPEC Ingénierie, nous plaçons l'énergie au cœur de vos projets. Que ce soit pour la conception de bâtiments neufs ou la rénovation de structures existantes, notre expertise vous permet de maximiser l'efficacité énergétique tout en réduisant votre empreinte carbone. Nous vous accompagnons dans le choix des solutions les plus adaptées : isolation performante, systèmes de chauffage et de climatisation optimisés, énergies renouvelables, et bien plus encore.</p>
            
            <p>Notre objectif ? Vous offrir des bâtiments non seulement conformes aux réglementations en vigueur, mais aussi conçus pour le futur, avec une consommation énergétique maîtrisée et une qualité de vie améliorée.</p>
        `
    },
    optimisation: {
        title: "Optimisation",
        subtitle: "Optimisez vos performances, réduisez vos coûts",
        content: `
            <p>L'optimisation énergétique est un levier essentiel pour améliorer la performance de vos projets. Grâce à des outils d'analyse avancés et une approche sur mesure, nous identifions les points d'amélioration et proposons des solutions adaptées à vos besoins spécifiques.</p>
            
            <p>De l'audit énergétique à la mise en œuvre de technologies innovantes, nous vous aidons à optimiser chaque détail : gestion intelligente des flux, automatisation des systèmes, et intégration des énergies renouvelables. Avec nous, chaque projet devient une opportunité d'allier confort, durabilité et rentabilité.</p>
        `
    },
    economie: {
        title: "Économie",
        subtitle: "Réalisez des économies durables",
        content: `
            <p>Investir dans l'efficacité énergétique, c'est aussi réaliser des économies significatives sur le long terme. Notre bureau d'études vous guide pour réduire vos dépenses énergétiques sans compromettre le confort ou la qualité de vos espaces.</p>
            
            <p>Nous analysons vos consommations, identifions les sources de gaspillage et vous proposons des solutions concrètes pour diminuer vos factures. Parce qu'une gestion optimisée de l'énergie est synonyme de performance économique, nous vous aidons à transformer vos contraintes en opportunités financières.</p>
        `
    }
};

// ========================================
// Contenu détaillé des prestations (modal au clic)
// ========================================
const prestationContent = {
    dpe: {
        title: "Nos prestations de DPE",
        subtitle: "Diagnostic de Performance Énergétique",
        content: `
            <h3>1. DPE Individuel</h3>
            <p>Destiné aux maisons individuelles, ce diagnostic permet d'analyser la performance énergétique de votre logement et de vous proposer des solutions adaptées pour améliorer son efficacité (isolation, chauffage, ventilation, etc.).</p>
            
            <h3>2. DPE Collectif</h3>
            <p>Pour les copropriétés, nous réalisons un diagnostic global qui évalue la performance énergétique de l'ensemble du bâtiment. Ce rapport permet aux syndicats de copropriété de planifier des travaux collectifs pour améliorer le confort des résidents et réduire les charges énergétiques.</p>
            
            <h3>3. DPE Tertiaire</h3>
            <p>Spécifiquement conçu pour les bureaux et commerces, ce diagnostic prend en compte les spécificités des bâtiments tertiaires (climatisation, éclairage, occupation, etc.). Nous vous accompagnons pour optimiser la performance énergétique de vos locaux professionnels, tout en réduisant vos coûts d'exploitation.</p>
            
            <h3>Notre méthodologie</h3>
            <ul class="modal-list">
                <li><strong>Visite sur site :</strong> Nos experts réalisent une analyse complète de votre bâtiment (isolation, systèmes de chauffage, ventilation, etc.).</li>
                <li><strong>Collecte des données :</strong> Nous utilisons des outils performants pour mesurer et évaluer la consommation énergétique.</li>
                <li><strong>Établissement du rapport DPE :</strong> Vous recevez un document clair et détaillé, incluant une étiquette énergie (de A à G) et des recommandations personnalisées pour améliorer la performance de votre bien.</li>
                <li><strong>Accompagnement :</strong> Nous vous guidons dans la mise en œuvre des travaux recommandés, en fonction de vos objectifs et de votre budget.</li>
            </ul>
        `
    },
    audit: {
        title: "Audit Énergétique Général",
        subtitle: "Optimisez la performance énergétique de votre maison, immeuble ou local tertiaire",
        content: `
            <p>Chez ENOPEC, nous réalisons des audits énergétiques complets pour analyser en profondeur la consommation énergétique de votre bâtiment, qu'il s'agisse d'une maison individuelle, d'un immeuble ou d'un local tertiaire. Notre objectif : vous fournir une analyse précise et des recommandations concrètes pour réduire vos dépenses énergétiques, améliorer le confort de vos espaces et diminuer votre impact environnemental.</p>
            
            <h3>Pourquoi réaliser un audit énergétique ?</h3>
            <p>Un audit énergétique est une étape clé pour :</p>
            <ul class="modal-list">
                <li>Identifier les sources de gaspillage énergétique (isolation défaillante, systèmes de chauffage ou de climatisation inefficaces, etc.).</li>
                <li>Prioriser les travaux d'amélioration en fonction de leur rentabilité et de leur impact sur votre consommation.</li>
                <li>Réduire vos factures d'énergie en optimisant l'utilisation des ressources.</li>
                <li>Valoriser votre patrimoine immobilier grâce à une meilleure performance énergétique.</li>
                <li>Répondre aux exigences réglementaires et anticiper les évolutions légales (comme la réglementation environnementale RE 2020).</li>
            </ul>
            
            <h3>Notre méthodologie d'audit énergétique</h3>
            <p><strong>1. Analyse approfondie sur site</strong><br>Nos experts réalisent une visite technique détaillée de votre bâtiment pour évaluer :</p>
            <ul class="modal-list">
                <li>L'isolation (murs, toiture, fenêtres).</li>
                <li>Les systèmes de chauffage, de ventilation et de climatisation.</li>
                <li>Les équipements électriques et leur consommation.</li>
                <li>Les comportements d'usage (chauffage, éclairage, etc.).</li>
            </ul>
            <p><strong>2. Collecte et analyse des données</strong><br>Nous utilisons des outils de mesure performants (caméra thermique, logiciels de simulation, etc.) pour quantifier les pertes énergétiques et modéliser les scénarios d'amélioration.</p>
            <p><strong>3. Rapport d'audit personnalisé</strong><br>Vous recevez un document clair et détaillé, incluant :</p>
            <ul class="modal-list">
                <li>Un bilan énergétique complet de votre bâtiment.</li>
                <li>Une liste des travaux prioritaires, classés par ordre de rentabilité et d'efficacité.</li>
                <li>Des simulations de gains énergétiques et financiers après travaux.</li>
                <li>Des conseils sur les aides financières disponibles (MaPrimeRénov', CEE, éco-PTZ, etc.).</li>
            </ul>
            <p><strong>4. Accompagnement dans la mise en œuvre</strong><br>Nous vous guidons dans le choix des solutions et la planification des travaux, en collaboration avec des partenaires qualifiés si nécessaire.</p>
            
            <h3>Pour quels types de bâtiments ?</h3>
            <ul class="modal-list">
                <li><strong>Maisons individuelles :</strong> Optimisez le confort et réduisez vos factures.</li>
                <li><strong>Immeubles collectifs :</strong> Améliorez la performance énergétique globale pour le bien-être des résidents.</li>
                <li><strong>Locaux tertiaires (bureaux, commerces) :</strong> Réduisez les coûts d'exploitation et valorisez votre engagement RSE.</li>
            </ul>
            
            <h3>Pourquoi choisir ENOPEC ?</h3>
            <ul class="modal-list">
                <li><strong>Expertise certifiée :</strong> Nos auditeurs sont formés et certifiés pour réaliser des diagnostics conformes aux normes en vigueur.</li>
                <li><strong>Approche sur mesure :</strong> Chaque audit est adapté aux spécificités de votre bâtiment et à vos objectifs.</li>
                <li><strong>Transparence et pédagogie :</strong> Nous vous expliquons chaque étape et chaque recommandation de manière claire et accessible.</li>
                <li><strong>Engagement durable :</strong> Nous vous accompagnons au-delà du diagnostic, pour concrétiser vos projets d'amélioration énergétique.</li>
            </ul>
        `
    },
    pppt: {
        title: "PPPT & DTG",
        subtitle: "Planifiez et valorisez l'entretien de votre patrimoine immobilier",
        content: `
            <p>Chez ENOPEC, nous vous accompagnons dans l'évaluation technique de vos bâtiments grâce à deux outils clés : le <strong>Plan Pluriannuel de Travaux (PPPT)</strong> et le <strong>Diagnostic Technique Global (DTG)</strong>. Ces prestations vous permettent d'anticiper les travaux nécessaires pour maintenir, améliorer et valoriser votre patrimoine immobilier sur le long terme.</p>
            
            <h3>Pourquoi réaliser un PPPT ou un DTG ?</h3>
            <ul class="modal-list">
                <li><strong>Anticiper les travaux :</strong> Identifiez les interventions à prévoir sur 5, 10 ou 15 ans pour éviter les mauvaises surprises et maîtriser votre budget.</li>
                <li><strong>Optimiser la gestion de votre patrimoine :</strong> Priorisez les travaux en fonction de leur urgence et de leur impact sur la performance et la valeur de vos biens.</li>
                <li><strong>Respecter les obligations légales :</strong> Le DTG est obligatoire pour les copropriétés de plus de 10 ans. Nous vous accompagnons pour être en conformité.</li>
            </ul>
        `
    },
    std: {
        title: "Simulation Thermique Dynamique (STD)",
        subtitle: "Études avancées pour optimiser les performances énergétiques",
        content: `
            <p>Réalisez des études de simulation avancées pour prédire le comportement thermique des bâtiments en conditions réelles et optimiser leurs performances énergétiques.</p>
            
            <p>La Simulation Thermique Dynamique permet de modéliser les flux de chaleur, les consommations et le confort d'été comme d'hiver. Elle est particulièrement utile pour les projets ambitieux (bâtiments à énergie positive, rénovation lourde, tertiaire) et pour dimensionner précisément les systèmes (chauffage, climatisation, ventilation).</p>
            
            <h3>Pourquoi choisir ENOPEC ?</h3>
            <ul class="modal-list">
                <li><strong>Outils performants :</strong> Nous utilisons des logiciels de pointe pour des simulations précises.</li>
                <li><strong>Expertise technique :</strong> Nos ingénieurs maîtrisent les enjeux de la performance énergétique.</li>
                <li><strong>Solutions sur mesure :</strong> Chaque simulation est adaptée à vos besoins spécifiques.</li>
                <li><strong>Accompagnement complet :</strong> Nous vous guidons de l'analyse à la mise en œuvre des solutions.</li>
            </ul>
        `
    }
};

// Gestion des clics sur les feature cards
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.pill[data-feature]');
    const modal = document.getElementById('feature-modal');
    const modalBody = modal?.querySelector('.modal-body');
    const closeBtn = modal?.querySelector('.modal-close');
    
    function openModal(title, subtitle, content) {
        if (!modalBody || !modal) return;
        modalBody.innerHTML = `
            <h2>${title}</h2>
            <h3>${subtitle}</h3>
            ${content}
        `;
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('visible'), 10);
        document.body.style.overflow = 'hidden';
    }

    featureCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const featureType = card.getAttribute('data-feature');
            const content = featureContent[featureType];
            if (content) openModal(content.title, content.subtitle, content.content);
        });
    });

    // Clic sur les cartes prestations → ouvrir le modal avec le contenu détaillé
    const prestationCards = document.querySelectorAll('.prestation-card[data-prestation]');
    prestationCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const key = card.getAttribute('data-prestation');
            const content = prestationContent[key];
            if (content) openModal(content.title, content.subtitle, content.content);
        });
    });
    
    // Fermer le modal
    const closeModal = () => {
        if (modal) {
            modal.classList.remove('visible');
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }
    };
    
    // Bouton fermer
    closeBtn?.addEventListener('click', closeModal);
    
    // Clic sur le fond (backdrop) pour fermer
    modal?.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
            closeModal();
        }
    });
    
    // Touche Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});

// ========================================
// Scroll Animations (Fade on Scroll)
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observer tous les éléments avec la classe fade-on-scroll
document.querySelectorAll('.fade-on-scroll').forEach(el => {
    observer.observe(el);
});

// ========================================
// Animation Nos Valeurs (séquentielle)
// ========================================
function animateValeurs() {
    const valeurCards = document.querySelectorAll('.valeur-card');
    
    const valeurObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const order = parseInt(entry.target.getAttribute('data-order'));
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, (order - 1) * 300);
                valeurObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    valeurCards.forEach(card => {
        valeurObserver.observe(card);
    });
}

animateValeurs();

// ========================================
// Navigation Qui sommes-nous (toggle sections)
// ========================================
const accompagnementCards = document.querySelectorAll('.accompagnement-card');
const detailSections = {
    'particuliers': document.getElementById('particuliers-section'),
    'collectivite': document.getElementById('collectivite-section'),
    'copropriete': document.getElementById('copropriete-section'),
    'professionnel': document.getElementById('professionnel-section')
};

accompagnementCards.forEach(card => {
    const btn = card.querySelector('.btn-discover');
    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = card.getAttribute('data-target');
            
            // Masquer toutes les sections détaillées
            Object.values(detailSections).forEach(section => {
                if (section) section.classList.add('hidden');
            });
            
            // Afficher la section ciblée
            if (detailSections[target]) {
                detailSections[target].classList.remove('hidden');
                
                // Scroll vers la section
                detailSections[target].scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    }
});

// Boutons retour
document.querySelectorAll('.btn-back').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const parentSection = btn.closest('.detail-section');
        if (parentSection) {
            parentSection.classList.add('hidden');
            
            // Scroll vers la section navigation
            document.getElementById('qui-sommes-nous').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    });
});

// ========================================
// Smooth Scroll pour tous les liens d'ancre
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Ajuster pour la hauteur du header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// Animation du header au scroll
// ========================================
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        header.style.padding = '15px 0';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Gestion du formulaire de contact
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupérer les données du formulaire
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        console.log('Données du formulaire:', data);
        
        // Désactiver le bouton pendant l'envoi
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours...';
        
        // Envoyer les données au serveur PHP
        fetch('contact.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                showNotification(result.message || 'Merci pour votre message ! Nous vous recontacterons dans les plus brefs délais.', 'success');
                contactForm.reset();
            } else {
                showNotification(result.message || 'Une erreur est survenue. Veuillez réessayer.', 'error');
            }
        })
        .catch((error) => {
            console.error('Erreur:', error);
            showNotification('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.', 'error');
        })
        .finally(() => {
            // Réactiver le bouton
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
        
        // Si vous n'avez pas de serveur PHP, vous pouvez utiliser cette version simple :
        // showNotification('Merci pour votre message ! Nous vous recontacterons dans les plus brefs délais.', 'success');
        // contactForm.reset();
    });
}

// ========================================
// Système de notification
// ========================================
function showNotification(message, type = 'success') {
    // Créer l'élément notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styles inline
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.5s ease;
        font-weight: 500;
        max-width: 400px;
    `;
    
    // Ajouter au body
    document.body.appendChild(notification);
    
    // Retirer après 5 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 5000);
}

// Ajouter les animations CSS pour les notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Animation des nombres (compteur)
// ========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(start);
        }
    }, 16);
}

// Observer pour les compteurs (si vous en ajoutez)
document.querySelectorAll('[data-counter]').forEach(counter => {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-counter'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counterObserver.observe(counter);
});

// ========================================
// Parallax Effect (optionnel)
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-background');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========================================
// Lazy Loading des images (optionnel)
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Amélioration de l'accessibilité
// ========================================
// Détection du clavier pour améliorer l'accessibilité
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// ========================================
// Gestion du chargement de la page
// ========================================
window.addEventListener('load', () => {
    // Masquer le loader si vous en avez un
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
    
    // Initialiser les animations
    document.body.classList.add('loaded');
});

// ========================================
// Performance: Debounce pour le scroll
// ========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utiliser debounce pour les événements scroll intensifs
const debouncedScroll = debounce(() => {
    // Code pour les animations au scroll
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ========================================
// Console log créatif (optionnel)
// ========================================
console.log('%c🏢 ENOPEC Ingénierie', 'font-size: 24px; font-weight: bold; color: #2196F3;');
console.log('%cVotre solution pour un bâtiment performant', 'font-size: 14px; color: #757575;');
console.log('%c💡 Site web développé avec soin', 'font-size: 12px; color: #4CAF50;');

// ========================================
// Easter Egg (optionnel - amusant)
// ========================================
let konami = [];
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konami.push(e.key);
    konami = konami.slice(-konamiCode.length);
    
    if (konami.join('') === konamiCode.join('')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s linear infinite';
    showNotification('🎉 Vous avez trouvé l\'easter egg !', 'success');
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

// Ajouter l'animation rainbow
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// ========================================
// Validation du formulaire en temps réel
// ========================================
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Vérifier si le champ est requis
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Ce champ est requis';
    }
    
    // Validation email
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Email invalide';
        }
    }
    
    // Validation téléphone
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Numéro de téléphone invalide';
        }
    }
    
    // Afficher/masquer l'erreur
    if (!isValid) {
        field.classList.add('error');
        field.style.borderColor = '#f44336';
        showFieldError(field, errorMessage);
    } else {
        field.classList.remove('error');
        field.style.borderColor = '#4CAF50';
        removeFieldError(field);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    removeFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #f44336;
        font-size: 0.85rem;
        margin-top: 5px;
    `;
    
    field.parentElement.appendChild(errorDiv);
}

function removeFieldError(field) {
    const existingError = field.parentElement.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// ========================================
// Print styles (optionnel)
// ========================================
window.addEventListener('beforeprint', () => {
    console.log('Préparation pour l\'impression...');
});

// ========================================
// Dark Mode Toggle (optionnel - pour future implémentation)
// ========================================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Charger la préférence dark mode
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ========================================
// Analytics (à configurer avec votre service)
// ========================================
function trackEvent(category, action, label) {
    console.log('Event tracked:', category, action, label);
    
    // Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
}

// Tracker les clics sur les CTA
document.querySelectorAll('.btn-contact, .btn-discover, .btn-submit').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('Button', 'click', btn.textContent);
    });
});

console.log('✅ Script JavaScript chargé avec succès !');
