/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.3.1 pointerId.js                                            *
 * @Date: 2023-03-17 11:05:40                                                  *
 * @LastModifiedDate: 2023-03-17 11:19:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function getEle(selector) {
  return document.querySelector(selector);
}
const log = getEle(".log");
function handler(e) {
  const li = document.createElement("li");
  li.innerHTML = `<span class="type">${e.type}</span>
  <span class="target">${e.target.className}</span>
  <span class="currentTarget">${e.currentTarget.className}</span>
  <span class="base">${e.pointerId}</span>
  <span class="base">${e.detail}</span>
  <span class="base">${e.screenX}/${e.screenY}</span>
  <span class="base">${e.clientX}/${e.clientY}</span>
  <span class="base">${e.button}</span>
  <span class="base">${e.buttons}</span>
  `;
  log.appendChild(li);
}

const click = getEle(".click");
click.addEventListener("pointerdown", handler);
