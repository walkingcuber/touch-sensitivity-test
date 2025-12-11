// logging.js
import { auth } from "./Firebase.Js";
import { 
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.addEventListener("DOMContentLoaded", () => {

    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const loginBtn = document.getElementById("loginBtn");
    const statusText = document.getElementById("status");

    if (!loginBtn) {
        console.error("loginBtn 不存在，請檢查 index.html");
        return;
    }

    loginBtn.addEventListener("click", async () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);

            statusText.textContent = "登入成功，正在前往 Dashboard...";
            statusText.style.color = "green";

            // ⭐⭐⭐⭐⭐ 登入成功 → 轉跳到 Dashboard.html ⭐⭐⭐⭐⭐
            setTimeout(() => {
                window.location.href = "Dashboard.html";
            }, 600);

        } catch (err) {
            console.error(err);
            statusText.textContent = "登入失敗：" + err.code;
            statusText.style.color = "red";
        }
    });

});
