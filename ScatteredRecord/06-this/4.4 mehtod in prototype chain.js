/*
 * @Author: mangwu                                                             *
 * @File: 4.4 mehtod in prototype chain.js                                     *
 * @Date: 2022-10-04 21:50:41                                                  *
 * @LastModifiedDate: 2022-10-04 22:06:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 原型链上的方法
const obj = {
  foo: function () {
    return this;
  },
  bar: () => this,
};
// 普通方法的this取决于调用对象
console.log(obj.foo() === obj);
// 箭头函数的this取决于定义时的作用域
console.log(obj.bar() === this);

// 原型链上的普通方法的this也取决于调用对象
const newObj = Object.create(obj);
console.log(newObj.foo() === newObj);
console.log(newObj.__proto__.foo() === newObj);
// 原型链上箭头函数的this不变，却决于定义时的作用域
console.log(newObj.bar() === this);
console.log(newObj.__proto__.bar() === this);
