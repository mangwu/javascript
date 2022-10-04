/*
 * @Author: mangwu                                                             *
 * @File: 4.3 arrow function.js                                                *
 * @Date: 2022-10-03 20:51:13                                                  *
 * @LastModifiedDate: 2022-10-04 21:28:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 箭头函数

const arrFunc = () => {
  console.log(this);
  console.log(this === module.exports);
};
// 全局环境
arrFunc();
const o = { arrFunc };

o.arrFunc(); // 打印和全局环境一样，不是运行时绑定，和最近上下文有关

console.log("------");
// 函数环境，在另一个函数中定义箭头函数
function normal() {
  // 这个时候
  const k = () => console.log(this);
  arrFunc();
  k();
}
normal();

o.normal = normal;
o.normal();
console.log("--------");
// 箭头函数不能使用bind call apply等指定this
const obj = { func: arrFunc };
obj.func(); // this true
arrFunc.apply(obj);
const boundFunc = arrFunc.bind(obj);
boundFunc();

// this值可变 的箭头函数

const foo = {
  bar: function () {
    const arrFunc = () => this;
    return arrFunc;
  },
};

// 由foo调用bar函数，bar函数此时的this是foo对象，
// 此时bar函数内部的箭头函数杯定义，最近的上下文是
console.log(foo.bar()() === globalThis);
console.log(foo.bar()() === foo);

// bar是一个函数，此时箭头函数还未杯定义
const bar = foo.bar;
// 因为调用bar没有使用对象调用，其this默认是全局对象，
// 所以定义的箭头函数返回的this就是globalThis
console.log(bar()() === globalThis);
console.log(bar()() === foo);
