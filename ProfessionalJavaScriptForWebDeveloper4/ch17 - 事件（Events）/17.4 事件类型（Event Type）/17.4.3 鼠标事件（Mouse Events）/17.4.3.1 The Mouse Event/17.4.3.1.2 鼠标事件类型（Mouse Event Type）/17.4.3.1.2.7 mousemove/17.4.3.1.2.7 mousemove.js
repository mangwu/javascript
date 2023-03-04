/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.1.2.2 mouseup.js                                              *
 * @Date: 2023-03-02 20:40:56                                                  *
 * @LastModifiedDate: 2023-03-05 03:05:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const log = document.querySelector("ul");

function handler(e) {
  console.log(e);
  const li = document.createElement("li");
  li.className = "log-li"
  li.innerHTML = `<span class="type">${e.type}</span>
  <span class="target">${e.target.className}</span>
  <span class="currentTarget">${
    e.currentTarget && e.currentTarget.className
  }</span>
  <span class="base">${e.detail}</span>
  <span class="base">${e.screenX}/${e.screenY}</span>
  <span class="base">${e.clientX}/${e.clientY}</span>
  <span class="base">${e.ctrlKey}</span>
  <span class="base">${e.button}</span>
  <span class="base">${e.buttons}</span>
  `;
  log.appendChild(li);
}

function debounce(func, delay = 100) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
const newHandler = debounce(handler);
document.body.addEventListener("mousemove", newHandler);
log.addEventListener("mousemove", newHandler);

