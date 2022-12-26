/*
 * @Author: mangwu                                                             *
 * @File: 14.1.1.3 node relationship.js                                        *
 * @Date: 2022-12-26 21:54:02                                                  *
 * @LastModifiedDate: 2022-12-26 23:06:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const k = ul.childNodes;
btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = ul.childNodes.length;
  ul.appendChild(li);
  pre.textContent = [...k];
  alertInfo()
});
const pre = document.querySelector("pre");
pre.textContent = [...k];

var alertInfo = () => {
  let str = "";
  for (const item of k) {
    str += `当前节点${item.textContent}:上一个节点(previousSibling)为${
      item.previousSibling && item.previousSibling.textContent
    },下一个节点(nextSibling)为${
      item.nextSibling && item.nextSibling.textContent
    }\n`;
  }
  alert(str);
};
