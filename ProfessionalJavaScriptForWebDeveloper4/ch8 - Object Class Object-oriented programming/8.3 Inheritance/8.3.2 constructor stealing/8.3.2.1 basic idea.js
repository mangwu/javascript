/*
 * @Author: mangwu                                                             *
 * @File: 8.3.2.1 basic idea.js                                                *
 * @Date: 2022-09-17 18:37:09                                                  *
 * @LastModifiedDate: 2022-09-17 18:39:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 盗用构造函数的基本思路，在子类构造函数中调用父类的构造函数
// 调用时指定新创建对象的上下文执行函数即可

function SuperType() {
  this.colors = ["red", "blue", "green"];
}

function SubType() {
  // 继承SuperType
  SuperType.call(this);
}

const instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);
const instance2 = new SubType();
console.log(instance2.colors);

