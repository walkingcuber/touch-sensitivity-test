document.getElementById("login-btn").addEventListener("click", function() {
    const email = document.getElementById("username-input").value;
    const password = document.getElementById("password-input").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            // 登入成功跳轉 Dashboard
            window.location.href = "Dashboard.html";
        })
        .catch(error => {
            // 顯示錯誤訊息
            document.getElementById("login-error").textContent = error.message;
        });
});
