/*
 * @Author: mangwu                                                             *
 * @File: 10.0.3.3 Function.prototype.toString().js                            *
 * @Date: 2022-10-19 11:08:45                                                  *
 * @LastModifiedDate: 2022-10-19 11:28:57                                      *
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
