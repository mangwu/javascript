/*
 * @Author: mangwu                                                             *
 * @File: 4.5 accsseor functions.js                                            *
 * @Date: 2022-10-04 22:10:25                                                  *
 * @LastModifiedDate: 2022-10-04 22:15:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 访问器函数的this和普通函数一样

const obj = {
  *[Symbol.iterator]() {
    yield* [-2, -8, 6, 7, 9, 4];
  },
  get average() {
    let sum = 0;
    let n = 0;
    for (const val of this) {
      sum += val;
      n++;
    }
    return Math.floor(sum / n);
  },
};

// 调用average时会访问它的getter方法，此时this就是调用它的obj
console.log(obj.average);

const newObj = Object.create(obj);
newObj[Symbol.iterator] = function* () {
  yield* [5, 3, 8, -6, 5, 41];
};
// 调用average时会访问它的getter方法，此时this就是调用它的newObj
console.log(newObj.average);
