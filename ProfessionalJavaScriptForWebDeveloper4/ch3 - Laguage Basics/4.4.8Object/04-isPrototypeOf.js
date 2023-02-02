/*
 * @Author: mangwu                                                             *
 * @File: 04-isPrototypeOf.js                                                  *
 * @Date: 2022-05-23 21:38:25                                                  *
 * @LastModifiedDate: 2022-05-23 21:41:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 检查类是否在对象上的原型链上（实际上就是检查类是否是该对象的类或父类）

class A {}
function B() {}
function C() {}

// 连接原型链
B.prototype = Object.create(A.prototype);
C.prototype = Object.create(B.prototype);

const c = new C();
console.log(C.prototype.isPrototypeOf(c));
console.log(B.prototype.isPrototypeOf(c));
console.log(A.prototype.isPrototypeOf(c));
console.log(Object.prototype.isPrototypeOf(c));
