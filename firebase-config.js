// Configuration Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzsVFfE_xtHq1hnjwz1oRWY1vhggNyCB8",
  authDomain: "enopec-8beb8.firebaseapp.com",
  projectId: "enopec-8beb8",
  storageBucket: "enopec-8beb8.firebasestorage.app",
  messagingSenderId: "198792660568",
  appId: "1:198792660568:web:b6a030095117d5cebb2c2d",
  measurementId: "G-PW1D80EV3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export pour utilisation dans d'autres fichiers
window.firebaseApp = app;
window.firebaseDb = db;
window.firebaseStorage = storage;
window.firebaseAnalytics = analytics;

console.log('✅ Firebase initialisé');
