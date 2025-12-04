import { auth } from "./Firebase.Js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

document.getElementById("loginBtn").addEventListener("click", () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("登入成功");
            window.location.href = "Dashboard.html";
        })
        .catch((err) => {
            console.error(err);
            alert("登入失敗：" + err.message);
        });
});
