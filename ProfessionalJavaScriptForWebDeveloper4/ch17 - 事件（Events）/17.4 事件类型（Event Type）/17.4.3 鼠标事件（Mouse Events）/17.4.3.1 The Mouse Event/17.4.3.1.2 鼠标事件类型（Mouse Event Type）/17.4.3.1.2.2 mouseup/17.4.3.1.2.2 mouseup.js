/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.1.2.2 mouseup.js                                              *
 * @Date: 2023-03-02 20:40:56                                                  *
 * @LastModifiedDate: 2023-03-02 22:56:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const log = document.querySelector("ul");

const A = document.querySelector(".A");
const B = document.querySelector(".B");

function handler(e) {
  const li = document.createElement("li");
  li.innerHTML = `<span class="type">${e.type}</span>
  <span class="target">${e.target.className}</span>
  <span class="currentTarget">${e.currentTarget.className}</span>
  <span class="base">${e.screenX}/${e.screenY}</span>
  <span class="base">${e.clientX}/${e.clientY}</span>
  <span class="base">${e.ctrlKey}</span>
  <span class="base">${e.button}</span>
  <span class="base">${e.buttons}</span>
  `;
  log.appendChild(li);
}
A.addEventListener("mousedown", (e) => {
  handler(e);
  e.preventDefault();
});
B.addEventListener("mousedown", (e) => {
  handler(e);
  e.preventDefault();
});
A.addEventListener("mouseup", (e) => {
  handler(e);
  e.preventDefault();
});
B.addEventListener("mouseup", (e) => {
  handler(e);
  e.preventDefault();
});
