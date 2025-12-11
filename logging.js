import { auth, signInWithEmailAndPassword } from "./firebase-config.js";

document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // 登入成功 → 前往計時器畫面
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert("登入失敗：" + error.message);
        });
});
