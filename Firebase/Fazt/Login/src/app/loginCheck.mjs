const loggedOut = document.querySelectorAll(".logged-out");
const loggedIn = document.querySelectorAll(".logged-in");

export const loginCheck = (user)=> {
    if(user) {
        loggedOut.forEach(element => element.style.display = "none");
        loggedIn.forEach(element => element.style.display = "block");
    }else{
        loggedOut.forEach(element => element.style.display = "block");
        loggedIn.forEach(element => element.style.display = "none");
    }
}