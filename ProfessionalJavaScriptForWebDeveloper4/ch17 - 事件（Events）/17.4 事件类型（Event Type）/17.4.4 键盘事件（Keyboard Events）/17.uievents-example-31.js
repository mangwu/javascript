/*
 * @Author: mangwu                                                             *
 * @File: 17.example.js                                                        *
 * @Date: 2023-06-06 15:53:03                                                  *
 * @LastModifiedDate: 2023-06-06 16:08:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const input = document.querySelector("input");
const log = document.querySelector(".log");

const handleKeyboardEvent = (e) => {
  const div = document.createElement("div");
  div.className = "grid-layout";
  div.innerHTML = `<div class="base type">${e.type || "-"}</div>
  <div class="base key">${e.key || "-"}</div>
  <div class="base code">${e.code || "-"}</div>
  <div class="base data">${e.data || "-"}</div>
  <div class="base shiftKey">${
    e.shiftKey !== undefined ? e.shiftKey : "-"
  }</div>
  <div class="base isComposing">${
    e.isComposing !== undefined ? e.isComposing : "-"
  }</div>`;
  log.appendChild(div);
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Shift") {
    console.log("prevent succcess");
    e.preventDefault();
  }
  // else if (e.key === "Q") {
  // e.preventDefault();
  // }
  handleKeyboardEvent(e);
});
input.addEventListener("keyup", handleKeyboardEvent);
input.addEventListener("beforeinput", handleKeyboardEvent);
input.addEventListener("input", handleKeyboardEvent);
