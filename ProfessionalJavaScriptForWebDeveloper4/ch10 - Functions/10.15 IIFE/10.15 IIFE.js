/*
 * @Author: mangwu                                                             *
 * @File: 10.15 IIFE.js                                                        *
 * @Date: 2022-10-12 14:16:59                                                  *
 * @LastModifiedDate: 2022-10-12 15:11:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 立即调用函数表达式

(function () {
  for (var i = 1; i < 10; i++) {
    console.log(i);
  }
})();

// 内嵌级块作用域
{
  let i;
  for (i = 1; i < 10; i++) {
    console.log(i);
  }
}
// 循环块作用域
for (let i = 0; i < 10; i++) {
  console.log(i);
}

const divs = document.querySelectorAll("div");

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function () {
    console.log(i);
  });
}
let j = 0;
for (j = 0; j < divs.length; j++) {
  divs[i].addEventListener("click", function () {
    console.log(j);
  });
}

for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener(
    "click",
    (function (frozenCounter) {
      return function () {
        console.log(frozenCounter);
      };
    })(i)
  );
}
