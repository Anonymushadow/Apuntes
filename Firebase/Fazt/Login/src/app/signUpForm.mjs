import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { auth } from "./config.mjs";
import { showMessage } from "./showMessage.mjs";

const signUpForm = document.querySelector("#signup__form");
const signEmail = document.querySelector("#signup__email");
const signPass = document.querySelector("#signup__password");

signUpForm.addEventListener("submit", async(e)=> {
    e.preventDefault();

    const mail = signEmail.value;
    const password = signPass.value;

    //configuracion, correo, contraseña (minimo 6 caracteres)
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, mail, password);

        const modalSign = document.querySelector("#signupModal");
        const modal = bootstrap.Modal.getInstance(modalSign);
        modal.hide();
        
        showMessage("Bienvenido", "success");

    }catch(e){
        if(e.code == "auth/invalid-email") {
            showMessage("Email invalido", "err");
        }else if(e.code == "auth/weak-password") {
            showMessage("Contraseña debil", "err");
        }else if(e.code == "auth/email-already-in-use") {
            showMessage("Correo en uso", "err");
        }else{
            showMessage("Algo ha salido mal", "err");
        }
    }
});


