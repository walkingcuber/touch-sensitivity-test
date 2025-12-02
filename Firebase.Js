import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// Firebase 設定
export const firebaseConfig = {
    apiKey: "AIzaSyDZzacZyAXsjPfmDW6lfZYb_DSaShDmkhc",
    authDomain: "touch-sensitivity-test.firebaseapp.com",
    projectId: "touch-sensitivity-test",
    storageBucket: "touch-sensitivity-test.appspot.com",
    messagingSenderId: "109316982516",
    appId: "1:109316982516:web:927d96dddb6e171d3580a1"
};

// 初始化 Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

