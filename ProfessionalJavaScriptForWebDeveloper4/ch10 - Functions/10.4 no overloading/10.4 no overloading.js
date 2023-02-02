/*
 * @Author: mangwu                                                             *
 * @File: 10.4 no overloading.js                                               *
 * @Date: 2022-10-06 02:44:02                                                  *
 * @LastModifiedDate: 2022-10-06 02:50:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// JavaScript中不存在重载
// 同名函数后面的会覆盖前面的

function addSomeNum(num) {
  return num + 100;
}

function addSomeNum(num) {
  return num + 200;
}

let addSomeNum2 = function (num) {
  return num + 100;
};
addSomeNum2 = function (num) {
  return num + 200;
};
addSomeNum2(100)