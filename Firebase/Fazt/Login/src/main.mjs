import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import "./app/signUpForm.mjs";
import "./app/logout.mjs"
import { auth, db } from "./app/config.mjs";
import { loginCheck } from "./app/loginCheck.mjs";
import "./app/signInForm.mjs";
import "./app/googleLogin.mjs";
import { setupPost } from "./app/postList.mjs";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"

// Detecta cambios en la sesion, ya sea un nuevo logeo o un cierre de sesion
onAuthStateChanged(auth, async (user)=> {
    if(user) {
        loginCheck(user);
        const posts = await getDocs(collection(db, "posts"));
        setupPost(posts.docs);
    }else{
        loginCheck(user);
        setupPost([]);
    }
});