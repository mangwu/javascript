/*
 * @Author: mangwu                                                             *
 * @File: main3.js                                                             *
 * @Date: 2023-01-29 21:40:44                                                  *
 * @LastModifiedDate: 2023-01-29 22:35:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const box = document.querySelector("#box");
const container = document.querySelector("#container");
console.log(container);
/**
 * @description 获取元素滚动量
 * @param {HTMLElement} ele 元素
 */
function getBoxScrollDimensions(ele, target) {
  ele.textContent = `scrollHeight:${target.scrollHeight}
  \nscrollWidth:${target.scrollWidth}
  \nscrollLeft:${target.scrollLeft}
  \nscrollTop:${target.scrollTop}`;
}
getBoxScrollDimensions(box, container);

function debounce(func, delay = 100) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
let debounceFunc = debounce(() => getBoxScrollDimensions(box, container));
container.addEventListener("scroll", () => {
  debounceFunc();
});

function scrollToTop(ele) {
  if (ele.scrollTop) {
    ele.scrollTop = 0;
  }
}
