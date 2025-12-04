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
