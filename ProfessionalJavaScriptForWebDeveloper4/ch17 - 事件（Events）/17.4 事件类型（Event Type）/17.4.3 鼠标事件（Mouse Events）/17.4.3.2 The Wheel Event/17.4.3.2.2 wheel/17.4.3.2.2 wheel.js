/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.2.2 wheel.js                                                  *
 * @Date: 2023-03-10 15:49:10                                                  *
 * @LastModifiedDate: 2023-05-05 15:17:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const log = document.querySelector(".log");
function handler(e) {
  const li = document.createElement("li");

  let innerHTML = `<span class="type">${e.type}</span>
  <span class="currentTarget">${e.currentTarget.className}</span>
  `;
  if (e.type === "wheel") {
    innerHTML += `<span class="target">${e.target.className}</span>
    <span class="base">${e.relatedTarget}</span>
    <span class="base">${e.detail}</span>
    <span class="base">${e.screenX}/${e.screenY}</span>
    <span class="base">${e.clientX}/${e.clientY}</span>
    <span class="base">${e.ctrlKey}</span>
    <span class="base">${e.button}</span>
    <span class="base">${e.buttons}</span>
    <span class="base">${e.deltaMode}</span>
    <span class="base">${e.deltaX}</span>
    <span class="base">${e.deltaY}</span>
    <span class="base">${e.deltaZ}</span>`;
  }
  li.innerHTML = innerHTML;
  log.appendChild(li);
}
box1.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    handler(e);
  },
  { passive: true }
);

box2.addEventListener("wheel", (e) => {
  e.preventDefault();
  handler(e);
});

box3.addEventListener(
  "scroll",
  (e) => {
    e.preventDefault();
    handler(e);
  },
  { passive: false }
);
document.body.addEventListener("wheel", handler);
