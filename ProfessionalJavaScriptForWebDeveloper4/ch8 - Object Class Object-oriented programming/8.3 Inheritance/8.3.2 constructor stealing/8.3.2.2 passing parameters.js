/*
 * @Author: mangwu                                                             *
 * @File: 8.3.2.2 .js                                                          *
 * @Date: 2022-09-17 22:23:43                                                  *
 * @LastModifiedDate: 2022-09-17 22:25:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 传递参数，盗用构造函数可以传递参数
function SuperType(property) {
  this.property = property;
}

function SubType() {
  SuperType.call(this, "mangwu");
  this.age = 22;
}

const instance = new SubType();
console.log(instance);
