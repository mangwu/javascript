/*
 * @Author: mangwu                                                             *
 * @File: 8.3.1.1 understand prototype chain.js                                *
 * @Date: 2022-09-16 16:39:31                                                  *
 * @LastModifiedDate: 2022-09-16 23:34:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 理解原型链

function SuperType() {
  this.property = true;
}
SuperType.prototype.getSuperValue = function () {
  return this.property;
};
function SubType() {
  this.subproperty = false;
}
const instance2 = new SubType();
// 继承SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};

const instance = new SubType();
console.log(instance.getSuperValue()); // true
console.log(instance); // SuperType { subproperty: false }
console.log(instance instanceof SubType); // true
console.log(instance instanceof SuperType); // true
console.log(instance2 instanceof SubType);
console.log(instance2 instanceof SuperType);

