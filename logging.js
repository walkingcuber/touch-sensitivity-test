// login.js
import { auth, signInWithEmailAndPassword } from './Firebase.js';

const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const loginError = document.getElementById('login-error');

loginBtn.addEventListener('click', async () => {
    const email = usernameInput.value;
    const password = passwordInput.value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        // 登入成功，跳轉到 dashboard
        window.location.href = 'dashboard.html';
    } catch (error) {
        loginError.textContent = "登入失敗：" + error.message;
    }
});
