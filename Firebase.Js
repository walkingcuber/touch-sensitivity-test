import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// Firebase 設定
export const firebaseConfig = {
    apiKey: "你的APIKEY",
    authDomain: "touch-sensitivity-test.firebaseapp.com",
    projectId: "touch-sensitivity-test",
    storageBucket: "touch-sensitivity-test.appspot.com",
    messagingSenderId: "你的ID",
    appId: "你的AppID"
};

// 初始化 Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

