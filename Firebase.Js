// Firebase.Js  (注意大寫 J、小寫 s)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDZzacZyAXsjPfmDW6lfZYb_DSaShDmkhc",
    authDomain: "touch-sensitivity-test.firebaseapp.com",
    projectId: "touch-sensitivity-test",
    storageBucket: "touch-sensitivity-test.firebasestorage.app",
    messagingSenderId: "109316982516",
    appId: "1:109316982516:web:927d96dddb6e171d3580a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// 讓其他 JS 能 import 這些功能
export { auth };
