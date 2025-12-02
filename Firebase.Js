// firebase.js
// Firebase 初始化設定

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// Firebase Config
export const firebaseConfig = {
    apiKey: "AIzaSyDZzacZyAXsjPfmDW6lfZYb_DSaShDmkhc",
    authDomain: "touch-sensitivity-test.firebaseapp.com",
    projectId: "touch-sensitivity-test",
    storageBucket: "touch-sensitivity-test.firebasestorage.app",
    messagingSenderId: "109316982516",
    appId: "1:109316982516:web:927d96dddb6e171d3580a1",
    measurementId: "G-3ZPRK4K8RD"
};

// 初始化 Firebase App
export const app = initializeApp(firebaseConfig);

// Auth 與 Firestore 實例
export const auth = getAuth(app);
export const db = getFirestore(app);
