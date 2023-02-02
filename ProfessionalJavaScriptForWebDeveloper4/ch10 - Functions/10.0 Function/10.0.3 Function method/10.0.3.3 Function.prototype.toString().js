/*
 * @Author: mangwu                                                             *
 * @File: 10.0.3.3 Function.prototype.toString().js                            *
 * @Date: 2022-10-19 11:08:45                                                  *
 * @LastModifiedDate: 2022-10-19 15:35:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

try {
  Function.prototype.toString.call("foo");
} catch (error) {
  console.log(error.toString());
}

// 内置函数对象
console.log(Math.pow.toString());
console.log(Array.prototype.slice.toString());

// 绑定函数
function func() {
  return false;
}
const boundFunc = func.bind(null, 1);
console.log(boundFunc.toString());

// 内部(intrinsic)对象
const obj = {
  [1 + 2]() {
    return false;
  },
  [Symbol.hasInstance]: function Name() {
    return false;
  },
};
console.log(obj[3].toString());
console.log(obj[Symbol.hasInstance].toString());

const bound = obj[3].bind(null, 1);
console.log(bound.toString());

// 构造函数创建的函数对象
const sum = new Function("num1", "num2", "return num1 + num2");
console.log(sum.toString());
// 模板字符串

function foo() {
  /* 我是注释 */
  return "bar";
}
console.log(`${foo}`);

// 实际源代码与toString()结果
function test(fn) {
  console.log(fn.toString());
}

test(function f() {});
test(function* g() {});
test(class A {});

test((a, ...args) => console.log(a, args));

test({ [0]() {} }[0]);
test({ [0]: function () {} }[0]);

test(Object.getOwnPropertyDescriptor({ get a() {} }, "a").get);
test(
  Object.getOwnPropertyDescriptor(
    {
      /**
       * @param {any} _val
       */
      set a(_val) {},
    },
    "a"
  ).set
);

test(Function.prototype.toString);

test(function f() {}.bind(null));

test(Function("a", "b"));

