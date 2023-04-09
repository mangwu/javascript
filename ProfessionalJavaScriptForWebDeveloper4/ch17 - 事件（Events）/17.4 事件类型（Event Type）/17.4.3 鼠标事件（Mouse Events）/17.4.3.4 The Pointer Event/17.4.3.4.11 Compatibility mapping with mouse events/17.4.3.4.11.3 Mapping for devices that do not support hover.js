/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.11.3 Mapping for devices that do not support hover.js       *
 * @Date: 2023-04-10 00:07:47                                                  *
 * @LastModifiedDate: 2023-04-10 00:41:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const log = document.querySelector(".log");

const handler = (e) => {
  const div = document.createElement("div");
  div.className = "item";
  div.textContent = e.type;
  log.appendChild(div);
};

const a = document.querySelector(".A");
const b = document.querySelector(".B");

a.addEventListener("pointerover", handler);
a.addEventListener("pointerenter", handler);
a.addEventListener("pointerdown", handler);
a.addEventListener("pointermove", handler);
a.addEventListener("pointerup", handler);
a.addEventListener("pointerout", handler);
a.addEventListener("pointerleave", handler);
a.addEventListener("mouseover", handler);
a.addEventListener("mouseenter", handler);
a.addEventListener("mousedown", handler);
a.addEventListener("mousemove", handler);
a.addEventListener("mouseup", handler);
a.addEventListener("mouseout", handler);
a.addEventListener("mouseleave", handler);
a.addEventListener("click", (e) => {
  handler(e);
  const div = document.createElement("div");
  div.className = "divider";
  log.appendChild(div);
});

b.addEventListener("pointerover", handler);
b.addEventListener("pointerenter", handler);
b.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  handler(e);
});
b.addEventListener("pointermove", handler);
b.addEventListener("pointerup", handler);
b.addEventListener("pointerout", handler);
b.addEventListener("pointerleave", handler);
b.addEventListener("mouseover", handler);
b.addEventListener("mouseenter", handler);
b.addEventListener("mousedown", handler);
b.addEventListener("mousemove", handler);
b.addEventListener("mouseup", handler);
b.addEventListener("mouseout", handler);
b.addEventListener("mouseleave", handler);
b.addEventListener("click", (e) => {
  handler(e);
  const div = document.createElement("div");
  div.className = "divider";
  log.appendChild(div);
});
