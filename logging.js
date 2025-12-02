import { auth, signInWithEmailAndPassword } from './Firebase.Js';

document.getElementById("login-btn").addEventListener("click", function() {
    const email = document.getElementById("username-input").value;
    const password = document.getElementById("password-input").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // 登入成功
            window.location.href = "Dashboard.html";
        })
        .catch((error) => {
            document.getElementById("login-error").textContent = error.message;
        });
});
