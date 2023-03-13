/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.3.5.6 list of dragged nodes.js                                *
 * @Date: 2023-03-13 16:04:12                                                  *
 * @LastModifiedDate: 2023-03-13 17:33:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const p = document.querySelector("p");
const log = document.querySelector(".log");
const div = document.querySelector("div");
const img = document.querySelectorAll("img");
const dragStartFunc = (e) => {
  const items = e.dataTransfer.items;
  const types = e.dataTransfer.types;
  for (let i = 0; i < types.length; i++) {
    const li = document.createElement("li");
    let data = e.dataTransfer.getData(items[i].type);
    li.textContent = `items${i}  
    kind: ${items[i].kind},  \n
    type: ${items[i].type},  \n
    data: ${data}
    `;
    log.appendChild(li);
  }
};

p.addEventListener("dragstart", dragStartFunc);
div.addEventListener("dragstart", dragStartFunc);
img.forEach((v) => v.addEventListener("dragstart", dragStartFunc));

// document.addEventListener("dragenter", (e) => {
//   if (e.target !== p && e.target !== log && e.target !== div) {
//     dragStartFunc(e);
//   }
// });
