document.querySelectorAll(".toggleCircle").forEach(circle => {
    circle.addEventListener("click", () => {
        const target = document.getElementById(circle.dataset.target);

        if (target.type === "password") {
            target.type = "text";
            circle.classList.add("active");
        } else {
            target.type = "password";
            circle.classList.remove("active");
        }
    });
});


document.getElementById("registerBtn").addEventListener("click", () => {
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;
    const msg = document.getElementById("message");

    if (user === "" || pass === "") {
        msg.textContent = "All fields required.";
        msg.style.color = "red";
        return;
    }

    if (pass.length < 8) {
        msg.textContent = "Password must be at least 8 characters.";
        msg.style.color = "red";
        return;
    }

    // Store in localStorage for demo
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    msg.textContent = "Registration successful! Redirecting...";
    msg.style.color = "green";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
});
