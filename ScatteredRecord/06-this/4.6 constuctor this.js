/*
 * @Author: mangwu                                                             *
 * @File: 4.6 constuctor this.js                                               *
 * @Date: 2022-10-04 22:20:34                                                  *
 * @LastModifiedDate: 2022-10-04 22:23:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 构造函数中的this引用new调用构造函数时创建的新对象

function C1() {
  this.a = 1;
}
let o = new C1();
console.log(o.a); // o就是new创建的新对象，能打印出1就反向证明this引用新对象

function C2() {
  this.a = 1;
  return {
    a: 2,
  };
}
o = new C2();
console.log(o.a); // 打印2，因为C2主动返回了一个对象，这个对象不也是默认返回的this
