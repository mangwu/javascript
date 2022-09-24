/*
 * @Author: mangwu                                                             *
 * @File: 9.1.6.2 Reflect.construct().js                                       *
 * @Date: 2022-09-23 22:05:02                                                  *
 * @LastModifiedDate: 2022-09-23 23:56:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 和new Function类似
// 可以指定原型
function OneClass() {
  this.name = "one";
}
function OtherClass() {
  this.name = "other";
}

// 使用construct构造一个OneClass实例，使用OtherClass.prototype作为原型
const obj1 = Reflect.construct(OneClass, [], OtherClass);

// 使用Object.create创建
const obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2);

console.log(obj1); // OtherClass { name: 'one' }
console.log(obj2); // OtherClass { name: 'one' }

console.log(obj1 instanceof OneClass);
console.log(obj2 instanceof OneClass);

console.log(obj1 instanceof OtherClass);
console.log(obj2 instanceof OtherClass);

// 可以指定原型
function OneClass() {
  this.name = "one";
  console.log("OneClass");
  console.log(new.target);
}
function OtherClass() {
  this.name = "other";
  console.log("OtherClass");
  console.log(new.target);
}

// 使用construct构造一个OneClass实例，使用OtherClass.prototype作为原型
const obj3 = Reflect.construct(OneClass, [], OtherClass);

// 使用construct构造一个OneClass实例，
const obj4 = Reflect.construct(OneClass, []);

// 使用Object.create创建
const obj5 = Object.create(OtherClass.prototype);
OneClass.apply(obj5);

console.log(obj3); // OtherClass { name: 'one' }
console.log(obj4); // OneClass { name: 'one' }
console.log(obj5); // OtherClass { name: 'one' }

