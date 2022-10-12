/*
 * @Author: mangwu                                                             *
 * @File: 10.16.2.1 create prili function.js                                   *
 * @Date: 2022-10-12 16:16:50                                                  *
 * @LastModifiedDate: 2022-10-12 16:23:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 使用闭包可以创建特权方法

// 在构造函数中创建
function SuperType() {
  // 私有变量和私有函数
  let privateVariable = 0;
  function privateFunction() {
    return false;
  }
  // 特权方法
  this.getPrivateVariable = function () {
    return privateVariable;
  };
  this.getPrivateFunction = function () {
    return privateFunction;
  };
}
