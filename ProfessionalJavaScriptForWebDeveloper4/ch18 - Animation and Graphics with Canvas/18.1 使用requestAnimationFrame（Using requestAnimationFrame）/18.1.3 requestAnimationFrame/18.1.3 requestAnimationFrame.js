let start, preTimeStamp; // 开始时间，上一个帧运行时间
let done = false; // 表示动画是否结束

const simpleMoveEle = document.querySelector(".simple-move");
const toRight = document.querySelector(".to-right");
const toLeft = document.querySelector(".to-left");
/**
 * @description 初始化动画需要记录的变量
 * @param {boolean} done
 */
function initailAnimate(done = false) {
  done = done;
  start = undefined;
  preTimeStamp = undefined;
}

function animateToRight(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }
  const elapsed = timeStamp - start; // 得出时间间隔
  // 因为要在2000ms内移动200px，所以每ms要移动0.1px
  if (timeStamp !== preTimeStamp) {
    const translateX = Math.min(0.1 * elapsed, 200); // 确保恰好运行到200px
    simpleMoveEle.style.transform = `translateX(${translateX}px)`;
    if (translateX === 200) {
      initailAnimate(true);
      toLeft.style.visibility = "visible";
    }
  }
  if (elapsed < 2000) {
    // 2秒后停止
    preTimeStamp = timeStamp;
    if (!done) {
      requestAnimationFrame(animateToRight);
    }
  }
}
function animateToLeft(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }
  const elapsed = timeStamp - start; // 得出时间间隔
  // 因为要在2000ms内移动200px，所以每ms要移动0.1px
  if (timeStamp !== preTimeStamp) {
    const translateX = Math.max(200 - 0.1 * elapsed, 0); // 确保恰好运行到0px
    simpleMoveEle.style.transform = `translateX(${translateX}px)`;
    if (translateX === 0) {
      initailAnimate(true);
      toRight.style.visibility = "visible";
    }
  }
  if (elapsed < 2000) {
    // 2秒后停止
    preTimeStamp = timeStamp;
    if (!done) {
      requestAnimationFrame(animateToLeft);
    }
  }
}
toRight.addEventListener("click", () => {
  toRight.style.visibility = "hidden";
  initailAnimate(false);
  requestAnimationFrame(animateToRight);
});

toLeft.addEventListener("click", () => {
  toLeft.style = visibility = "hidden";
  initailAnimate(false);
  requestAnimationFrame(animateToLeft);
});

const hiddenOrReveal = document.querySelector(".hidden-or-reveal");
let hidden = true; // 判断当前需要进行的动画操作
let zero; // 时间零点
const horDuration = 1000; // 1000ms的动画持续时间
const fadeAway = document.querySelector(".fade-away");

/**
 * @description 记录零点时间的第一帧的回调
 * @param {DOMHighResTimeStamp} timeStamp
 */
function firstFrame(timeStamp) {
  zero = timeStamp;
  animateHiddenOrReveal(timeStamp);
}
/**
 * @description 消失或显示动画
 * @param {DOMHighResTimeStamp} timeStamp
 */
function animateHiddenOrReveal(timeStamp) {
  const value = (timeStamp - zero) / horDuration;
  let opacity = hidden ? Math.max(1 - value, 0) : Math.min(value, 1);
  fadeAway.style.opacity = opacity; // 正常的动画
  // DOM更改次数
  if (value >= 0 && value <= 1) requestAnimationFrame(animateHiddenOrReveal);
  else {
    // 动画完成，切换操作
    hidden = !hidden;
    hiddenOrReveal.textContent = hidden ? "hidden" : "reveal";
    hiddenOrReveal.disabled = false;
  }
}
hiddenOrReveal.addEventListener("click", () => {
  hiddenOrReveal.disabled = true;
  requestAnimationFrame(firstFrame);
});

const rotate = document.querySelector(".rotate");
const zeroRotate = document.timeline.currentTime;
let flag = true;
requestAnimationFrame(animateRotate);
function animateRotate(timeStamp) {
  const duration = timeStamp - zeroRotate;
  if (flag) {
    flag = false;
    console.log("旋转动画，第一帧和第0帧之间的时间差:", duration); // 第一帧和第0帧之间的时间差
  }
  // 3000ms旋转一圈360°，每ms运行360 /3000 °
  const value = (duration * 0.12) % 360;
  rotate.style.transform = `rotate(${value}deg)`;
  requestAnimationFrame(animateRotate);
}
const timeShow = document.querySelector(".time-show");
const zeroTimeStamp = Date.now() - performance.now();
requestAnimationFrame(animateTime);
function animateTime() {
  const curTimeStamp = zeroTimeStamp + performance.now();
  const date = new Date(curTimeStamp);
  timeShow.textContent =
    date.toLocaleDateString() +
    " " +
    date.toLocaleTimeString() +
    " " +
    date.getMilliseconds();
  requestAnimationFrame(animateTime);
}

