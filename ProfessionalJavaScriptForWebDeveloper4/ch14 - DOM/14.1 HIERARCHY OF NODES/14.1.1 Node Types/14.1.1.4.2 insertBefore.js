/*
 * @Author: mangwu                                                             *
 * @File: 14.1.1.4.2 insertBefore.js                                           *
 * @Date: 2022-12-27 10:06:47                                                  *
 * @LastModifiedDate: 2022-12-27 10:11:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let pre = null;
const div = document.querySelector("div");
const btn = document.querySelector("button");
const input = document.querySelector("input");
btn.addEventListener("click", () => {
  if (input.value) {
    const p = document.createElement("p");
    p.textContent = input.value;
    input.value = "";
    const k = div.insertBefore(p, pre);
    console.log(k === p);
    console.log(k === div.lastChild);
  } else {
    alert("请输入文本");
  }
});

div.addEventListener("click", (e) => {
  if (pre) {
    pre.removeAttribute("class");
  }
  pre = e.target;
  pre.setAttribute("class", "active");
});
