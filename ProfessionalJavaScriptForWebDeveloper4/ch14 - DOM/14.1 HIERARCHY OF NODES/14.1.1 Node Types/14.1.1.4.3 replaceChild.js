/*
 * @Author: mangwu                                                             *
 * @File: 14.1.1.4.3 replaceChild.js                                           *
 * @Date: 2022-12-27 10:38:46                                                  *
 * @LastModifiedDate: 2022-12-27 10:49:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let pre = null;
const div = document.querySelector("div");
const btn1 = document.querySelector(".btn1");
const input = document.querySelector("input");
btn1.addEventListener("click", () => {
  if (input.value && pre) {
    const p = document.createElement("p");
    p.textContent = input.value;
    input.value = "";
    const k = div.replaceChild(p, pre);
    console.log(k === pre);
    // 替换选择节点
    replaceActiveNode(p);
  } else {
    alert("请输入文本并选择要替换的节点");
  }
});
const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
  if (input.value) {
    const p = document.createElement("p");
    p.textContent = input.value;
    input.value = "";
    const k = div.replaceChild(p, div.children[0]);
    console.log(k);
    // 替换选择节点
    replaceActiveNode(p);
  } else {
    alert("请输入文本");
  }
});

const btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
  if (input.value) {
    const p = document.createElement("p");
    p.textContent = input.value;
    input.value = "";
    const k = div.replaceChild(p, div.children[div.children.length - 1]);
    console.log(k);
    // 替换选择节点
    replaceActiveNode(p);
  } else {
    alert("请输入文本");
  }
});

function replaceActiveNode(node) {
  if (pre) {
    pre.removeAttribute("class");
  }
  pre = node;
  pre.setAttribute("class", "active");
}

div.addEventListener("click", (e) => {
  replaceActiveNode(e.target);
});
