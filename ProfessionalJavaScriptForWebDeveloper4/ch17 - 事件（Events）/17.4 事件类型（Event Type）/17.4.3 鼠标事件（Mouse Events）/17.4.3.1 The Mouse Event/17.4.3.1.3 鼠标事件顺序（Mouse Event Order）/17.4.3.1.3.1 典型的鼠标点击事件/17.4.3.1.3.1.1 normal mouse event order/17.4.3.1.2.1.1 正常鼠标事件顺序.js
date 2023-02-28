/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.1.2.1.1正常鼠标事件顺序.js                                            *
 * @Date: 2023-02-28 16:33:30                                                  *
 * @LastModifiedDate: 2023-02-28 16:44:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const log = document.querySelector("ul");

const div = document.querySelector("div");

function handler(e) {
  const li = document.createElement("li");
  li.innerHTML = `<span class="type">${e.type}</span><span class="target">${e.target.className}</span>`;
  log.appendChild(li);
}

div.addEventListener("mousedown", handler);
div.addEventListener("mouseup", handler);
div.addEventListener("mousemove", handler);
div.addEventListener("click", handler);
div.addEventListener("dblclick", handler);
