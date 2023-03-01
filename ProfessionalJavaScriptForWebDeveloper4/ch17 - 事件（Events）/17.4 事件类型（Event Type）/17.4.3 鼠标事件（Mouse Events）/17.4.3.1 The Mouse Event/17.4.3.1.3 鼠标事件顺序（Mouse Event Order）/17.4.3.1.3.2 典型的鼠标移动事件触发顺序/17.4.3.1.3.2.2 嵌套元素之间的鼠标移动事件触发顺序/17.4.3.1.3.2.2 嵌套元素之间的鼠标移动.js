/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.1.3.2.1 simple mouse enter and leave.js                       *
 * @Date: 2023-03-01 11:03:06                                                  *
 * @LastModifiedDate: 2023-03-01 22:34:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const log = document.querySelector("ul");

let flagA = false;
let flagB = false;
const A = document.querySelector(".A");
const B = document.querySelector(".B");

function handler(e) {
  const li = document.createElement("li");
  li.innerHTML = `<span class="type">${e.type}</span><span class="target">${e.target.className}</span><span class="currentTarget">${e.currentTarget.className}</span>`;
  log.appendChild(li);
}
A.addEventListener("mouseenter", handler);
A.addEventListener("mouseleave", handler);
A.addEventListener("mousemove", (e) => {
  if (flagA) {
    return;
  }
  handler(e);
  flagA = true;
});
A.addEventListener("mouseover", handler);
A.addEventListener("mouseout", handler);

B.addEventListener("mouseenter", handler);
B.addEventListener("mouseleave", handler);
B.addEventListener("mousemove", (e) => {
  if (flagB) {
    return;
  }
  handler(e);
  flagB = true;
});
B.addEventListener("mouseover", handler);
B.addEventListener("mouseout", handler);
