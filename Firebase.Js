// 初始化 Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "你的APIKEY",
    authDomain: "你的firebase專案.firebaseapp.com",
    projectId: "你的firebase專案",
    storageBucket: "你的firebase專案.appspot.com",
    messagingSenderId: "你的messagingSenderId",
    appId: "你的appId",
    measurementId: "你的measurementId"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 匯出 auth 和登入函式
export { auth, signInWithEmailAndPassword };
