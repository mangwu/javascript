/*
 * @Author: mangwu                                                             *
 * @File: 6.2.2.4 array_transfer_function.js                                   *
 * @Date: 2022-07-20 14:10:11                                                  *
 * @LastModifiedDate: 2022-07-20 15:07:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 数组转换方法
// 包括valueOf() toString() toLocaleString()

// valueOf()返回数组本身
const arr = [
  1,
  ,
  "b",
  false,
  undefined,
  null,
  [
    1,
    "b",
    false,
    {
      c: 3,
      toString() {
        return "c:3";
      },
      toLocaleString() {
        return "Locale,c:3";
      },
    },
  ],
  {
    d: 5,
    toString() {
      return "d:5";
    },
  },
  {
    e: 6,
    toLocaleString() {
      return "e:6";
    },
  },
  {
    a: 2,
    valueOf() {
      return "a:2";
    },
  },
  new Date(),
];
console.log(arr.valueOf());

// toString() 将放回元素等效字符串然后拼接逗号返回
console.log(arr.toString());

// toLocaleString()
console.log(arr.toLocaleString());

// join()
console.log(arr.join(""));
console.log(arr.join("-"));
console.log(arr.join(","));
