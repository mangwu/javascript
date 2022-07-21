/*
 * @Author: mangwu                                                             *
 * @File: 6.2.2.8 array_function.js                                            *
 * @Date: 2022-07-21 16:06:19                                                  *
 * @LastModifiedDate: 2022-07-21 17:33:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 数组的操作方法

//concat()
const primaryArr = ["1", { a: 2 }];
const defaultArr = [{ b: 3 }, 4];
const notSpreadableArr = [{ b: 3 }, 4];
notSpreadableArr[Symbol.isConcatSpreadable] = false;
const objLikeArray = {
  0: 3,
  2: 5,
  length: 3,
  [Symbol.isConcatSpreadable]: true,
};
let copy = null;
console.log((copy = primaryArr.concat(defaultArr)));
console.log(primaryArr.concat(notSpreadableArr));
console.log(primaryArr.concat(objLikeArray));

copy[1].a = "修改";
copy[2].b = "修改";
console.log(primaryArr, defaultArr);

// slice()
const arr = [1, { a: 2 }, 3, 4];
const newArr = arr.slice(-3, -1);
console.log(newArr);
newArr[0].a = "修改";
console.log(arr);

// splice()

const prarr = [1, "b", 3, "d"];
const deleteArr = prarr.splice(-5);
console.log(prarr, deleteArr);
console.log(prarr.splice(0, 0, 1, 2, 3, 4, 5), prarr);
console.log(prarr.splice(2, 2, "a", "b", "c", "d"), prarr);
console.log(prarr.splice(2, 0, "e"), prarr);

