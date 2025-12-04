// Pomodoro.js

let timer;
let timeLeft = 1500; // default 25 mins

const timerDisplay = document.getElementById("timer");

const MODES = {
    pomodoro: 1500,       // 25:00
    long: 900,             // 15:00
    short: 300           // 5:00
};

// Change mode buttons
document.querySelectorAll(".mode_btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".mode_btn.active").classList.remove("active");
        btn.classList.add("active");

        const mode = btn.dataset.mode;
        timeLeft = MODES[mode];
        updateTimer();
        clearInterval(timer);
    });
});

// Start
document.getElementById("startBtn").addEventListener("click", () => {
    clearInterval(timer);
    timer = setInterval(countdown, 1000);
});

// Pause
document.getElementById("pauseBtn").addEventListener("click", () => {
    clearInterval(timer);
});

// Restart
document.getElementById("restartBtn").addEventListener("click", () => {
    const activeMode = document.querySelector(".mode_btn.active").dataset.mode;
    timeLeft = MODES[activeMode];
    updateTimer();
    clearInterval(timer);
});

// countdown logic
function countdown() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        return;
    }
    timeLeft--;
    updateTimer();
}

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
