/*
 * @Author: mangwu                                                             *
 * @File: 10.6.2 Rest Arguments.js                                             *
 * @Date: 2022-10-07 03:23:54                                                  *
 * @LastModifiedDate: 2022-10-07 04:00:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 收集参数
// 在定义函数时，使用扩展操作符把不同长度的独立形式参数组合成一个数组使用

function getSum(...values) {
  let sum = 0;
  for (const item of values) {
    sum += item;
  }
  return sum;
}

function getSum(...values) {
  return values.reduce((pre, cur) => pre + cur, 0);
}

function ignoreFirst(firstValue, ...rest) {
  console.log(rest);
}
ignoreFirst(1);
ignoreFirst(1, 2, 3);
ignoreFirst(1, 2, 3, 4);

const getSumArrow = (...values) => {
  return values.reduce((x, y) => x + y, 0);
};
getSumArrow(1, 2, 3, 4);

function getSum(...values) {
  console.log(arguments.length);
  console.log(arguments);
  arguments[0] = "k";
  console.log(arguments);
  console.log(values);
}
getSum(1, 2, 3, 4);

function ignoreRest(firstValue, ...rest) {
  arguments[0] = "k";
  console.log(firstValue);
}
ignoreRest(...[1, 2, 3, 4]);
