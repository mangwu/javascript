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
