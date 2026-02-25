// Script d'administration
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const ADMIN_PASSWORD = 'enopec1290';
const SITE_DATA_COLLECTION = 'siteContent';

// Vérifier l'authentification
function checkAuth() {
    const isAuthenticated = sessionStorage.getItem('admin_authenticated') === 'true';
    if (isAuthenticated) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('adminInterface').style.display = 'block';
        loadSiteData();
    }
}

// Connexion
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    
    if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('admin_authenticated', 'true');
        checkAuth();
    } else {
        showNotification('Mot de passe incorrect', 'error');
    }
});

// Déconnexion
function logout() {
    sessionStorage.removeItem('admin_authenticated');
    document.getElementById('loginScreen').style.display = 'block';
    document.getElementById('adminInterface').style.display = 'none';
    document.getElementById('password').value = '';
}

// Afficher un onglet
window.showTab = function(tabName) {
    // Masquer tous les onglets
    document.querySelectorAll('.admin-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.admin-content').forEach(content => content.classList.remove('active'));
    
    // Afficher l'onglet sélectionné
    const tabs = document.querySelectorAll('.admin-tab');
    tabs.forEach(tab => {
        if (tab.getAttribute('onclick')?.includes(tabName)) {
            tab.classList.add('active');
        }
    });
    document.getElementById(`tab-${tabName}`).classList.add('active');
}

// Charger les données du site
async function loadSiteData() {
    try {
        const docRef = doc(window.firebaseDb, SITE_DATA_COLLECTION, 'content');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            const data = docSnap.data();
            populateForm(data);
        } else {
            // Charger les données par défaut depuis le site
            await initializeDefaultData();
        }
    } catch (error) {
        console.error('Erreur lors du chargement:', error);
        showNotification('Erreur lors du chargement des données', 'error');
    }
}

