// ========================================
// Navigation Mobile
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
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
    'copropriete': document.getElementById('copropriete-section'),
    'professionnel': document.getElementById('professionnel-section'),
    'collectivite': document.getElementById('copropriete-section') // Utilise la même section
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
