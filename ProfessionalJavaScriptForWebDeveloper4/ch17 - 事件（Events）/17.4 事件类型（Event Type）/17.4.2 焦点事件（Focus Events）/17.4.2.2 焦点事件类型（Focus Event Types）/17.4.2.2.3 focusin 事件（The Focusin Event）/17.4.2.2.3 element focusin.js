/*
 * @Author: mangwu                                                             *
 * @File: 17.4.2.2.3 element focusin.js                                        *
 * @Date: 2023-02-16 16:39:34                                                  *
 * @LastModifiedDate: 2023-02-16 16:58:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const form = document.getElementById("form");
const text = document.querySelector("input[type='text']");
const eventPhase = ["None", "Capture", "At_Target", "Bubbling"];
const handler = (e, who) => {
  console.log(`${who} ${eventPhase[e.eventPhase]} ${e.type}`, e);
};
/**
 * @description 注册事件处理程序
 * @param {EventTarget} eventTarget
 * @param {function} handler
 * @param  {...any} args
 */
function regesterHandler(eventTarget, handler, ...args) {
  eventTarget.addEventListener("focusin", (e) => handler(e, ...args));
  eventTarget.addEventListener("focusin", (e) => handler(e, ...args), true);
  eventTarget.addEventListener("focusout", (e) => handler(e, ...args));
  eventTarget.addEventListener("focusout", (e) => handler(e, ...args), true);
}

regesterHandler(text, handler, "text");
regesterHandler(form, handler, "form");
regesterHandler(document.body, handler, "body");
regesterHandler(document.documentElement, handler, "documentElement");
regesterHandler(document, handler, "document");
regesterHandler(window, handler, "window");

form.addEventListener("focusin", (e) => {
  e.target.style.backgroundColor = "red";
});
form.addEventListener("focusout", (e) => {
  e.target.style.backgroundColor = "";
});
