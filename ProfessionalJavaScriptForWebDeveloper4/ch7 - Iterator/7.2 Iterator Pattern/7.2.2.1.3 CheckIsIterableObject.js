/*
 * @Author: mangwu                                                             *
 * @File: 7.2.2.2 CheckIsIterableObject.js                                     *
 * @Date: 2022-09-02 22:47:00                                                  *
 * @LastModifiedDate: 2022-09-03 01:50:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 检查是否是可迭代对象
// 查看Symbol.iterator即可

// Object number都是不可迭代的额
const num = 1;
const obj = {};
console.log(num[Symbol.iterator]);
console.log(obj[Symbol.iterator]);
// 数组，集合，映射，字符串，arguments，都是可迭代的
const str = "123";
const arr = [1, 2, 3];
const set = new Set(arr);
const map = new Map().set("a", 1).set("b", 2);
function test() {
  console.log(arguments[Symbol.iterator]);
}
console.log(str[Symbol.iterator]);
console.log(arr[Symbol.iterator]);
console.log(set[Symbol.iterator]);
console.log(map[Symbol.iterator]);
test(1, 2, "a");

function test2() {
  console.log(arguments[Symbol.iterator]());
}
// 可以通过调用迭代器工厂函数生成一个迭代器
console.log(str[Symbol.iterator]());
console.log(arr[Symbol.iterator]());
console.log(set[Symbol.iterator]());
console.log(map[Symbol.iterator]());
test2(1, 2, "a");


