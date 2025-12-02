import { auth, signInWithEmailAndPassword } from './Firebase.Js';

const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const loginError = document.getElementById('login-error');

loginBtn.addEventListener('click', () => {
    const email = usernameInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // 登入成功，跳轉到 Dashboard
            window.location.href = 'Dashboard.html';
        })
        .catch((error) => {
            loginError.textContent = error.message;
        });
});
