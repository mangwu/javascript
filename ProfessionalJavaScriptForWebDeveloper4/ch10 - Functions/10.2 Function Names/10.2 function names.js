/*
 * @Author: mangwu                                                             *
 * @File: 10.2 function names.js                                               *
 * @Date: 2022-09-30 14:50:28                                                  *
 * @LastModifiedDate: 2022-10-05 22:24:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 函数名称，广义上就是保存指向函数指针的变量名称

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(1, 2));

let anotherSum = sum;
console.log(anotherSum(2, 3));

sum = null;

console.log(anotherSum(4, 3));

// ES6的函数名称：函数对象本身的暴露出的name属性
// 箭头函数
const a = () => {};
const b = a;
function logFuncName(arrowFunc) {
  console.log(arrowFunc.name);
}
logFuncName(() => {}); // 无名箭头函数
logFuncName(a); // 箭头函数名称为首次声明时使用的变量标识符
logFuncName(b);
// 函数声明语法
function funName() {}
logFuncName(funName);
// 函数表达式语法
logFuncName(function () {});
const expressionFunc = function () {};
logFuncName(expressionFunc);
const expressionFunc2 = function anonymous() {};
logFuncName(expressionFunc2);
// Function构造函数
logFuncName(new Function());

// setter getter 和bind
const o = {
  age_: 22,
  get age() {
    console.log(arguments.callee);
    return this.age_;
  },
  set age(val) {
    this.age_ = val;
  },
};
const k = { age_: 23 };
const propertyDescriptor = Object.getOwnPropertyDescriptor(o, "age");
const fn = propertyDescriptor.get.bind(k);
console.log(propertyDescriptor.get.name);
console.log(propertyDescriptor.set.name);
console.log(fn.name);
console.log(fn());
