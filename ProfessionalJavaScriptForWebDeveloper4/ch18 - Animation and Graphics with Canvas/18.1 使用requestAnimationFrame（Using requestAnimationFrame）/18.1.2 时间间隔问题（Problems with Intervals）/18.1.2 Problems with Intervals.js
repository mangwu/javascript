const currentRe = document.querySelector(".current-resolution");
const meanRe = document.querySelector(".mean-resolution");
let sum = 0;
let n = 0;
function checkTimerResolution() {
  const start = performance.now();
  setTimeout(() => {
    const end = performance.now();
    const resolution = end - start;
    sum += resolution;
    n++;
    meanRe.textContent = sum / n;
    currentRe.textContent = resolution;
  }, 0);
}

checkTimerResolution();

const btn = document.querySelector("button");
btn.addEventListener("click", () => checkTimerResolution());
