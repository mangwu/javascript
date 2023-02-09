/*
 * @Author: mangwu                                                             *
 * @File: 17.3.1.7 main.js                                                     *
 * @Date: 2023-02-09 22:57:13                                                  *
 * @LastModifiedDate: 2023-02-10 00:08:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const stop = document.querySelector("#stop");
const stopImmediate = document.querySelector("#stopImmediate");
const defaultP = document.querySelector("#default");

const ul = document.querySelector("ul");
const handler = (e, who) => {
  const li = document.createElement("li");
  li.textContent = `currentTarget：${who};eventPhase: ${e.eventPhase}`;
  ul.appendChild(li);
};

document.body.addEventListener("click", (e) => handler(e, "<body>"), true);
document.body.addEventListener("click", (e) => handler(e, "<body>"));
stop.addEventListener("click", (e) => {
  // 记录
  handler(e, "a#stop_1");
});
stop.addEventListener("click", (e) => {
  // 记录
  e.stopPropagation();
  handler(e, "a#stop_2");
});
stop.addEventListener("click", (e) => {
  // 记录
  handler(e, "a#stop_3");
});
stopImmediate.addEventListener("click", (e) => {
  // 记录
  handler(e, "a#stopI_1");
});
stopImmediate.addEventListener("click", (e) => {
  // 记录
  e.stopImmediatePropagation();
  handler(e, "a#stopI_2");
});
stopImmediate.addEventListener("click", (e) => {
  // 记录
  handler(e, "a#stopI_3");
});
defaultP.addEventListener("click", (e) => {
  // 记录
  handler(e, "a#default_1");
});

defaultP.addEventListener("click", (e) => {
  // 记录
  e.preventDefault();
  handler(e, "a#default_2");
});
defaultP.addEventListener("click", (e) => {
  // 记录
  e.preventDefault();
  handler(e, "a#default_3");
});
