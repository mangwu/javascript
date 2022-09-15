/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.6 key order.js                                                 *
 * @Date: 2022-09-15 21:31:18                                                  *
 * @LastModifiedDate: 2022-09-15 21:43:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 属性遍历顺序
// 先升序遍历数字键，在按插入顺序遍历字符串键和符号键

const obj = {
  1: 1,
  first: "first",
  [Symbol("sym1")]: "sym1",
  second: "second",
  3: 3,
};
Object.defineProperties(obj.__proto__, {
  abc: {
    value: 0,
    enumerable: "abc",
  },
  5: {
    value: 5,
    enumerable: true,
    writable: true,
  },
  3: {
    value: 3,
    enumerable: true,
    writable: true,
  },
  [-2]: {
    value: -2,
    enumerable: true,
    writable: true,
  },
  0: {
    value: 0,
    enumerable: true,
    writable: true,
  },
});
obj[2] = 2;
obj[Symbol("sym2")] = "sym2";
obj.third = "third";
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
for (const key in obj) {
  console.log(key);
}