// Initialiser les données par défaut
async function initializeDefaultData() {
    const defaultData = {
        hero: {
            title: "Bureau d'études en énergie & ingénierie du bâtiment",
            lead: "Conception, optimisation et performance de vos projets",
            bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        },
        intro: {
            title: "Donner du sens à la performance énergétique",
            subtitle: "Accompagnement complet en thermique et énergétique des bâtiments.",
            point1: "À l'écoute de vos besoins, usages et budget",
            point2: "Solutions sur mesure : technique, financier, environnemental",
            point3: "Réussite de votre projet : économies, confort, valorisation",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
        },
        prestations: {
            title: "Nos prestations",
            description: "Services complets pour évaluer, optimiser et dimensionner la performance énergétique des bâtiments.",
            dpe: {
                title: "DPE individuel, collectif et tertiaire",
                description: "Diagnostic de performance énergétique pour tous types de bâtiments. Cliquez pour en savoir plus.",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
            },
            audit: {
                title: "Audit énergétique général",
                description: "Analyse détaillée de la consommation pour identifier les travaux prioritaires. Cliquez pour en savoir plus.",
                image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80"
            },
            pppt: {
                title: "PPPT & DTG",
                description: "Plan pluriannuel de travaux et diagnostic technique global. Cliquez pour en savoir plus.",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
            },
            std: {
                title: "Simulation Thermique Dynamique (STD)",
                description: "Études de simulation avancées pour optimiser les performances. Cliquez pour en savoir plus.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
            }
        },
        outils: {
            title: "Outils de calcul thermique",
            description: "Outils avancés pour l'audit énergétique, l'évaluation des bâtiments et le dimensionnement thermique.",
            rtex: {
                title: "RTex",
                description: "Diagnostic énergétique complet, analyse de performance et communication réglementaire.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
            },
            '3cl': {
                title: "Méthode 3CL – DPE 2021",
                description: "Évaluation de la consommation et de l'impact environnemental selon la méthode réglementaire.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
            },
            std: {
                title: "Simulation Thermique Dynamique",
                description: "Étude du comportement énergétique en conditions réelles pour optimiser les systèmes.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=500&q=80"
            },
            chauffage: {
                title: "Dimensionnement des systèmes de chauffage",
                description: "Analyse des besoins thermiques pour déterminer la puissance optimale des équipements, assurer le confort et optimiser les consommations.",
                image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=600&q=80"
            }
        },
        equipements: {
            title: "Équipements de mesurage",
            description: "Équipements utilisés pour les diagnostics, le contrôle et l'optimisation des installations.",
            heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
            equipement1: "Jauge d'épaisseur — Vitrage et glace",
            equipement2: "Caméra thermique — Déperditions et isolation",
            equipement3: "Anémomètre — Ventilation et débits",
            equipement4: "Pince ampèremétrique — Courant, tension, continuité",
            equipement5: "Wattmètre sur prise — Consommation réelle",
            equipement6: "Luxmètre — Éclairement",
            equipement7: "Télémètre laser — Distances et relevés"
        },
        quiSommesNous: {
            title: "Notre manière de vous accompagner",
            description: "Le bâtiment, ses usages et son budget sont au cœur de chaque projet de rénovation énergétique.",
            particuliers: {
                title: "Vous êtes un particulier",
                description: "Réduire vos factures et améliorer votre confort. Ensemble, faisons le bon choix.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
                detailTitle: "Vous êtes particulier",
                lead: "Optimisons ensemble vos travaux de rénovation.",
                detailSubtitle: "Accompagner, conseiller, simplifier",
                detailDescription: "Chez ENOPEC Ingénierie, nous vous aidons à concrétiser vos projets : audit personnalisé, chiffrage des travaux, accompagnement sur les aides (MaPrimeRénov', CEE, etc.)."
            },
            collectivite: {
                title: "Vous représentez une collectivité",
                description: "Optimiser le patrimoine et accompagner la transition énergétique.",
                image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=500&q=80",
                detailTitle: "Vous représentez une collectivité",
                lead: "Optimiser le patrimoine bâti et accompagner la transition énergétique.",
                detailSubtitle: "Patrimoine et transition",
                detailDescription: "Audits énergétiques des bâtiments publics, schémas directeurs, accompagnement des travaux et mise en conformité."
            },
            copropriete: {
                title: "Vous gérez une copropriété",
                description: "Piloter les travaux et améliorer la performance énergétique.",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80",
                detailTitle: "Vous gérez une copropriété",
                lead: "Gérons efficacement vos travaux de rénovation.",
                detailSubtitle: "Analyser, proposer, simplifier",
                detailDescription: "Audit énergétique complet de l'immeuble, PPPT, DTG, DPE collectif. Nous vous aidons à prendre les bonnes décisions."
            },
            professionnel: {
                title: "Vous êtes un professionnel",
                description: "Optimiser vos bâtiments et maîtriser votre budget énergétique.",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80",
                detailTitle: "Vous êtes artisan ou professionnel",
                lead: "Une offre dédiée pour optimiser vos projets.",
                detailSubtitle: "Artisans & professionnels",
                detailDescription: "Formations, accompagnement administratif, diagnostic des consommations tertiaires et plans d'action pour le décret tertiaire."
            }
        },
        methodo: {
            title: "Notre méthodologie",
            description: "Démarche adaptée à vos besoins, norme NF EN 16247.",
            point1: "Visite sur site — Analyse complète du bâtiment (isolation, chauffage, ventilation).",
            point2: "Collecte des données — Outils performants pour mesurer et évaluer la consommation.",
            point3: "Rapport DPE — Document clair, étiquette A à G, recommandations personnalisées.",
            point4: "Accompagnement — Mise en œuvre des travaux selon vos objectifs et votre budget.",
            pourquoi: {
                point1: "Expertise reconnue — Diagnostiqueurs certifiés et formés aux dernières réglementations.",
                point2: "Approche sur mesure — Chaque diagnostic adapté à votre bâtiment.",
                point3: "Transparence — Rapport complet et compréhensible, sans jargon.",
                point4: "Engagement — Accompagnement au-delà du diagnostic pour concrétiser vos projets."
            }
        },
        valeurs: {
            title: "Nos valeurs",
            description: "Les engagements d'ENOPEC Ingénierie pour une rénovation durable et de qualité.",
            valeur1: {
                title: "Expertise et innovation",
                description: "Audits fondés sur une ingénierie de pointe et les dernières technologies."
            },
            valeur2: {
                title: "Proximité",
                description: "Un interlocuteur unique à votre écoute à chaque étape."
            },
            valeur3: {
                title: "Transparence financière",
                description: "Vision claire des coûts et des aides pour une gestion sereine."
            },
            valeur4: {
                title: "Durabilité",
                description: "Solutions respectueuses de l'environnement pour des bâtiments durables."
            }
        },
        contact: {
            phone: "+33 6 50 83 30 24",
            emailCommercial: "commercial@enopec.fr",
            emailTechnique: "technique@enopecingenierie.fr",
            address: "94 Avenue Robert Schuman\n68100 Mulhouse"
        },
        parchemin: {
            title: "Un bâtiment qui consomme trop n'est jamais le fruit du hasard",
            paragraph1: "Factures élevées, inconfort, humidité ou surchauffe sont des signes de déséquilibres entre le bâti, les équipements et les usages.",
            paragraph2: "Chez ENOPEC Ingénierie, nous réalisons des prestations indépendantes et pédagogiques pour comprendre ces phénomènes, les rendre lisibles et vous aider à prendre les bonnes décisions.",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
        },
        logo: {
            header: "Gemini_Generated_Image_6bu4s6bu4s6bu4s6-removebg-preview.png",
            footer: "Gemini_Generated_Image_6bu4s6bu4s6bu4s6-removebg-preview.png",
            contact: "Gemini_Generated_Image_6bu4s6bu4s6bu4s6-removebg-preview.png"
        },
        footer: {
            text: "Votre solution pour un bâtiment performant"
        }
    };
    
    await setDoc(doc(window.firebaseDb, SITE_DATA_COLLECTION, 'content'), defaultData);
    populateForm(defaultData);
    showNotification('Données initialisées avec succès', 'success');
}

