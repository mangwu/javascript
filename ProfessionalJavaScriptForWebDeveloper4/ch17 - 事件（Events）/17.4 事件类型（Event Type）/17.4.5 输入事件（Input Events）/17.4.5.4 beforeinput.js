/*
 * @Author: mangwu                                                             *
 * @File: 17.4.5.4 .js                                                         *
 * @Date: 2023-04-16 22:56:45                                                  *
 * @LastModifiedDate: 2023-09-26 15:28:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const input = document.querySelector(".input");

const log = document.querySelector(".log");
const eventLog = document.querySelector(".event-log");

input.addEventListener("beforeinput", (e) => {
  log.textContent = e.target.textContent;
  console.log(e.target.textContent, e.target);
  const div = document.createElement("div");
  eventLog.style.border = "1px solid gray";
  div.className = "row";
  div.innerHTML = `\
  <span class="tag">type:${e.type}</span>
  <span class="tag">inputType:${e.inputType}</span>
  <span class="tag">data:${e.data}</span>
  <span class="tag">type:${e.isComposing}</span>
  `;
  eventLog.appendChild(div);
});
