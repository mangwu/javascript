const block = document.querySelector(".block");
const timeSpan = document.querySelector(".time-span");
let timer = null;
let count = 5;
setTimeSpan("Hover me and Look forward to the changes I make");
function setTimeSpan(str = count) {
  timeSpan.textContent = str;
}
block.addEventListener("mouseover", () => {
  setTimeSpan();
  timer = setInterval(() => {
    count--;
    setTimeSpan();
    if (count === 0) {
      clearInterval(timer);
      eventSimulation(); // 派发模拟的点击事件
    }
  }, 1000);
});

block.addEventListener("mouseout", () => {
  clearInterval(timer);
  setTimeSpan("Hover me and Look forward to the changes I make");
  count = 5;
});

block.addEventListener("click", (e) => {
  console.log(e);
  if (e.isTrusted) return; // 只执行不可信的模拟事件
  clearInterval(timer);
  setTimeSpan("");
  e.target.setAttribute("style", `background-color: ${randomColor(155, 256)}`);
});

function eventSimulation() {
  const evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    composed: true,
    view: window,
    detail: "模拟点击事件",
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    layerX: 0,
    layerY: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    button: 0,
    buttons: 0,
  });
  block.dispatchEvent(evt);
}

/**
 * @description [start, end)的随机整数值
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
function randomNum(start = 0, end = 2) {
  return Math.floor(Math.random() * (end - start)) + start;
}

/**
 * @description 随机颜色
 * @returns {string}
 */
function randomColor(start = 0, end = 256) {
  const r = randomNum(start, end);
  const g = randomNum(start, end);
  const b = randomNum(start, end);
  return `rgb(${r},${g},${b})`;
}