// Remplir le formulaire avec les données
function populateForm(data) {
    // Hero
    setValue('hero-title', data.hero?.title);
    setValue('hero-lead', data.hero?.lead);
    setValue('hero-bg-image', data.hero?.bgImage);
    updatePreview('hero-bg-image', 'hero-bg-preview');
    
    // Intro
    setValue('intro-title', data.intro?.title);
    setValue('intro-subtitle', data.intro?.subtitle);
    setValue('intro-point1', data.intro?.point1);
    setValue('intro-point2', data.intro?.point2);
    setValue('intro-point3', data.intro?.point3);
    setValue('intro-image', data.intro?.image);
    updatePreview('intro-image', 'intro-image-preview');
    
    // Prestations
    setValue('prestations-title', data.prestations?.title);
    setValue('prestations-desc', data.prestations?.description);
    setValue('dpe-title', data.prestations?.dpe?.title);
    setValue('dpe-desc', data.prestations?.dpe?.description);
    setValue('dpe-image', data.prestations?.dpe?.image);
    setValue('audit-title', data.prestations?.audit?.title);
    setValue('audit-desc', data.prestations?.audit?.description);
    setValue('audit-image', data.prestations?.audit?.image);
    setValue('pppt-title', data.prestations?.pppt?.title);
    setValue('pppt-desc', data.prestations?.pppt?.description);
    setValue('pppt-image', data.prestations?.pppt?.image);
    setValue('std-title', data.prestations?.std?.title);
    setValue('std-desc', data.prestations?.std?.description);
    setValue('std-image', data.prestations?.std?.image);
    
    // Outils
    setValue('outils-title', data.outils?.title);
    setValue('outils-desc', data.outils?.description);
    setValue('rtex-title', data.outils?.rtex?.title);
    setValue('rtex-desc', data.outils?.rtex?.description);
    setValue('rtex-image', data.outils?.rtex?.image);
    setValue('3cl-title', data.outils?.['3cl']?.title);
    setValue('3cl-desc', data.outils?.['3cl']?.description);
    setValue('3cl-image', data.outils?.['3cl']?.image);
    setValue('std-outils-title', data.outils?.std?.title);
    setValue('std-outils-desc', data.outils?.std?.description);
    setValue('std-outils-image', data.outils?.std?.image);
    setValue('chauffage-title', data.outils?.chauffage?.title);
    setValue('chauffage-desc', data.outils?.chauffage?.description);
    setValue('chauffage-image', data.outils?.chauffage?.image);
    
    // Équipements
    setValue('equipements-title', data.equipements?.title);
    setValue('equipements-desc', data.equipements?.description);
    setValue('equipements-hero-image', data.equipements?.heroImage);
    setValue('equipement1', data.equipements?.equipement1);
    setValue('equipement2', data.equipements?.equipement2);
    setValue('equipement3', data.equipements?.equipement3);
    setValue('equipement4', data.equipements?.equipement4);
    setValue('equipement5', data.equipements?.equipement5);
    setValue('equipement6', data.equipements?.equipement6);
    setValue('equipement7', data.equipements?.equipement7);
    
    // Qui sommes-nous
    setValue('qui-sommes-title', data.quiSommesNous?.title);
    setValue('qui-sommes-desc', data.quiSommesNous?.description);
    setValue('particuliers-title', data.quiSommesNous?.particuliers?.title);
    setValue('particuliers-desc', data.quiSommesNous?.particuliers?.description);
    setValue('particuliers-image', data.quiSommesNous?.particuliers?.image);
    setValue('particuliers-detail-title', data.quiSommesNous?.particuliers?.detailTitle);
    setValue('particuliers-lead', data.quiSommesNous?.particuliers?.lead);
    setValue('particuliers-detail-subtitle', data.quiSommesNous?.particuliers?.detailSubtitle);
    setValue('particuliers-detail-desc', data.quiSommesNous?.particuliers?.detailDescription);
    setValue('collectivite-title', data.quiSommesNous?.collectivite?.title);
    setValue('collectivite-desc', data.quiSommesNous?.collectivite?.description);
    setValue('collectivite-image', data.quiSommesNous?.collectivite?.image);
    setValue('collectivite-detail-title', data.quiSommesNous?.collectivite?.detailTitle);
    setValue('collectivite-lead', data.quiSommesNous?.collectivite?.lead);
    setValue('collectivite-detail-subtitle', data.quiSommesNous?.collectivite?.detailSubtitle);
    setValue('collectivite-detail-desc', data.quiSommesNous?.collectivite?.detailDescription);
    setValue('copropriete-title', data.quiSommesNous?.copropriete?.title);
    setValue('copropriete-desc', data.quiSommesNous?.copropriete?.description);
    setValue('copropriete-image', data.quiSommesNous?.copropriete?.image);
    setValue('copropriete-detail-title', data.quiSommesNous?.copropriete?.detailTitle);
    setValue('copropriete-lead', data.quiSommesNous?.copropriete?.lead);
    setValue('copropriete-detail-subtitle', data.quiSommesNous?.copropriete?.detailSubtitle);
    setValue('copropriete-detail-desc', data.quiSommesNous?.copropriete?.detailDescription);
    setValue('professionnel-title', data.quiSommesNous?.professionnel?.title);
    setValue('professionnel-desc', data.quiSommesNous?.professionnel?.description);
    setValue('professionnel-image', data.quiSommesNous?.professionnel?.image);
    setValue('professionnel-detail-title', data.quiSommesNous?.professionnel?.detailTitle);
    setValue('professionnel-lead', data.quiSommesNous?.professionnel?.lead);
    setValue('professionnel-detail-subtitle', data.quiSommesNous?.professionnel?.detailSubtitle);
    setValue('professionnel-detail-desc', data.quiSommesNous?.professionnel?.detailDescription);
    
    // Méthodologie
    setValue('methodo-title', data.methodo?.title);
    setValue('methodo-desc', data.methodo?.description);
    setValue('methodo-point1', data.methodo?.point1);
    setValue('methodo-point2', data.methodo?.point2);
    setValue('methodo-point3', data.methodo?.point3);
    setValue('methodo-point4', data.methodo?.point4);
    setValue('pourquoi-point1', data.methodo?.pourquoi?.point1);
    setValue('pourquoi-point2', data.methodo?.pourquoi?.point2);
    setValue('pourquoi-point3', data.methodo?.pourquoi?.point3);
    setValue('pourquoi-point4', data.methodo?.pourquoi?.point4);
    
    // Valeurs
    setValue('valeurs-title', data.valeurs?.title);
    setValue('valeurs-desc', data.valeurs?.description);
    setValue('valeur1-title', data.valeurs?.valeur1?.title);
    setValue('valeur1-desc', data.valeurs?.valeur1?.description);
    setValue('valeur2-title', data.valeurs?.valeur2?.title);
    setValue('valeur2-desc', data.valeurs?.valeur2?.description);
    setValue('valeur3-title', data.valeurs?.valeur3?.title);
    setValue('valeur3-desc', data.valeurs?.valeur3?.description);
    setValue('valeur4-title', data.valeurs?.valeur4?.title);
    setValue('valeur4-desc', data.valeurs?.valeur4?.description);
    
    // Contact
    setValue('contact-phone', data.contact?.phone);
    setValue('contact-email-commercial', data.contact?.emailCommercial);
    setValue('contact-email-technique', data.contact?.emailTechnique);
    setValue('contact-address', data.contact?.address);
    
    // Parchemin
    setValue('parchemin-title', data.parchemin?.title);
    setValue('parchemin-p1', data.parchemin?.paragraph1);
    setValue('parchemin-p2', data.parchemin?.paragraph2);
    setValue('parchemin-image', data.parchemin?.image);
    
    // Logo
    setValue('logo-header', data.logo?.header);
    setValue('logo-footer', data.logo?.footer);
    setValue('logo-contact', data.logo?.contact);
    updatePreview('logo-header', 'logo-header-preview');
    updatePreview('logo-footer', 'logo-footer-preview');
    updatePreview('logo-contact', 'logo-contact-preview');
    
    // Footer
    setValue('footer-text', data.footer?.text);
}

