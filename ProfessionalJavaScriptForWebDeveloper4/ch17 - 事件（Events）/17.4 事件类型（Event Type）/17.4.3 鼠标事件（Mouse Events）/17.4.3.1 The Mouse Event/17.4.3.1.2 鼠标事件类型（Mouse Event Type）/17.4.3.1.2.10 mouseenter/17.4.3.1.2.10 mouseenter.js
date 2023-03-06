/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.1.2.2 mouseup.js                                              *
 * @Date: 2023-03-02 20:40:56                                                  *
 * @LastModifiedDate: 2023-03-06 13:48:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const A = document.querySelector(".A");
const B = document.querySelector(".B");
const C = document.querySelector(".C");

const log = document.querySelector(".log");

function handler(e) {
  const li = document.createElement("li");
  li.className = "log-li";
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
  <span class="base">${e.relatedTarget.className}</span>
  `;
  log.appendChild(li);
}

A.addEventListener("mouseenter", handler);
B.addEventListener("mouseenter", handler);
C.addEventListener("mouseenter", handler);

