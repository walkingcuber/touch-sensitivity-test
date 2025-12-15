// logging.js
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const loginForm = document.getElementById("login-form");
const timerSection = document.getElementById("timer-section");

// 登入按鈕
document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            loginForm.style.display = "none";
            timerSection.style.display = "block";
        })
        .catch((error) => {
            alert("登入失敗：" + error.message);
        });
});

// 登出按鈕
document.getElementById("logout-btn").addEventListener("click", () => {
    signOut(auth).then(() => {
        loginForm.style.display = "block";
        timerSection.style.display = "none";
    }).catch((error) => {
        alert("登出失敗：" + error.message);
    });
});
