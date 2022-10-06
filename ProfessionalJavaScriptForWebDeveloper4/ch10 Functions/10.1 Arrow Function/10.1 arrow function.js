/*
 * @Author: mangwu                                                             *
 * @File: 10.1 arrow function.js                                               *
 * @Date: 2022-09-30 14:27:47                                                  *
 * @LastModifiedDate: 2022-10-05 03:09:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 箭头函数

// 简洁可以做高阶函数的参数

const ints = [1, 2, 5, 3, -5, -2, 3, 5, 4];
console.log(
  ints.reduce((pre, cur) => {
    return pre + cur;
  })
);
const sum = function (pre, cur) {
  return pre + cur;
};
console.log(ints.reduce(sum));

ints.map((v) => {
  console.log(v);
});

ints.map((v) => console.log(v));
console.log(ints.map((v) => v));

console.log(ints.map((v, i) => ({ lable: i, value: v })));

// 箭头函数的this

const obj = {
  arrowFunc: () => this,
  normalFunc: function () {
    return this;
  },
};

console.log(obj.arrowFunc() === obj.normalFunc());

// 另外一个例子
const foo = {
  bar1: function () {
    const arrFunc = () => this;
    return arrFunc;
  },
  bar2: function () {
    const func = function () {
      return this;
    };
    return func;
  },
};

console.log(foo.bar1()()); // foo
console.log(foo.bar2()()); // global

const fn = foo.bar1;
const fn2 = { func: foo.bar2() };
console.log(fn()()); // global
console.log(fn2.func()); // fn2
