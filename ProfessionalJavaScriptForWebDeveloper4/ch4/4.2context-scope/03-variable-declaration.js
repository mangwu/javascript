/*
 * @Author: mangwu                                                             *
 * @File: 03-variable-.js                                                      *
 * @Date: 2022-06-17 11:06:06                                                  *
 * @LastModifiedDate: 2022-06-17 14:50:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 变量声明
// 三个声明关键字 var let const

// var 函数作用域
// let 块作用域
// const 和let一样，只是声明的变量不能修改

// var 声明提升 重复声明 全局变量
console.log(variable1); // undefined
var variable1 = 123;
console.log(variable1);
var variable1 = 456;
console.log(variable1);
// node环境不会挂载到global上, 浏览器环境会挂载到window上
console.log(global.variable1);

// let 不能重复声明 适合作为迭代遍历 暂时性死区
try {
  console.log(letVar);
} catch (error) {
  console.log("变量未声明-暂时性死区");
}
let letVar = 2;
try {
  let letVar = 3; // 不会报错，因为在一个新作用域中
  // let letVar = 4; // 语法错误 即使使用try也不能避免
} catch (error) {
  console.log("重复声明");
}

// const 与 let一样，只是必须赋初始值，且不能重新赋值

try {
  // const a; // 语法错误，不能通过try避免
  console.log(a);
} catch (error) {
  console.log("常量必须赋初始值");
}

const b = {};
b.name = "mangwu";
console.log(b); // 适合保存对象引用，const 声明只应用到顶级原语或对象

// Object.freeze() 冻结到整个对象，不止引用
const c = Object.freeze({ name: "wumang", age: 22 });
c.name = "mangwu";
console.log(c);
