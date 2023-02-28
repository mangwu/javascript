/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.1.2.1.2 点击事件的事件目标确定.js                                        *
 * @Date: 2023-02-28 16:53:28                                                  *
 * @LastModifiedDate: 2023-02-28 16:56:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const log = document.querySelector("ul");

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const container = document.querySelector(".container");

function handler(e) {
  const li = document.createElement("li");
  li.innerHTML = `<span class="type">${e.type}</span><span class="target">${e.target.className}</span>`;
  log.appendChild(li);
}

box1.addEventListener("mousedown", handler);
box2.addEventListener("mouseup", handler);
container.addEventListener("click", handler);
