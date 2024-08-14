import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from "./config.mjs";


const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async () => {
    try {
        const provider = new GoogleAuthProvider();
        const credentials = await signInWithPopup(auth, provider);
        const modalSign = document.querySelector("#signinModal");
        const modal = bootstrap.Modal.getInstance(modalSign);
        modal.hide();
    }catch(e){
        console.log(e);
    }
})