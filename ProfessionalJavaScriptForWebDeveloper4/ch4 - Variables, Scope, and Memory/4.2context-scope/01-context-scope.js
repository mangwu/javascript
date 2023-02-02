/*
 * @Author: mangwu                                                             *
 * @File: 05-context.js                                                        *
 * @Date: 2022-06-12 21:18:52                                                  *
 * @LastModifiedDate: 2022-06-13 21:08:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 执行上下文与作用域
// 上下文相对于变量和函数而言
// 上下文中所有定义的变量和函数构成一个变量对象
// 这个变量对象决定了这个上下文能访问那些数据
// 在执行代码时，会根据当前代码的上下文创建变量对象的一个作用域链
// 作用域链决定了当前上下文中代码访问变量和函数的顺序
// 代码正在执行的上下文的变量对象始终位于作用域的最前端

let color = "blue";
function changeColor() {
  let anotherColor = "red";
  function swapColor() {
    let tempColor = color;
    color = anotherColor;
    anotherColor = tempColor;
    // 这个上下文能访问swapColor，changeColor，全局上下文的变量对象
  }
  // 这个上下文只能访问chanegColor, 全局上下文的变量对象（所以无法读取tempColor）
  swapColor();
}
// 这个上下文只能访问全局上下文的变量对象（所以无法对象anotherColor, tempColor）
changeColor();
// 通过局部变量在局部上下文中替换全局变量
console.log(color);
