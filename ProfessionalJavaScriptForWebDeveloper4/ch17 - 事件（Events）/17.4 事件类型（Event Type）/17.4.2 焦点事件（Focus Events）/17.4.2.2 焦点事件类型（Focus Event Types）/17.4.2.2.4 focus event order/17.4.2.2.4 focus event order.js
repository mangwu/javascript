/*
 * @Author: mangwu                                                             *
 * @File: 17.4.2.2.4 focus event order.js                                      *
 * @Date: 2023-02-20 09:17:13                                                  *
 * @LastModifiedDate: 2023-02-20 10:37:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const form = document.getElementById("form");
const text = document.querySelector("input[type='text']");
const password = document.querySelector("input[type='password']");

let p = null;
let currentFocus = null;
function createPElement() {
  const newP = document.createElement("p");
  newP.style.border = "1px dash black";
  newP.style.width = "500px";
  newP.style.backgroundColor = "#ddd";
  return newP;
}

const focusinHandler = function (e) {
  console.log("focusin");
  // 有焦点
  if (currentFocus) {
    currentFocus = e.target;
    p.textContent = `3. 有焦点到页面焦点聚焦到另一个元素:\t\n ${p.textContent} \n  
    ${e.target.type} ${e.type}`;
  } else {
    // 没有焦点
    console.log("focusin none");
    p = createPElement();
    currentFocus = e.target;
    p.textContent += `1. 无焦点到聚焦于一个元素，发生的事件顺序:\n${e.target.type} ${e.type}`;
  }
};
const focusoutHandler = function (e) {
  // 失去焦点的事件说明当前页面有焦点
  p = createPElement();
  console.log("focusout");
  p.textContent += `\n  ${e.target.type} ${e.type}`;
};

const focusHandler = function (e) {
  console.log(p, e.target, e.type);
  p.textContent += `\n  ${e.target.type} ${e.type}`;
  document.body.appendChild(p);
};
const blurHandler = function (e) {
  if (currentFocus !== e.target) {
    p.textContent += `\n  ${e.target.type} ${e.type}`;
  } else {
    p.textContent = `2. 有焦点到页面不存在焦点: ${p.textContent} \n  
    ${e.target.type} ${e.type}`;
    currentFocus = null;

    document.appendChild(p);
  }
};

// text.addEventListener("focusin", focusinHandler);
// text.addEventListener("focusout", focusoutHandler);
// text.addEventListener("focus", focusHandler);
// text.addEventListener("blur", blurHandler);

// password.addEventListener("focusin", focusinHandler);
// password.addEventListener("focusout", focusoutHandler);
// password.addEventListener("focus", focusHandler);
// password.addEventListener("blur", blurHandler);

// form.addEventListener("focusin", () => {
//   console.log(document.getSelection().focusNode, document.hasFocus());
// });
// form.addEventListener("focusout", () => {
//   console.log(document.getSelection().focusNode, document.hasFocus());
// });

text.addEventListener("focusin", (e) =>
  console.log(e.type, document.hasFocus())
);
text.addEventListener("focusout", (e) =>
  console.log(e.type, document.hasFocus())
);
text.addEventListener("focus", (e) => console.log(e.type, document.hasFocus()));
text.addEventListener("blur", (e) => console.log(e.type, document.hasFocus()));

password.addEventListener("focusin", (e) => console.log(e.type));
password.addEventListener("focusout", (e) => console.log(e.type));
password.addEventListener("focus", (e) => console.log(e.type));
password.addEventListener("blur", (e) => console.log(e.type));
