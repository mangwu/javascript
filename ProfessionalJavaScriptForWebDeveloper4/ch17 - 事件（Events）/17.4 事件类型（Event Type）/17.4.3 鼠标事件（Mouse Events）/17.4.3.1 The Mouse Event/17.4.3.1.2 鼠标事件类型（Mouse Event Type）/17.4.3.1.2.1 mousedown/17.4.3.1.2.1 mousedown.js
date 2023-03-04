/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.1.2.1 mousedown.js                                            *
 * @Date: 2023-03-02 17:16:24                                                  *
 * @LastModifiedDate: 2023-03-03 21:33:10                                      *
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
  <span class="base">${e.detail}</span>
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
