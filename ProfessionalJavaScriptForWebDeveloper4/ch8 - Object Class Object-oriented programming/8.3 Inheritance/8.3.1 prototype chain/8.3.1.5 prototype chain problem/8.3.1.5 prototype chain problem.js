/*
 * @Author: mangwu                                                             *
 * @File: 8.3.1.5 prototype chain problem.js                                   *
 * @Date: 2022-09-17 18:13:45                                                  *
 * @LastModifiedDate: 2022-09-17 18:17:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 原型链的问题
// 和原型的问题类似，原型上的属性不可避免的会出现引用值的情况
// 因为实现继承时将一个实例作为类型的原型会导致实例的属性变为原型属性
// 而实例属性大概率会有是引用值的属性，这就导致该类型的所有实例共享一个具有引用值的原型属性

function SuperType() {
  this.colors = ["red", "blue", "green"];
}
function SubType() {}
SubType.prototype = new SuperType();

let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);
let instance2 = new SubType();
console.log(instance2.colors);
