<?php
/**
 * Gestionnaire de formulaire de contact - ENOPEC Ingénierie
 * 
 * Ce fichier traite les soumissions du formulaire de contact
 * et envoie les données par email.
 */

// Configuration
$config = [
    'email_destinataire' => 'contact@enopec-ingenierie.fr', // CHANGEZ cette adresse
    'sujet_email' => 'Nouveau message depuis le site ENOPEC',
    'page_succes' => 'index.html?success=1',
    'page_erreur' => 'index.html?error=1',
    'activer_copie' => true, // Envoyer une copie au visiteur
];

// Headers pour les réponses JSON
header('Content-Type: application/json; charset=utf-8');

// Vérifier que la requête est bien en POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Méthode non autorisée'
    ]);
    exit;
}

// Fonction de validation et nettoyage des données
function nettoyer($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Récupérer et nettoyer les données du formulaire
$type = isset($_POST['type']) ? nettoyer($_POST['type']) : '';
$nom = isset($_POST['nom']) ? nettoyer($_POST['nom']) : '';
$prenom = isset($_POST['prenom']) ? nettoyer($_POST['prenom']) : '';
$email = isset($_POST['email']) ? nettoyer($_POST['email']) : '';
$telephone = isset($_POST['telephone']) ? nettoyer($_POST['telephone']) : '';
$objet = isset($_POST['objet']) ? nettoyer($_POST['objet']) : '';
$message = isset($_POST['message']) ? nettoyer($_POST['message']) : '';

// Tableau des erreurs
$erreurs = [];

// Validation des champs requis
if (empty($nom)) {
    $erreurs[] = 'Le nom est requis';
}

if (empty($email)) {
    $erreurs[] = 'L\'email est requis';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $erreurs[] = 'L\'email n\'est pas valide';
}

if (empty($objet)) {
    $erreurs[] = 'L\'objet de la demande est requis';
}

if (empty($message)) {
    $erreurs[] = 'Le message est requis';
}

if (strlen($message) < 10) {
    $erreurs[] = 'Le message doit contenir au moins 10 caractères';
}

// Protection anti-spam simple
if (isset($_POST['honeypot']) && !empty($_POST['honeypot'])) {
    // Champ honeypot rempli = probable spam
    http_response_code(403);
    echo json_encode([
        'success' => false,
        'message' => 'Requête invalide'
    ]);
    exit;
}

// Si des erreurs existent, les retourner
if (!empty($erreurs)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Erreurs de validation',
        'erreurs' => $erreurs
    ]);
    exit;
}

// Construire le corps de l'email
$corps_email = "
===========================================
NOUVEAU MESSAGE DEPUIS LE SITE ENOPEC
===========================================

Type de contact : {$type}
Nom : {$nom}
Prénom : {$prenom}
Email : {$email}
Téléphone : {$telephone}
Objet : {$objet}

MESSAGE :
{$message}

===========================================
Date : " . date('d/m/Y H:i:s') . "
IP : " . $_SERVER['REMOTE_ADDR'] . "
===========================================
";

// Headers de l'email
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Tentative d'envoi de l'email
$envoi_reussi = mail(
    $config['email_destinataire'],
    $config['sujet_email'],
    $corps_email,
    $headers
);

if ($envoi_reussi) {
    // Si activé, envoyer une copie de confirmation au visiteur
    if ($config['activer_copie']) {
        $corps_confirmation = "
Bonjour {$nom},

Nous avons bien reçu votre message concernant : {$objet}

Notre équipe vous recontactera dans les plus brefs délais.

Merci de votre confiance.

Cordialement,
L'équipe ENOPEC Ingénierie

---
Ceci est un message automatique, merci de ne pas y répondre.
        ";
        
        $headers_confirmation = "From: " . $config['email_destinataire'] . "\r\n";
        $headers_confirmation .= "Reply-To: " . $config['email_destinataire'] . "\r\n";
        $headers_confirmation .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        mail(
            $email,
            "Confirmation de réception - ENOPEC Ingénierie",
            $corps_confirmation,
            $headers_confirmation
        );
    }
    
    // Log de la soumission (optionnel)
    $log_entry = date('Y-m-d H:i:s') . " - Contact de {$nom} ({$email}) - Objet: {$objet}\n";
    file_put_contents('contact_logs.txt', $log_entry, FILE_APPEND);
    
    // Retourner une réponse de succès
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Votre message a été envoyé avec succès !'
    ]);
    
} else {
    // Erreur lors de l'envoi
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
    ]);
}

// Optionnel : Sauvegarder dans une base de données
/*
try {
    $pdo = new PDO('mysql:host=localhost;dbname=enopec', 'username', 'password');
    $stmt = $pdo->prepare("
        INSERT INTO contacts (type, nom, prenom, email, telephone, objet, message, date_creation) 
        VALUES (?, ?, ?, ?, ?, ?, ?, NOW())
    ");
    $stmt->execute([$type, $nom, $prenom, $email, $telephone, $objet, $message]);
} catch(PDOException $e) {
    error_log("Erreur DB: " . $e->getMessage());
}
*/
?>
