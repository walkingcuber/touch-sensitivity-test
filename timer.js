// timer.js
let timer = null;
let seconds = 0;

const display = document.getElementById("timer-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

function updateDisplay() {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    display.textContent = `${min}:${sec}`;
}

startBtn.addEventListener("click", () => {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateDisplay();
});

updateDisplay();

