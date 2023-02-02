/*
 * @Author: mangwu                                                             *
 * @File: 10.0.1.2 instance property.js                                        *
 * @Date: 2022-09-29 16:56:14                                                  *
 * @LastModifiedDate: 2022-09-30 14:08:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 实例属性
// 1. arguments
function test(a, b, c) {}
console.log(test.prototype);
try {
  test.__proto__.arguments;
} catch (error) {
  console.log(error.message);
}

(function f() {
  if (Object.hasOwn(f, "arguments")) {
    console.log(
      "arguments is an own property with descriptor",
      Object.getOwnPropertyDescriptor(f, "arguments")
    );
  } else {
    console.log(
      "f doesn't have an own property named arguments. Trying to get f.[[Prototype]].arguments"
    );
    console.log(
      Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(f),
        "arguments"
      ).get.call(f)
    );
  }
})();

// 2. caller

