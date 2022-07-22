/*
 * @Author: mangwu                                                             *
 * @File: 6.2.2.9 array_search_pos_function.js                                 *
 * @Date: 2022-07-22 10:34:21                                                  *
 * @LastModifiedDate: 2022-07-22 14:46:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 搜索和位置方法
// 严格相等搜索
const arr = [1, 2, 3, { name: "mangwu" }];
const person = { name: "mangwu" };
console.log(arr.indexOf(2));
console.log(arr.indexOf(2, 2));
console.log(arr.lastIndexOf(3, -2));
console.log(arr.lastIndexOf(3, -3));
console.log(arr.includes(person));
arr.splice(1, 0, person);
console.log(arr.includes(person));

// 断言函数搜索
const arr2 = [
  { name: "wumang", age: 26 },
  { name: "mangwu", age: 22 },
  { name: "tanaka", age: 32 },
  { name: "takahasi", age: 25 },
];
console.log(
  arr2.find((ele, idx, arr) => {
    console.log(idx);
    return ele.age < 25;
  })
);
console.log(
  arr2.findIndex((ele, idx, arr) => {
    console.log(idx);
    return ele.age > 26;
  })
);

