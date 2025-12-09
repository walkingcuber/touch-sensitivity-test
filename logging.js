// logging.js

import { auth } from "./Firebase.Js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 確保 DOM 已載入
document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("loginBtn");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorText = document.getElementById("login-error");

    loginBtn.addEventListener("click", () => {

        const email = emailInput.value;
        const password = passwordInput.value;
        errorText.textContent = "";

        if (!email || !password) {
            errorText.textContent = "請輸入帳號與密碼！";
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                window.location.href = "Dashboard.html";
            })
            .catch(err => {
                errorText.textContent = err.message;
            });
    });
});
