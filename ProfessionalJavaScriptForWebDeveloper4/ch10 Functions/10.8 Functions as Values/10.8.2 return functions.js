/*
 * @Author: mangwu                                                             *
 * @File: 10.8.2 return functions.js                                           *
 * @Date: 2022-10-07 19:09:13                                                  *
 * @LastModifiedDate: 2022-10-07 19:44:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 返回函数对象

/**
 * @description 生成比较函数的函数
 * @param {string} type
 * @param  {...any} basis 排序依据
 * @returns {function}
 */
function createComparisonFunction(type = "ascend", ...basis) {
  return function (a, b) {
    const n = basis.length;
    for (let i = 0; i < n; i++) {
      let value1 = a[basis[i]];
      let value2 = b[basis[i]];
      // -1 value1排在前面
      // 1 value2排在前面
      if (value1 > value2) {
        return type == "ascend" ? 1 : -1;
      } else if (value2 > value1) {
        return type == "ascend" ? -1 : 1;
      } else {
        if (i === n - 1) {
          return 0;
        }
        continue;
      }
    }
    // 没有basis，默认将数组元素作为排序依据
    if (a > b) {
      return type == "ascend" ? 1 : -1;
    } else if (b > a) {
      return type == "ascend" ? -1 : 1;
    } else {
      return 0;
    }
  };
}

const data = [
  { name: "mangwu", age: 22 },
  { name: "mangwu", age: 23 },
  { name: "wumang", age: 22 },
  { name: "wumang", age: 23 },
];

data.sort(createComparisonFunction("descend", "name"));
console.log(data);
data.sort(createComparisonFunction("ascend", "age"));
console.log(data);
data.sort(createComparisonFunction("descend", "age", "name"));
console.log(data);
data.sort(createComparisonFunction("ascend", "name", "age"));
console.log(data);
