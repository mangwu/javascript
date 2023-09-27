/*
 * @Author: mangwu                                                             *
 * @File: 17.4.6 composition event.js                                          *
 * @Date: 2023-09-27 11:07:54                                                  *
 * @LastModifiedDate: 2023-09-27 16:21:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const input = document.querySelector(".input");

const eventLog = document.querySelector(".event-log");
const handler = (e) => {
  const div = document.createElement("div");
  eventLog.style.border = "1px solid gray";
  div.className = "row";
  div.innerHTML = `\
  <span class="tag">type:${e.type}</span>
  <span class="tag">data:${e.data}</span>
  `;
  eventLog.appendChild(div);
};

input.addEventListener("compositionstart", handler);
input.addEventListener("compositionupdate", handler);
input.addEventListener("compositionend", handler);

