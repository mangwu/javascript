/*
 * @Author: mangwu                                                             *
 * @File: 5.3.4.1 window.js                                                    *
 * @Date: 2022-07-13 15:53:50                                                  *
 * @LastModifiedDate: 2022-07-13 16:12:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// window对象是浏览器环境对于ECMA-262 对Global规范的代理实现
// 需要在浏览器环境中执行以下代码
var color = "red";
function sayColor() {
  console.log(window.color);
}
window.sayColor();
// 浏览器环境中全局的this就是window
let global = function () {
  return this;
}();
console.log(global);