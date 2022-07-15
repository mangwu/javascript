/*
 * @Author: mangwu                                                             *
 * @File: 6.2.1 create Array.js                                                *
 * @Date: 2022-07-14 22:53:22                                                  *
 * @LastModifiedDate: 2022-07-15 16:04:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 创建数组
const colors = new Array(20);
console.log(colors, colors.length);

const names = new Array(-3, "a", "b", "c");
console.log(names);

console.log(Array(2, 5, 6));

// 数组字面量
console.log([1, 2, , 5]);

// Array.from()
const set = new Set().add(5).add(1).add(6).add(-2);
const map = new Map().set(1, 5).set("2", 3).set("m", 8).set("as", 99).set(1, 3);
const arrayLikeObj = {
  0: "1",
  2: "3",
  5: "6",
  name: "mangwu",
  length: 3,
};
const iteratorObj = {
  [Symbol.iterator]: function* () {
    yield 2;
    yield 3;
    yield 5;
  },
};
console.log(Array.from(set));
console.log(Array.from(map));
console.log(Array.from(arrayLikeObj));
console.log(Array.from(iteratorObj));

// 浅复制
const arr = [[1, 2], 3, { 4: "a", 5: [6] }];
const copy = Array.from(arr);
copy[0][0] = "newVal";
copy[1] = "newVal";
copy[2][4] = "newVal";
copy[2][5][0] = "newVal";
copy.push("newVal");
console.log(arr);
console.log(copy);

// argments
function getArgsArray() {
  for (const item of arguments) {
    console.log(item);
  }
  return Array.from(arguments);
}

getArgsArray(1, 2, 3, 4);

// 可选参数
const arr2 = ["abc", "d", "e", "f", "z"];
let obj = { exponent: 2 };
console.log(Array.from(arr2, (x) => x.charCodeAt() ** obj.exponent));
console.log(Array.from(arr2).map((v) => v.charCodeAt() ** obj.exponent));
console.log(
  Array.from(
    arr2,
    function (x) {
      return x.charCodeAt() ** this.exponent;
    },
    obj
  )
);
// Array.of()
console.log(Array.of(1, 2, 3));
console.log(Array.of());
console.log(Array.of(undefined, null));
