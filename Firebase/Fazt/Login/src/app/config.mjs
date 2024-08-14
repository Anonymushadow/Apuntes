// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyAGP3WZMvY81tbztgi8uTdkC-WucnSrsVU",
    authDomain: "fir-tutorial-fazt.firebaseapp.com",
    projectId: "fir-tutorial-fazt",
    storageBucket: "fir-tutorial-fazt.appspot.com",
    messagingSenderId: "411209580703",
    appId: "1:411209580703:web:d6104fdd0e109ed7f5e2aa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);