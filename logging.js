// logging.js
import { auth } from "./Firebase.Js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const loginForm = document.getElementById("login-form");
const timerSection = document.getElementById("timer-section");

document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // 登入成功 → 顯示計時器、隱藏登入表單
            loginForm.style.display = "none";
            timerSection.style.display = "block";
        })
        .catch((error) => {
            alert("登入失敗：" + error.message);
        });
});

document.getElementById("logout-btn").addEventListener("click", () => {
    auth.signOut().then(() => {
        loginForm.style.display = "block";
        timerSection.style.display = "none";
    });
});
