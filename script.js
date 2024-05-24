/*
 * @Author: mangwu                                                             *
 * @File: script.js                                                            *
 * @Date: 2024-05-23 15:44:55                                                  *
 * @LastModifiedDate: 2024-05-24 17:44:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @description 添加dirName元素的时间监听器
 */
function addDirNameListener() {
  const dirNames = document.querySelectorAll(".dir-name");
  /**
   * @description
   * @param {HTMLAllCollection} children
   */
  const opacityChange = (children, opacity = 1) => {
    for (let i = 1; i < children.length; i++) {
      const child = children[i];
      child.style.opacity = opacity;
    }
  };
  dirNames.forEach((dirName) => {
    const style = dirName.parentElement.style;
    const children = dirName.parentElement.children;
    opacityChange(children);
    dirName.addEventListener("click", () => {
      if (style.overflow !== "hidden") {
        style.height = "24px";
        style.overflow = "hidden";
        opacityChange(children, 0);
      } else {
        style.height = "auto";
        style.overflow = "";
        opacityChange(children);
      }
    });
  });
}
function smoothScrollToTargetPos(targetPosition = 0) {
  const startPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  const duration = 500; // 持续时间，单位为毫秒
  const startTime = performance.now();

  function animation(currentTime) {
    currentTime -= startTime;
    const timeRatio = Math.min(1, currentTime / duration);
    const ease = easeInOutCubic(timeRatio); // 使用缓动函数使滚动更加平滑
    const newPosition = ease * (targetPosition - startPosition) + startPosition;

    window.scrollTo(0, newPosition);

    if (timeRatio < 1) {
      requestAnimationFrame(animation);
    }
  }

  // 缓动函数，可以调整以改变滚动速度曲线
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  requestAnimationFrame(animation);
}

function addClickToTopListener() {
  const topBtn = document.querySelector(".float-btn.click-to-top");
  const bottomBtn = document.querySelector(".float-btn.click-to-bottom");
  topBtn.addEventListener("click", () => {
    smoothScrollToTargetPos();
  });
  bottomBtn.addEventListener("click", () => {
    smoothScrollToTargetPos(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    );
  });
}

function addScrollListener() {
  const topBtn = document.querySelector(".float-btn.click-to-top");
  const bottomBtn = document.querySelector(".float-btn.click-to-bottom");
  const h2 = document.querySelector("h2");
  document.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 800) {
      topBtn.style.opacity = 1;
      bottomBtn.style.opacity = 0;
      h2.style.boxShadow =
        "0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)";
    } else {
      topBtn.style.opacity = 0;
      bottomBtn.style.opacity = 1;
      h2.style.boxShadow = "";
    }
  });
}

window.addEventListener("load", () => {
  addDirNameListener(); // 添加dirName元素的时间监听器
  addClickToTopListener();
  addScrollListener();
});
