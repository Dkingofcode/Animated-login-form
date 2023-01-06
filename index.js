const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const forgot = document.querySelector(".forgot-link");
const loginSect = document.querySelector(".login");
const registerSect = document.querySelector(".Register");
const forgotSect = document.querySelector(".forgot");
const closebtn = document.querySelector(".close")

register.addEventListener("click", () => {
    loginSect.style.display = "none";
    registerSect.style.display = "flex";
})

login.addEventListener("click", () => {
    registerSect.style.display = "none";
    loginSect.style.display = "flex";
})

forgot.addEventListener("click", () => {
    loginSect.style.display = "none";
    forgotSect.style.display = "flex";
})

closebtn.addEventListener("click", () => {
    forgotSect.style.display = "none";
    loginSect.style.display = "flex";
})






