/*
 * @Author: mangwu                                                             *
 * @File: 17.3.1.3 main.js                                                     *
 * @Date: 2023-02-11 18:59:30                                                  *
 * @LastModifiedDate: 2023-02-11 21:32:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
const a4 = document.querySelector("#a4");

const ul = document.querySelector("ul");

const handler = (e, who) => {
  const li = document.createElement("li");
  li.textContent = `currentTarget：${
    (e.currentTarget && e.currentTarget.nodeName) || who
  }；eventPhase: ${e.eventPhase};cancelable:${e.cancelable}`;
  ul.appendChild(li);
  if (who === "window") {
    cur++;
    if (cur % 2 == 0) {
      ul.appendChild(document.createElement("hr"));
    }
  }
};

document.addEventListener("click", (e) => handler(e, "document"));
document.addEventListener("click", (e) => handler(e, "document"), true);

a1.addEventListener("click", (e) => {
  handler(e, "a1_true");
});

a2.addEventListener("click", (e) => {
  handler(e, "a2_true");
});

a3.addEventListener("click", (e) => {
  e.cancelable = false;
  handler(e, "a3_true");
  e.preventDefault();
});

a4.addEventListener("click", (e) => {
  handler(e, "a4_true");
});

const newE1 = new Event("click", {
  bubbles: true,
  cancelable: true,
  composed: true,
});
a1.dispatchEvent(newE1);

const newE2 = new Event("click", {
  bubbles: false,
  cancelable: true,
  composed: true,
});
a2.dispatchEvent(newE2);
const newE3 = new Event("click", {
  bubbles: true,
  cancelable: false,
  composed: true,
});
a3.dispatchEvent(newE3);
const newE4 = new Event("click", {
  bubbles: false,
  cancelable: false,
  composed: true,
});
a4.dispatchEvent(newE4);
