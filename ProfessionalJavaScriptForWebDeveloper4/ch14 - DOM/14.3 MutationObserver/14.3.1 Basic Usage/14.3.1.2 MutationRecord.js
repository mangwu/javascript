/*
 * @Author: mangwu                                                             *
 * @File: 14.3.1.2 MutationRecord.js                                           *
 * @Date: 2023-01-04 11:12:30                                                  *
 * @LastModifiedDate: 2023-01-04 17:35:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const div = document.querySelector("div");

const observer = new MutationObserver((MutationRecords) => {
  console.log(MutationRecords);
});
// observer.observe(div, { childList: true });

observer.observe(div, {
  subtree: true,
  childList: true,
});
div.appendChild(document.createTextNode("你好"));
div.textContent = "hello";
div.childNodes[0].textContent = "hello2";

div.removeChild(div.firstChild);
const p = document.createElement("p");
p.textContent = "Hello";
div.appendChild(p);
const span = document.createElement("span");
span.textContent = "你好";
p.appendChild(span);
