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
function randomColor() {
  const r = randomNum(0, 256);
  const g = randomNum(0, 256);
  const b = randomNum(0, 256);
  return `rgb(${r},${g},${b})`;
}

const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", (e) => {
  e.target.setAttribute("style", `background-color: ${randomColor()}`);
});