function setValue(id, value) {
    const element = document.getElementById(id);
    if (element && value !== undefined) {
        element.value = value;
    }
}

function updatePreview(inputId, previewId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    if (input && preview) {
        const url = input.value;
        if (url) {
            preview.src = url;
            preview.style.display = 'block';
        } else {
            preview.style.display = 'none';
        }
    }
}

// Upload d'image
window.uploadImage = async function(uploadInputId, targetInputId) {
    const fileInput = document.getElementById(uploadInputId);
    const targetInput = document.getElementById(targetInputId);
    const previewId = targetInputId + '-preview';
    const preview = document.getElementById(previewId);
    
    if (!fileInput.files || !fileInput.files[0]) {
        showNotification('Veuillez sélectionner une image', 'error');
        return;
    }
    
    const file = fileInput.files[0];
    const fileName = `${Date.now()}_${file.name}`;
    const storageRef = ref(window.firebaseStorage, `images/${fileName}`);
    
    try {
        showNotification('Upload en cours...', 'success');
        
        // Upload du fichier
        await uploadBytes(storageRef, file);
        
        // Obtenir l'URL de téléchargement
        const downloadURL = await getDownloadURL(storageRef);
        
        // Mettre à jour le champ input
        targetInput.value = downloadURL;
        
        // Mettre à jour la prévisualisation
        if (preview) {
            preview.src = downloadURL;
            preview.style.display = 'block';
        }
        
        showNotification('Image uploadée avec succès !', 'success');
    } catch (error) {
        console.error('Erreur upload:', error);
        showNotification('Erreur lors de l\'upload de l\'image', 'error');
    }
};

