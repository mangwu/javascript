/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.1.2.2 mouseup.js                                              *
 * @Date: 2023-03-02 20:40:56                                                  *
 * @LastModifiedDate: 2023-03-06 16:26:55                                      *
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
const D = document.querySelector(".D");
const E = document.querySelector(".E");



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

A.addEventListener("mouseleave", handler);
B.addEventListener("mouseleave", handler);
C.addEventListener("mouseleave", handler);
D.addEventListener("mouseleave", handler);
E.addEventListener("mouseleave", handler);

A.addEventListener("mouseenter", handler);
B.addEventListener("mouseenter", handler);
C.addEventListener("mouseenter", handler);
D.addEventListener("mouseenter", handler);
E.addEventListener("mouseenter", handler);

A.addEventListener("mouseover", handler);
B.addEventListener("mouseover", handler);
C.addEventListener("mouseover", handler);
D.addEventListener("mouseover", handler);
E.addEventListener("mouseover", handler);

A.addEventListener("mouseout", handler);
B.addEventListener("mouseout", handler);
C.addEventListener("mouseout", handler);
D.addEventListener("mouseout", handler);
E.addEventListener("mouseout", handler);


