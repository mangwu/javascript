/*
 * @Author: mangwu                                                             *
 * @File: 10.11.1 An.js                                                        *
 * @Date: 2022-10-10 00:00:23                                                  *
 * @LastModifiedDate: 2022-10-10 00:20:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 匿名函数表达式
// 立即运行
(function () {
  console.log("Code runs");
})();

function createComparisonFunction(prop) {
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
let a = createComparisonFunction("prop");
console.log(a); // 匿名

const func = function funcName() {
  console.log(funcName);
};

func();
var funcName = "123";
func();