// Sauvegarder toutes les modifications
window.saveAll = async function() {
    try {
        showNotification('Sauvegarde en cours...', 'success');
        
        const data = {
            hero: {
                title: document.getElementById('hero-title').value,
                lead: document.getElementById('hero-lead').value,
                bgImage: document.getElementById('hero-bg-image').value
            },
            intro: {
                title: document.getElementById('intro-title').value,
                subtitle: document.getElementById('intro-subtitle').value,
                point1: document.getElementById('intro-point1').value,
                point2: document.getElementById('intro-point2').value,
                point3: document.getElementById('intro-point3').value,
                image: document.getElementById('intro-image').value
            },
            prestations: {
                title: document.getElementById('prestations-title').value,
                description: document.getElementById('prestations-desc').value,
                dpe: {
                    title: document.getElementById('dpe-title').value,
                    description: document.getElementById('dpe-desc').value,
                    image: document.getElementById('dpe-image').value
                },
                audit: {
                    title: document.getElementById('audit-title').value,
                    description: document.getElementById('audit-desc').value,
                    image: document.getElementById('audit-image').value
                },
                pppt: {
                    title: document.getElementById('pppt-title').value,
                    description: document.getElementById('pppt-desc').value,
                    image: document.getElementById('pppt-image').value
                },
                std: {
                    title: document.getElementById('std-title').value,
                    description: document.getElementById('std-desc').value,
                    image: document.getElementById('std-image').value
                }
            },
            outils: {
                title: document.getElementById('outils-title').value,
                description: document.getElementById('outils-desc').value,
                rtex: {
                    title: document.getElementById('rtex-title')?.value || '',
                    description: document.getElementById('rtex-desc')?.value || '',
                    image: document.getElementById('rtex-image')?.value || ''
                },
                '3cl': {
                    title: document.getElementById('3cl-title')?.value || '',
                    description: document.getElementById('3cl-desc')?.value || '',
                    image: document.getElementById('3cl-image')?.value || ''
                },
                std: {
                    title: document.getElementById('std-outils-title')?.value || '',
                    description: document.getElementById('std-outils-desc')?.value || '',
                    image: document.getElementById('std-outils-image')?.value || ''
                },
                chauffage: {
                    title: document.getElementById('chauffage-title')?.value || '',
                    description: document.getElementById('chauffage-desc')?.value || '',
                    image: document.getElementById('chauffage-image')?.value || ''
                }
            },
            equipements: {
                title: document.getElementById('equipements-title').value,
                description: document.getElementById('equipements-desc').value,
                heroImage: document.getElementById('equipements-hero-image')?.value || '',
                equipement1: document.getElementById('equipement1')?.value || '',
                equipement2: document.getElementById('equipement2')?.value || '',
                equipement3: document.getElementById('equipement3')?.value || '',
                equipement4: document.getElementById('equipement4')?.value || '',
                equipement5: document.getElementById('equipement5')?.value || '',
                equipement6: document.getElementById('equipement6')?.value || '',
                equipement7: document.getElementById('equipement7')?.value || ''
            },
            quiSommesNous: {
                title: document.getElementById('qui-sommes-title')?.value || '',
                description: document.getElementById('qui-sommes-desc')?.value || '',
                particuliers: {
                    title: document.getElementById('particuliers-title')?.value || '',
                    description: document.getElementById('particuliers-desc')?.value || '',
                    image: document.getElementById('particuliers-image')?.value || '',
                    detailTitle: document.getElementById('particuliers-detail-title')?.value || '',
                    lead: document.getElementById('particuliers-lead')?.value || '',
                    detailSubtitle: document.getElementById('particuliers-detail-subtitle')?.value || '',
                    detailDescription: document.getElementById('particuliers-detail-desc')?.value || ''
                },
                collectivite: {
                    title: document.getElementById('collectivite-title')?.value || '',
                    description: document.getElementById('collectivite-desc')?.value || '',
                    image: document.getElementById('collectivite-image')?.value || '',
                    detailTitle: document.getElementById('collectivite-detail-title')?.value || '',
                    lead: document.getElementById('collectivite-lead')?.value || '',
                    detailSubtitle: document.getElementById('collectivite-detail-subtitle')?.value || '',
                    detailDescription: document.getElementById('collectivite-detail-desc')?.value || ''
                },
                copropriete: {
                    title: document.getElementById('copropriete-title')?.value || '',
                    description: document.getElementById('copropriete-desc')?.value || '',
                    image: document.getElementById('copropriete-image')?.value || '',
                    detailTitle: document.getElementById('copropriete-detail-title')?.value || '',
                    lead: document.getElementById('copropriete-lead')?.value || '',
                    detailSubtitle: document.getElementById('copropriete-detail-subtitle')?.value || '',
                    detailDescription: document.getElementById('copropriete-detail-desc')?.value || ''
                },
                professionnel: {
                    title: document.getElementById('professionnel-title')?.value || '',
                    description: document.getElementById('professionnel-desc')?.value || '',
                    image: document.getElementById('professionnel-image')?.value || '',
                    detailTitle: document.getElementById('professionnel-detail-title')?.value || '',
                    lead: document.getElementById('professionnel-lead')?.value || '',
                    detailSubtitle: document.getElementById('professionnel-detail-subtitle')?.value || '',
                    detailDescription: document.getElementById('professionnel-detail-desc')?.value || ''
                }
            },
            methodo: {
                title: document.getElementById('methodo-title')?.value || '',
                description: document.getElementById('methodo-desc')?.value || '',
                point1: document.getElementById('methodo-point1')?.value || '',
                point2: document.getElementById('methodo-point2')?.value || '',
                point3: document.getElementById('methodo-point3')?.value || '',
                point4: document.getElementById('methodo-point4')?.value || '',
                pourquoi: {
                    point1: document.getElementById('pourquoi-point1')?.value || '',
                    point2: document.getElementById('pourquoi-point2')?.value || '',
                    point3: document.getElementById('pourquoi-point3')?.value || '',
                    point4: document.getElementById('pourquoi-point4')?.value || ''
                }
            },
            valeurs: {
                title: document.getElementById('valeurs-title').value,
                description: document.getElementById('valeurs-desc').value,
                valeur1: {
                    title: document.getElementById('valeur1-title').value,
                    description: document.getElementById('valeur1-desc').value
                },
                valeur2: {
                    title: document.getElementById('valeur2-title').value,
                    description: document.getElementById('valeur2-desc').value
                },
                valeur3: {
                    title: document.getElementById('valeur3-title').value,
                    description: document.getElementById('valeur3-desc').value
                },
                valeur4: {
                    title: document.getElementById('valeur4-title').value,
                    description: document.getElementById('valeur4-desc').value
                }
            },
            contact: {
                phone: document.getElementById('contact-phone').value,
                emailCommercial: document.getElementById('contact-email-commercial').value,
                emailTechnique: document.getElementById('contact-email-technique').value,
                address: document.getElementById('contact-address').value
            },
            parchemin: {
                title: document.getElementById('parchemin-title').value,
                paragraph1: document.getElementById('parchemin-p1').value,
                paragraph2: document.getElementById('parchemin-p2').value,
                image: document.getElementById('parchemin-image').value
            },
            logo: {
                header: document.getElementById('logo-header')?.value || '',
                footer: document.getElementById('logo-footer')?.value || '',
                contact: document.getElementById('logo-contact')?.value || ''
            },
            footer: {
                text: document.getElementById('footer-text')?.value || ''
            }
        };
        
        await setDoc(doc(window.firebaseDb, SITE_DATA_COLLECTION, 'content'), data);
        showNotification('✅ Toutes les modifications ont été enregistrées !', 'success');
    } catch (error) {
        console.error('Erreur sauvegarde:', error);
        showNotification('❌ Erreur lors de la sauvegarde', 'error');
    }
};

// Afficher une notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    
    // Mettre à jour les prévisualisations quand les URLs changent
    document.querySelectorAll('input[type="text"][id$="-image"]').forEach(input => {
        input.addEventListener('input', function() {
            const previewId = this.id + '-preview';
            updatePreview(this.id, previewId);
        });
    });
});
