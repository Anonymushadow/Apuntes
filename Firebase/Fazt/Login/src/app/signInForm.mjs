import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { auth } from "./config.mjs";
import { showMessage } from "./showMessage.mjs";
const signInForm = document.querySelector("#login__form");
const signEmail = document.querySelector("#login__email");
const signPass = document.querySelector("#login__password");

signInForm.addEventListener("submit", async(e)=> {
    e.preventDefault();
    const mail = signEmail.value;
    const password = signPass.value;

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, mail, password);
        const modal = bootstrap.Modal.getInstance(document.querySelector("#signinModal"));
        modal.hide();
        showMessage("Bienvenido", "success");

    }catch(e){
        console.log(e.code)
        if(e.code === "auth/wrong-password"){
            showMessage("La contraseña es incorrecta", "err");
        }else if(e.code === "auth/user-not-found"){
            showMessage("No se encontro el usuario", "err");
        }else {
            showMessage("Hubo un error", "err");
        }
    }
});


