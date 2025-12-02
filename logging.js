// login.js
import { auth } from "/touch-sensitivity-test/firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// 綁定 UI 元件
const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");
const errorBox = document.getElementById("login-error");

// 登入處理
loginBtn.addEventListener("click", async () => {
    const email = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    errorBox.textContent = ""; // 清除舊的錯誤訊息

    if (!email || !password) {
        errorBox.textContent = "請輸入帳號與密碼";
        return;
    }

    try {
        await signInWithEmailAndPassword(auth, email, password);

        // 登入成功 → 跳轉儀表板
        window.location.href = "/touch-sensitivity-test/dashboard.html";

    } catch (err) {
        console.error(err);

        // 顯示錯誤訊息
        switch (err.code) {
            case "auth/invalid-email":
                errorBox.textContent = "Email 格式不正確";
                break;

            case "auth/user-not-found":
                errorBox.textContent = "此帳號不存在";
                break;

            case "auth/wrong-password":
                errorBox.textContent = "密碼錯誤";
                break;

            case "auth/too-many-requests":
                errorBox.textContent = "登入次數過多，請稍後再試";
                break;

            case "auth/invalid-credential":
                errorBox.textContent = "帳號或密碼錯誤";
                break;

            default:
                errorBox.textContent = `錯誤：${err.message}`;
                break;
        }
    }
});
