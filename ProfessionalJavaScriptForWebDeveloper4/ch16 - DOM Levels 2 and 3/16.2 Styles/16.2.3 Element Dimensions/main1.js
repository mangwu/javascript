/*
 * @Author: mangwu                                                             *
 * @File: main1.js                                                             *
 * @Date: 2023-01-29 15:11:03                                                  *
 * @LastModifiedDate: 2023-01-29 16:25:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const box = document.querySelector("#box");
const wrapper = document.querySelector("#wrapper");

/**
 * @description 获取元素偏移量
 * @param {HTMLElement} ele 元素
 */
function getBoxOffsetDimensions(ele) {
  console.log(wrapper.scrollLeft);
  ele.textContent = `offsetHeight:${ele.offsetHeight}\noffsetWidth:${ele.offsetWidth}\noffsetLeft:${ele.offsetLeft}\noffsetTop:${ele.offsetTop}`;
}
getBoxOffsetDimensions(box);

function debounce(func, delay = 100) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
let debounceFunc = debounce(() => getBoxOffsetDimensions(box));
wrapper.addEventListener("scroll", () => {
  debounceFunc();
});

/**
 * @description 获取元素相对于视口的偏移量
 * @param {HTMLElement} ele 元素
 */
function getElementLeft(ele) {
  let actualLeft = ele.offsetLeft;
  let cur = ele.offsetParent;
  while (cur) {
    actualLeft += cur.offsetLeft;
    cur = cur.offsetParent;
  }
  return actualLeft;
}
/**
 * @description 获取元素相对于视口的偏移量
 * @param {HTMLElement} ele 元素
 */
function getElementTop(ele) {
  let actualTop = ele.offsetTop;
  let cur = ele.offsetParent;
  while (cur) {
    actualTop += cur.offsetTop;
    cur = cur.offsetParent;
  }
  return actualTop;
}
/**
 * @description 获取元素相对于视口的偏移量
 * @param {HTMLElement} ele 元素
 */
function getElementOffset(ele) {
  return [getElementLeft(ele), getElementTop(ele)];
}
console.log(getElementOffset(box));
