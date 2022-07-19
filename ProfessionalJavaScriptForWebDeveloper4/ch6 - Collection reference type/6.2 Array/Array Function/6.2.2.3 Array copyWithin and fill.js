/*
 * @Author: mangwu                                                             *
 * @File: 6.2.2.3 Array copyWithin and fill.js                                 *
 * @Date: 2022-07-19 15:14:50                                                  *
 * @LastModifiedDate: 2022-07-19 17:35:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 复制与填充方法

// copyWithin()
let arr;
let reset = () => (arr = ["a", "b", "c", "d", "e", "f"]);
// 传入target
reset();
console.log(arr.copyWithin(0));
reset();
console.log(arr.copyWithin(2));
reset();
console.log(arr.copyWithin(5));
reset();
console.log(arr.copyWithin(6));
reset();
console.log(arr.copyWithin(-2));
reset();
console.log(arr.copyWithin(-6));
reset();
console.log(arr.copyWithin(-7));

// 传入target + start
reset();
console.log(arr.copyWithin(2, 6));
reset();
console.log(arr.copyWithin(0, 2));
reset();
console.log(arr.copyWithin(3, 2));
reset();
console.log(arr.copyWithin(3, -2));
reset();
console.log(arr.copyWithin(1, -6));

// 传入 target + start + end
reset();
console.log(arr.copyWithin(2, 1, 4));
reset();
console.log(arr.copyWithin(-3, -5, 7));
reset();
console.log(arr.copyWithin(0, 4, 1));

// 类数组
const objLikeArray = {
  length: 5,
  0: "a",
  2: "b",
  4: "c",
};
console.log(Array.from(objLikeArray));
console.log([].copyWithin.call(objLikeArray, 1, 2, 5));

// fill()
reset();
console.log(arr.fill(2));
reset();
console.log(arr.fill(2, 0, 100));
reset();
console.log(arr.fill(2, -9, -2));
reset();
console.log(arr.fill(2, 2, 2));
