/*
 * @Author: mangwu                                                             *
 * @File: 10.14.2 scope chain.js                                               *
 * @Date: 2022-10-10 17:31:20                                                  *
 * @LastModifiedDate: 2022-10-12 10:08:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 作用域链
function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
let result1 = compare(5, 10);

function createComparisionFunction(prop) {
  return function (a, b) {
    let v1 = a[prop];
    let v2 = b[prop];
    if (v1 < v2) {
      return -1;
    } else if (v1 > v2) {
      return 1;
    } else {
      return 0;
    }
  };
}

// 创建比较函数
let compareNames = createComparisionFunction("name");
// 调用函数
let result = compareNames({ name: "Nicholas" }, { name: "Matt" });
// 销毁compare才会使得createComparisionFunction的活动对象在内存中被释放
compareNames = null;
