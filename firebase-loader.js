// Script pour charger les données depuis Firebase et mettre à jour le site
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const SITE_DATA_COLLECTION = 'siteContent';

// Charger les données du site depuis Firebase
async function loadSiteContent() {
    try {
        const docRef = doc(window.firebaseDb, SITE_DATA_COLLECTION, 'content');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            const data = docSnap.data();
            updateSiteContent(data);
        } else {
            console.log('Aucune donnée trouvée dans Firebase, utilisation du contenu par défaut');
        }
    } catch (error) {
        console.error('Erreur lors du chargement des données Firebase:', error);
        // En cas d'erreur, le site utilise le contenu par défaut du HTML
    }
}

// Mettre à jour le contenu du site
function updateSiteContent(data) {
    // Hero
    if (data.hero) {
        updateElement('.hero-title', data.hero.title);
        updateElement('.hero-lead', data.hero.lead);
        if (data.hero.bgImage) {
            const heroImg = document.querySelector('.hero-bg img');
            if (heroImg) heroImg.src = data.hero.bgImage;
        }
    }
    
    // Introduction
    if (data.intro) {
        updateElement('.intro-text h2', data.intro.title);
        updateElement('.intro-sub', data.intro.subtitle);
        if (data.intro.point1) {
            const listItems = document.querySelectorAll('.intro-list li');
            if (listItems[0]) listItems[0].textContent = data.intro.point1;
            if (listItems[1]) listItems[1].textContent = data.intro.point2;
            if (listItems[2]) listItems[2].textContent = data.intro.point3;
        }
        if (data.intro.image) {
            const introImg = document.querySelector('.intro-visual img');
            if (introImg) introImg.src = data.intro.image;
        }
    }
    
    // Prestations
    if (data.prestations) {
        const sectionHead = document.querySelector('#prestations .section-head');
        if (sectionHead) {
            const h2 = sectionHead.querySelector('h2');
            const p = sectionHead.querySelector('p');
            if (h2) h2.textContent = data.prestations.title;
            if (p) p.textContent = data.prestations.description;
        }
        
        // DPE
        if (data.prestations.dpe) {
            const dpeCard = document.querySelector('[data-prestation="dpe"]');
            if (dpeCard) {
                const h3 = dpeCard.querySelector('h3');
                const p = dpeCard.querySelector('.prestation-body p');
                const img = dpeCard.querySelector('.prestation-img img');
                if (h3) h3.textContent = data.prestations.dpe.title;
                if (p) p.textContent = data.prestations.dpe.description;
                if (img && data.prestations.dpe.image) img.src = data.prestations.dpe.image;
            }
        }
        
        // Audit
        if (data.prestations.audit) {
            const auditCard = document.querySelector('[data-prestation="audit"]');
            if (auditCard) {
                const h3 = auditCard.querySelector('h3');
                const p = auditCard.querySelector('.prestation-body p');
                const img = auditCard.querySelector('.prestation-img img');
                if (h3) h3.textContent = data.prestations.audit.title;
                if (p) p.textContent = data.prestations.audit.description;
                if (img && data.prestations.audit.image) img.src = data.prestations.audit.image;
            }
        }
        
        // PPPT
        if (data.prestations.pppt) {
            const ppptCard = document.querySelector('[data-prestation="pppt"]');
            if (ppptCard) {
                const h3 = ppptCard.querySelector('h3');
                const p = ppptCard.querySelector('.prestation-body p');
                const img = ppptCard.querySelector('.prestation-img img');
                if (h3) h3.textContent = data.prestations.pppt.title;
                if (p) p.textContent = data.prestations.pppt.description;
                if (img && data.prestations.pppt.image) img.src = data.prestations.pppt.image;
            }
        }
        
        // STD
        if (data.prestations.std) {
            const stdCard = document.querySelector('[data-prestation="std"]');
            if (stdCard) {
                const h3 = stdCard.querySelector('h3');
                const p = stdCard.querySelector('.prestation-body p');
                const img = stdCard.querySelector('.prestation-img img');
                if (h3) h3.textContent = data.prestations.std.title;
                if (p) p.textContent = data.prestations.std.description;
                if (img && data.prestations.std.image) img.src = data.prestations.std.image;
            }
        }
    }
    
    // Outils
    if (data.outils) {
        const outilsHead = document.querySelector('#outils .section-head');
        if (outilsHead) {
            const h2 = outilsHead.querySelector('h2');
            const p = outilsHead.querySelector('p');
            if (h2) h2.textContent = data.outils.title;
            if (p) p.textContent = data.outils.description;
        }
        
        // RTex
        if (data.outils.rtex) {
            const outilsCards = document.querySelectorAll('.outil-card');
            if (outilsCards[0]) {
                const h3 = outilsCards[0].querySelector('h3');
                const p = outilsCards[0].querySelector('p');
                const img = outilsCards[0].querySelector('.outil-img img');
                if (h3) h3.textContent = data.outils.rtex.title;
                if (p) p.textContent = data.outils.rtex.description;
                if (img && data.outils.rtex.image) img.src = data.outils.rtex.image;
            }
        }
        
        // 3CL
        if (data.outils['3cl']) {
            const outilsCards = document.querySelectorAll('.outil-card');
            if (outilsCards[1]) {
                const h3 = outilsCards[1].querySelector('h3');
                const p = outilsCards[1].querySelector('p');
                const img = outilsCards[1].querySelector('.outil-img img');
                if (h3) h3.textContent = data.outils['3cl'].title;
                if (p) p.textContent = data.outils['3cl'].description;
                if (img && data.outils['3cl'].image) img.src = data.outils['3cl'].image;
            }
        }
        
        // STD outils
        if (data.outils.std) {
            const outilsCards = document.querySelectorAll('.outil-card');
            if (outilsCards[2]) {
                const h3 = outilsCards[2].querySelector('h3');
                const p = outilsCards[2].querySelector('p');
                const img = outilsCards[2].querySelector('.outil-img img');
                if (h3) h3.textContent = data.outils.std.title;
                if (p) p.textContent = data.outils.std.description;
                if (img && data.outils.std.image) img.src = data.outils.std.image;
            }
        }
        
        // Dimensionnement chauffage
        if (data.outils.chauffage) {
            const chauffageBlock = document.querySelector('.chauffage-block');
            if (chauffageBlock) {
                const h2 = chauffageBlock.querySelector('h2');
                const p = chauffageBlock.querySelector('.chauffage-text p');
                const img = chauffageBlock.querySelector('.chauffage-img img');
                if (h2) h2.textContent = data.outils.chauffage.title;
                if (p) p.textContent = data.outils.chauffage.description;
                if (img && data.outils.chauffage.image) img.src = data.outils.chauffage.image;
            }
        }
    }
    
    // Équipements
    if (data.equipements) {
        const equipementsHead = document.querySelector('.section-equipements .section-head');
        if (equipementsHead) {
            const h2 = equipementsHead.querySelector('h2');
            const p = equipementsHead.querySelector('p');
            if (h2) h2.textContent = data.equipements.title;
            if (p) p.textContent = data.equipements.description;
        }
        if (data.equipements.heroImage) {
            const heroImg = document.querySelector('.equipements-hero img');
            if (heroImg) heroImg.src = data.equipements.heroImage;
        }
        if (data.equipements.equipement1) {
            const equipementsList = document.querySelectorAll('.equipements-list li');
            if (equipementsList[0] && data.equipements.equipement1) {
                const parts = data.equipements.equipement1.split(' — ');
                equipementsList[0].innerHTML = `<strong>${parts[0]}</strong>${parts[1] ? ' — ' + parts[1] : ''}`;
            }
            if (equipementsList[1] && data.equipements.equipement2) {
                const parts = data.equipements.equipement2.split(' — ');
                equipementsList[1].innerHTML = `<strong>${parts[0]}</strong>${parts[1] ? ' — ' + parts[1] : ''}`;
            }
            if (equipementsList[2] && data.equipements.equipement3) {
                const parts = data.equipements.equipement3.split(' — ');
                equipementsList[2].innerHTML = `<strong>${parts[0]}</strong>${parts[1] ? ' — ' + parts[1] : ''}`;
            }
            if (equipementsList[3] && data.equipements.equipement4) {
                const parts = data.equipements.equipement4.split(' — ');
                equipementsList[3].innerHTML = `<strong>${parts[0]}</strong>${parts[1] ? ' — ' + parts[1] : ''}`;
            }
            if (equipementsList[4] && data.equipements.equipement5) {
                const parts = data.equipements.equipement5.split(' — ');
                equipementsList[4].innerHTML = `<strong>${parts[0]}</strong>${parts[1] ? ' — ' + parts[1] : ''}`;
            }
            if (equipementsList[5] && data.equipements.equipement6) {
                const parts = data.equipements.equipement6.split(' — ');
                equipementsList[5].innerHTML = `<strong>${parts[0]}</strong>${parts[1] ? ' — ' + parts[1] : ''}`;
            }
            if (equipementsList[6] && data.equipements.equipement7) {
                const parts = data.equipements.equipement7.split(' — ');
                equipementsList[6].innerHTML = `<strong>${parts[0]}</strong>${parts[1] ? ' — ' + parts[1] : ''}`;
            }
        }
    }
    
    // Qui sommes-nous
    if (data.quiSommesNous) {
        const quiSommesHead = document.querySelector('#qui-sommes-nous .section-head');
        if (quiSommesHead) {
            const h2 = quiSommesHead.querySelector('h2');
            const p = quiSommesHead.querySelector('p');
            if (h2) h2.textContent = data.quiSommesNous.title;
            if (p) p.textContent = data.quiSommesNous.description;
        }
        
        // Cartes accompagnement
        const accompagnementCards = document.querySelectorAll('.accompagnement-card');
        if (accompagnementCards.length >= 4) {
            if (data.quiSommesNous.particuliers) {
                const card = accompagnementCards[0];
                const h3 = card.querySelector('h3');
                const p = card.querySelector('p');
                const img = card.querySelector('.accompagnement-img img');
                if (h3) h3.textContent = data.quiSommesNous.particuliers.title;
                if (p) p.textContent = data.quiSommesNous.particuliers.description;
                if (img && data.quiSommesNous.particuliers.image) img.src = data.quiSommesNous.particuliers.image;
            }
            if (data.quiSommesNous.collectivite) {
                const card = accompagnementCards[1];
                const h3 = card.querySelector('h3');
                const p = card.querySelector('p');
                const img = card.querySelector('.accompagnement-img img');
                if (h3) h3.textContent = data.quiSommesNous.collectivite.title;
                if (p) p.textContent = data.quiSommesNous.collectivite.description;
                if (img && data.quiSommesNous.collectivite.image) img.src = data.quiSommesNous.collectivite.image;
            }
            if (data.quiSommesNous.copropriete) {
                const card = accompagnementCards[2];
                const h3 = card.querySelector('h3');
                const p = card.querySelector('p');
                const img = card.querySelector('.accompagnement-img img');
                if (h3) h3.textContent = data.quiSommesNous.copropriete.title;
                if (p) p.textContent = data.quiSommesNous.copropriete.description;
                if (img && data.quiSommesNous.copropriete.image) img.src = data.quiSommesNous.copropriete.image;
            }
            if (data.quiSommesNous.professionnel) {
                const card = accompagnementCards[3];
                const h3 = card.querySelector('h3');
                const p = card.querySelector('p');
                const img = card.querySelector('.accompagnement-img img');
                if (h3) h3.textContent = data.quiSommesNous.professionnel.title;
                if (p) p.textContent = data.quiSommesNous.professionnel.description;
                if (img && data.quiSommesNous.professionnel.image) img.src = data.quiSommesNous.professionnel.image;
            }
        }
        
        // Sections détaillées
        if (data.quiSommesNous.particuliers) {
            const section = document.getElementById('particuliers-section');
            if (section) {
                const h2 = section.querySelector('h2');
                const lead = section.querySelector('.lead');
                const h3 = section.querySelector('.detail-content h3');
                const p = section.querySelector('.detail-content p');
                if (h2) h2.textContent = data.quiSommesNous.particuliers.detailTitle || h2.textContent;
                if (lead) lead.textContent = data.quiSommesNous.particuliers.lead || lead.textContent;
                if (h3) h3.textContent = data.quiSommesNous.particuliers.detailSubtitle || h3.textContent;
                if (p) p.textContent = data.quiSommesNous.particuliers.detailDescription || p.textContent;
            }
        }
        if (data.quiSommesNous.collectivite) {
            const section = document.getElementById('collectivite-section');
            if (section) {
                const h2 = section.querySelector('h2');
                const lead = section.querySelector('.lead');
                const h3 = section.querySelector('.detail-content h3');
                const p = section.querySelector('.detail-content p');
                if (h2) h2.textContent = data.quiSommesNous.collectivite.detailTitle || h2.textContent;
                if (lead) lead.textContent = data.quiSommesNous.collectivite.lead || lead.textContent;
                if (h3) h3.textContent = data.quiSommesNous.collectivite.detailSubtitle || h3.textContent;
                if (p) p.textContent = data.quiSommesNous.collectivite.detailDescription || p.textContent;
            }
        }
        if (data.quiSommesNous.copropriete) {
            const section = document.getElementById('copropriete-section');
            if (section) {
                const h2 = section.querySelector('h2');
                const lead = section.querySelector('.lead');
                const h3 = section.querySelector('.detail-content h3');
                const p = section.querySelector('.detail-content p');
                if (h2) h2.textContent = data.quiSommesNous.copropriete.detailTitle || h2.textContent;
                if (lead) lead.textContent = data.quiSommesNous.copropriete.lead || lead.textContent;
                if (h3) h3.textContent = data.quiSommesNous.copropriete.detailSubtitle || h3.textContent;
                if (p) p.textContent = data.quiSommesNous.copropriete.detailDescription || p.textContent;
            }
        }
        if (data.quiSommesNous.professionnel) {
            const section = document.getElementById('professionnel-section');
            if (section) {
                const h2 = section.querySelector('h2');
                const lead = section.querySelector('.lead');
                const h3 = section.querySelector('.detail-content h3');
                const p = section.querySelector('.detail-content p');
                if (h2) h2.textContent = data.quiSommesNous.professionnel.detailTitle || h2.textContent;
                if (lead) lead.textContent = data.quiSommesNous.professionnel.lead || lead.textContent;
                if (h3) h3.textContent = data.quiSommesNous.professionnel.detailSubtitle || h3.textContent;
                if (p) p.textContent = data.quiSommesNous.professionnel.detailDescription || p.textContent;
            }
        }
    }
    
    // Méthodologie
    if (data.methodo) {
        const methodoHead = document.querySelector('.section-methodo .section-head');
        if (methodoHead) {
            const h2 = methodoHead.querySelector('h2');
            const p = methodoHead.querySelector('p');
            if (h2) h2.textContent = data.methodo.title;
            if (p) p.textContent = data.methodo.description;
        }
        
        const methodoBlocks = document.querySelectorAll('.methodo-block');
        if (methodoBlocks[0] && data.methodo.point1) {
            const ul = methodoBlocks[0].querySelector('ul');
            if (ul) {
                const items = ul.querySelectorAll('li');
                if (items[0] && data.methodo.point1) items[0].innerHTML = `<strong>${data.methodo.point1.split(' — ')[0]}</strong> — ${data.methodo.point1.split(' — ')[1] || ''}`;
                if (items[1] && data.methodo.point2) items[1].innerHTML = `<strong>${data.methodo.point2.split(' — ')[0]}</strong> — ${data.methodo.point2.split(' — ')[1] || ''}`;
                if (items[2] && data.methodo.point3) items[2].innerHTML = `<strong>${data.methodo.point3.split(' — ')[0]}</strong> — ${data.methodo.point3.split(' — ')[1] || ''}`;
                if (items[3] && data.methodo.point4) items[3].innerHTML = `<strong>${data.methodo.point4.split(' — ')[0]}</strong> — ${data.methodo.point4.split(' — ')[1] || ''}`;
            }
        }
        if (methodoBlocks[1] && data.methodo.pourquoi) {
            const ul = methodoBlocks[1].querySelector('ul');
            if (ul) {
                const items = ul.querySelectorAll('li');
                if (items[0] && data.methodo.pourquoi.point1) items[0].innerHTML = `<strong>${data.methodo.pourquoi.point1.split(' — ')[0]}</strong> — ${data.methodo.pourquoi.point1.split(' — ')[1] || ''}`;
                if (items[1] && data.methodo.pourquoi.point2) items[1].innerHTML = `<strong>${data.methodo.pourquoi.point2.split(' — ')[0]}</strong> — ${data.methodo.pourquoi.point2.split(' — ')[1] || ''}`;
                if (items[2] && data.methodo.pourquoi.point3) items[2].innerHTML = `<strong>${data.methodo.pourquoi.point3.split(' — ')[0]}</strong> — ${data.methodo.pourquoi.point3.split(' — ')[1] || ''}`;
                if (items[3] && data.methodo.pourquoi.point4) items[3].innerHTML = `<strong>${data.methodo.pourquoi.point4.split(' — ')[0]}</strong> — ${data.methodo.pourquoi.point4.split(' — ')[1] || ''}`;
            }
        }
    }
    
    // Valeurs
    if (data.valeurs) {
        const valeursHead = document.querySelector('#valeurs .section-head');
        if (valeursHead) {
            const h2 = valeursHead.querySelector('h2');
            const p = valeursHead.querySelector('p');
            if (h2) h2.textContent = data.valeurs.title;
            if (p) p.textContent = data.valeurs.description;
        }
        
        const valeurItems = document.querySelectorAll('.valeur-item');
        if (valeurItems.length >= 4) {
            if (data.valeurs.valeur1) {
                const h3 = valeurItems[0].querySelector('h3');
                const p = valeurItems[0].querySelector('p');
                if (h3) h3.textContent = data.valeurs.valeur1.title;
                if (p) p.textContent = data.valeurs.valeur1.description;
            }
            if (data.valeurs.valeur2) {
                const h3 = valeurItems[1].querySelector('h3');
                const p = valeurItems[1].querySelector('p');
                if (h3) h3.textContent = data.valeurs.valeur2.title;
                if (p) p.textContent = data.valeurs.valeur2.description;
            }
            if (data.valeurs.valeur3) {
                const h3 = valeurItems[2].querySelector('h3');
                const p = valeurItems[2].querySelector('p');
                if (h3) h3.textContent = data.valeurs.valeur3.title;
                if (p) p.textContent = data.valeurs.valeur3.description;
            }
            if (data.valeurs.valeur4) {
                const h3 = valeurItems[3].querySelector('h3');
                const p = valeurItems[3].querySelector('p');
                if (h3) h3.textContent = data.valeurs.valeur4.title;
                if (p) p.textContent = data.valeurs.valeur4.description;
            }
        }
    }
    
    // Contact
    if (data.contact) {
        // Téléphone
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(link => {
            link.textContent = data.contact.phone;
            link.href = `tel:${data.contact.phone.replace(/\s/g, '')}`;
        });
        
        // Téléphone dans le footer
        const footerPhone = document.querySelector('.footer-contact p');
        if (footerPhone && !footerPhone.querySelector('strong')) {
            footerPhone.textContent = data.contact.phone;
        }
        
        // Emails
        const commercialEmail = document.querySelector('a[href*="commercial@enopec"]');
        if (commercialEmail) {
            commercialEmail.textContent = data.contact.emailCommercial;
            commercialEmail.href = `mailto:${data.contact.emailCommercial}`;
        }
        
        const techniqueEmail = document.querySelector('a[href*="technique@enopec"]');
        if (techniqueEmail) {
            techniqueEmail.textContent = data.contact.emailTechnique;
            techniqueEmail.href = `mailto:${data.contact.emailTechnique}`;
        }
        
        // Adresse
        const addressElements = document.querySelectorAll('.contact-info-block p');
        addressElements.forEach(el => {
            if (el.textContent.includes('Mulhouse') || el.textContent.includes('Avenue') || el.textContent.includes('Robert Schuman')) {
                el.innerHTML = data.contact.address.replace(/\n/g, '<br>');
            }
        });
    }
    
    // Logo
    if (data.logo) {
        if (data.logo.header) {
            const headerLogos = document.querySelectorAll('.logo img, .nav .logo img');
            headerLogos.forEach(logo => {
                if (logo.closest('.header') || logo.closest('.nav')) {
                    logo.src = data.logo.header;
                }
            });
        }
        if (data.logo.footer) {
            const footerLogo = document.querySelector('.footer-brand img');
            if (footerLogo) footerLogo.src = data.logo.footer;
        }
        if (data.logo.contact) {
            const contactLogo = document.querySelector('.contact-info-logo img');
            if (contactLogo) contactLogo.src = data.logo.contact;
        }
    }
    
    // Footer
    if (data.footer) {
        const footerText = document.querySelector('.footer-brand p');
        if (footerText && data.footer.text) {
            footerText.textContent = data.footer.text;
        }
    }
    
    // Parchemin
    if (data.parchemin) {
        const parcheminText = document.querySelector('.parchemin-text');
        if (parcheminText) {
            const h3 = parcheminText.querySelector('h3');
            const paragraphs = parcheminText.querySelectorAll('p');
            if (h3) h3.textContent = data.parchemin.title;
            if (paragraphs[0]) paragraphs[0].textContent = data.parchemin.paragraph1;
            if (paragraphs[1]) {
                const strong = paragraphs[1].querySelector('strong');
                if (strong) {
                    paragraphs[1].innerHTML = `<strong>${strong.textContent}</strong> ${data.parchemin.paragraph2}`;
                } else {
                    paragraphs[1].textContent = data.parchemin.paragraph2;
                }
            }
        }
        if (data.parchemin.image) {
            const parcheminImg = document.querySelector('.parchemin-visual img');
            if (parcheminImg) parcheminImg.src = data.parchemin.image;
        }
    }
}

// Fonction utilitaire pour mettre à jour un élément
function updateElement(selector, content) {
    const element = document.querySelector(selector);
    if (element && content) {
        element.textContent = content;
    }
}

// Charger les données au chargement de la page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Attendre que Firebase soit initialisé
        setTimeout(loadSiteContent, 500);
    });
} else {
    setTimeout(loadSiteContent, 500);
}
