/*
 * @Author: mangwu                                                             *
 * @File: 04-search.js                                                         *
 * @Date: 2022-06-17 16:46:40                                                  *
 * @LastModifiedDate: 2022-06-17 16:56:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 标识符查找
// 通过作用域链，从当前上下文的变量对象到父上下文的变量对象，直到全局上下文的变量对象一层层查找
// 直到就停止，到全局上下文都找不到，则出错
// 声明了相同标识符变量的作用域后，无法使用父作用域的相同标识符
// 除非window.color这种使用方法
var color = "red";
const getColor = (flag) => {
  let color = "blue";
  if (flag) {
    let color = "green";
    return color; // green
  }
  return color; // blue
};
console.log(getColor(1));
console.log(getColor(0));


