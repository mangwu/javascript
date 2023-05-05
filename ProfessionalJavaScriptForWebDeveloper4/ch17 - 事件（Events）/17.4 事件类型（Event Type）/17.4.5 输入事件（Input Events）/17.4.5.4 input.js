/*
 * @Author: mangwu                                                             *
 * @File: 17.4.5.4 input.js                                                    *
 * @Date: 2023-04-16 23:26:16                                                  *
 * @LastModifiedDate: 2023-04-17 00:33:03                                      *
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

input.addEventListener("input", (e) => {
  log.textContent = e.target.textContent;
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
