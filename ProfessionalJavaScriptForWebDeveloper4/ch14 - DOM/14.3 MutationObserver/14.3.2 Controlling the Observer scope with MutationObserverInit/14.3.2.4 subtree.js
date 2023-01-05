/*
 * @Author: mangwu                                                             *
 * @File: 14.3.2.4 subtree.js                                                  *
 * @Date: 2023-01-05 14:04:19                                                  *
 * @LastModifiedDate: 2023-01-05 14:11:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const div = document.querySelector("div");

const observer = new MutationObserver((mutationRecords) =>
  console.log(mutationRecords)
);
const p = document.createElement("p");
div.appendChild(p);

observer.observe(div, { childList: true, subtree: true });

div.removeChild(p); // 删除节点，触发变化事件

p.textContent = "Hello"; // 被删除节点也会触发变化事件
