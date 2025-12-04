document.querySelectorAll(".togglePass").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.target);
        if (target.type === "password") {
            target.type = "text";
            btn.textContent = "Hide";
        } else {
            target.type = "password";
            btn.textContent = "Show";
        }
    });
});

document.getElementById("loginBtn").addEventListener("click", () => {
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;
    const msg = document.getElementById("message");

    const storedUser = localStorage.getItem("user");
    const storedPass = localStorage.getItem("pass");

    if (user === storedUser && pass === storedPass) {
        msg.textContent = "Login successful!";
        msg.style.color = "green";
    } else {
        msg.textContent = "Invalid username or password.";
        msg.style.color = "red";
    }
});
