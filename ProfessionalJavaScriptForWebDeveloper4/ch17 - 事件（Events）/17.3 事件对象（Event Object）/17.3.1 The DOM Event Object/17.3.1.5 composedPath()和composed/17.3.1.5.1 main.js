/*
 * @Author: mangwu                                                             *
 * @File: 17.3.1.5.1 main.js                                                   *
 * @Date: 2023-02-08 17:25:06                                                  *
 * @LastModifiedDate: 2023-02-09 00:01:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const root = document.querySelector("#root");

const shadowRoot = root.attachShadow({ mode: "open" });

const tempate = `<div>mangwu</div><span><button>happy</button></span>`;

shadowRoot.innerHTML = tempate;
const btn = shadowRoot.querySelector("button");
const handle = (e) => {
  console.log(e.currentTarget.nodeName || "window");
};
btn.addEventListener("click", handle);
btn.addEventListener("click", handle, true);

const span = shadowRoot.querySelector("span");
span.addEventListener("click", handle);
span.addEventListener("click", handle, true);

shadowRoot.addEventListener("click", handle);
shadowRoot.addEventListener("click", handle, true);

root.addEventListener("click", handle);
root.addEventListener("click", handle, true);

const div = document.querySelector("div");
div.addEventListener("click", handle);
div.addEventListener("click", handle, true);

document.body.addEventListener("click", handle);
document.body.addEventListener("click", handle, true);

document.documentElement.addEventListener("click", handle);
document.documentElement.addEventListener("click", handle, true);

document.addEventListener("click", handle);
document.addEventListener("click", handle, true);

window.addEventListener("click", handle);
window.addEventListener("click", handle, true);

btn.dispatchEvent(new Event("click", { composed: false, bubbles: true }));
console.log("--------------");
btn.dispatchEvent(new Event("click", { composed: false, bubbles: false }));
console.log("--------------");

btn.dispatchEvent(new Event("click", { composed: true, bubbles: true }));
console.log("--------------");
btn.dispatchEvent(new Event("click", { composed: true, bubbles: false }));
console.log("--------------");
