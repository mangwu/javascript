/*
 * @Author: mangwu                                                             *
 * @File: 10.14.1 closures.js                                                  *
 * @Date: 2022-10-10 16:42:05                                                  *
 * @LastModifiedDate: 2022-10-10 17:30:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 闭包，一个绑定周围环境状态中的引用的函数

// 之前的创建比较函数的函数中的匿名函数就是一个闭包,它引用外部函数的prop
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

// 更为通用的语法
function init() {
  var name = "Mozilla"; // local varible craeted by init
  function displayName() {
    // displayName是一个内部函数，闭包
    console.log(name); // 引用父函数中声明的变量
  }
  return displayName;
}


