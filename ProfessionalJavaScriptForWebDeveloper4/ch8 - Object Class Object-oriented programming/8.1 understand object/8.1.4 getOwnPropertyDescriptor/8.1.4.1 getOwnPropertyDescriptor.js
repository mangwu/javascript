/*
 * @Author: mangwu                                                             *
 * @File: 8.1.4.1 getOwnPropertyDescriptor.js                                  *
 * @Date: 2022-09-07 23:14:30                                                  *
 * @LastModifiedDate: 2022-09-07 23:48:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 试验一下内置对象
const arr = [1, 2, 3];
const arrLengthDescriptor = Object.getOwnPropertyDescriptor(arr, "length");
console.log(arrLengthDescriptor);
const arrFirstDescriptor = Object.getOwnPropertyDescriptor(arr, "0");
console.log(arrFirstDescriptor);
Object.defineProperties(arr, {
  length: {
    writable: false,
  },
  0: {
    enumerable: false,
    writable: false,
  },
});
console.log(arr);
for (const item of arr) {
  console.log(item);
}
for (const item in arr) {
  console.log(item);
}
try {
  arr.push(4);
} catch (error) {
  console.log(error.message);
}

const set = new Set().add(1).add(5).add(3);
console.log("集合没有可枚举属性");
for (const item in set) {
  console.log(item);
}
console.log(typeof set, set instanceof Object);
const setAddPropertyDescriptor = Object.getOwnPropertyDescriptor(set, "add");
console.log(setAddPropertyDescriptor);
const setSizePropertyDescriptor = Object.getOwnPropertyDescriptor(set, "size");
console.log(setSizePropertyDescriptor);
const setHasPropertyDescriptor = Object.getOwnPropertyDescriptor(set, "has");
console.log(setHasPropertyDescriptor);
