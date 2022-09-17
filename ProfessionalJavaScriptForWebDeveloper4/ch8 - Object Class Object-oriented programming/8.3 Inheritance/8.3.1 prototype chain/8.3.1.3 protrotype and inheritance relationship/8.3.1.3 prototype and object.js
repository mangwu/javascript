/*
 * @Author: mangwu                                                             *
 * @File: 8.3.1.3 prototype and object.js                                      *
 * @Date: 2022-09-16 23:40:00                                                  *
 * @LastModifiedDate: 2022-09-16 23:44:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 原型和实例的关系
function SuperType() {
  this.property = true;
}
SuperType.prototype.getSuperValue = function () {
  return this.property;
};
function SubType() {
  this.subproperty = false;
}
const primaryInstance = new SubType();
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};
const instance = new SubType();
console.log(Object.prototype.isPrototypeOf(instance));
console.log(SuperType.prototype.isPrototypeOf(instance));
console.log(SubType.prototype.isPrototypeOf(instance));

console.log(Object.prototype.isPrototypeOf(primaryInstance));
console.log(SuperType.prototype.isPrototypeOf(primaryInstance));
console.log(SubType.prototype.isPrototypeOf(primaryInstance));

console.log(primaryInstance instanceof Object);
console.log(primaryInstance instanceof SuperType);
console.log(primaryInstance instanceof SubType);
