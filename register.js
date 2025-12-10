document.querySelectorAll(".toggleCircle").forEach(circle => {
    circle.addEventListener("click", () => {
        const target = document.getElementById(circle.dataset.target);
        target.type = target.type === "password" ? "text" : "password";
        circle.classList.toggle("active");
    });
});

document.getElementById("registerBtn").addEventListener("click", async () => {
    const username = document.getElementById("regUser").value;
    const password = document.getElementById("regPass").value;

    if (!username || !password) {
        document.getElementById("message").textContent = "Please enter username and password!";
        return;
    }

    if(password.length < 8){
        document.getElementById("message").textContent = "Password must be at least 8 characters long.";
        return;
    }

    const encrypted = await encrypt(password);
    const userData = { username, password: encrypted };

    localStorage.setItem(username, JSON.stringify(userData));

    document.getElementById("message").textContent = "Registration successful!";
    document.getElementById("message").style.color = "green";

    document.getElementById("regUser").value = "";
    document.getElementById("regPass").value = "";
});
