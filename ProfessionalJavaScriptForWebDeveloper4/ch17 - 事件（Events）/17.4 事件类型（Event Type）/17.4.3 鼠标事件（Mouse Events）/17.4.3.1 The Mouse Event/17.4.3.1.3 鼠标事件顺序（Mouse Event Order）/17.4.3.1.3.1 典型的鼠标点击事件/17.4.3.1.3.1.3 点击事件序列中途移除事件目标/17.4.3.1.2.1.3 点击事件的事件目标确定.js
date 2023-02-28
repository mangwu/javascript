/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.1.2.1.2 点击事件的事件目标确定.js                                        *
 * @Date: 2023-02-28 16:53:28                                                  *
 * @LastModifiedDate: 2023-02-28 17:13:21                                      *
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
  li.innerHTML = `<span class="type">${e.type}</span><span class="target">${e.target.className}</span><span class="currentTarget">${e.currentTarget.className}</span>`;
  log.appendChild(li);
}
box1.addEventListener("mousedown", (e) => {
  // box1在mousedown时移除
  handler(e);
  container.removeChild(box1);
});
box1.addEventListener("mouseup", handler);
box2.addEventListener("mousedown", handler);
box2.addEventListener("mouseup", (e) => {
  // box2在mouseup移除
  handler(e);
  container.removeChild(box2);
});
container.addEventListener("click", handler);
container.addEventListener("mouseup", handler);
container.addEventListener("mousedown", handler);


