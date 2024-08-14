import { signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { auth } from "./config.mjs";
export const logout = document.querySelector("#logout");

logout.addEventListener("click", async ()=> {
    // Cierra la sesion
    await signOut(auth);
    console.log("User SignOut");
});