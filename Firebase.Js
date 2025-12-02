// Firebase 初始化
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDZzacZyAXsjPfmDW6lfZYb_DSaShDmkhc",
    authDomain: "touch-sensitivity-test.firebaseapp.com",
    projectId: "touch-sensitivity-test",
    storageBucket: "touch-sensitivity-test.appspot.com",
    messagingSenderId: "109316982516",
    appId: "1:109316982516:web:927d96dddb6e171d3580a1",
    measurementId: "G-3ZPRK4K8RD"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
