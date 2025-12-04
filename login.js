document.querySelectorAll(".toggleCircle").forEach(circle => {
    circle.addEventListener("click", () => {
        const target = document.getElementById(circle.dataset.target);
        target.type = target.type === "password" ? "text" : "password";
        circle.classList.toggle("active");
    });
});

document.getElementById("loginBtn").addEventListener("click", async () => {
    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPass").value;

    if (!username || !password) {
        document.getElementById("message").textContent = "Please enter username and password!";
        return;
    }

    const stored = localStorage.getItem(username);
    if (!stored) {
        document.getElementById("message").textContent = "User not found!";
        return;
    }

    const userData = JSON.parse(stored);
    const encrypted = await encrypt(password);

    if (encrypted === userData.password) {
        document.getElementById("message").textContent = "Login successful!";
        document.getElementById("message").style.color = "green";

        setTimeout(() => {
            window.location.href = "main.html";
        }, 1000);
    } else {
        document.getElementById("message").textContent = "Invalid password!";
        document.getElementById("message").style.color = "red";
    }
});
