/*
 * @Author: mangwu                                                             *
 * @File: DOMActivate and Click.js                                             *
 * @Date: 2023-06-09 10:47:06                                                  *
 * @LastModifiedDate: 2023-06-09 11:21:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const log = document.querySelector(".log");
const a = document.querySelector("a");
const input = document.querySelector("input");
let checked = false;
input.addEventListener("click", (e) => {
  checked = e.target.checked;
});

const handleEvent = (e) => {
  const div = document.createElement("div");
  div.className = "grid-layout";
  div.innerHTML = `<div class="base type">${e.type}</div>
  <div class="base view">${e.view}</div>
  <div class="base detail">${e.detail}</div>
  <div class="base target">${e.target.tagName}</div>`;
  log.appendChild(div);
};

a.addEventListener("DOMActivate", (e) => {
  handleEvent(e);
});
a.addEventListener("click", (e) => {
  if (checked) {
    e.preventDefault();
  }
  handleEvent(e);
});
