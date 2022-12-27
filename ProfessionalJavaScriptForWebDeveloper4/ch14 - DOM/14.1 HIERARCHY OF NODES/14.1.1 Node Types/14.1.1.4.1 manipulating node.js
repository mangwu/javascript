/*
 * @Author: mangwu                                                             *
 * @File: 14.1.1.4.1 maniplating node.js                                       *
 * @Date: 2022-12-27 09:32:52                                                  *
 * @LastModifiedDate: 2022-12-27 09:59:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 添加段落
const btn = document.querySelector("button");
const input = document.querySelector("input");
btn.addEventListener("click", () => {
  if (input.value) {
    const p = document.createElement("p");
    p.textContent = input.value;
    input.value = "";
    const k = document.body.appendChild(p);
    console.log(k === p);
    console.log(k === document.body.lastChild);
  } else {
    alert("请输入文本");
  }
});
