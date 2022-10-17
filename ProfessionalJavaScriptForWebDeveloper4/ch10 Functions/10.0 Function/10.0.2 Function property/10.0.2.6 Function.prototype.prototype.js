/*
 * @Author: mangwu                                                             *
 * @File: 10.0.2.6 Function.prototype.prototype.js                             *
 * @Date: 2022-10-15 22:13:51                                                  *
 * @LastModifiedDate: 2022-10-17 13:45:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// prototype属性在不同函数中有不同左右
// 一般在new调用构造函数时作为实例的原型的值
// 当有些特例，有些是函数没有prototype，有些是有prototype但是不能作为构造函数使用

// 生成器函数，有prototype但是不能使用new prototype会作为返回的生成器对象的原型
function* Generator() {
  yield* [1, 2, 3];
}

const iterator = Generator();
console.log(iterator.__proto__ === Generator.prototype);

// 符号函数和BigInt函数 ，同上（有prototype但不能使用new），prototype给原始值提供方法
const sym = Symbol("123");
const bigint = BigInt(123);
console.log(sym);
console.log(bigint);

// 绑定函数不具有prototype，但是可能是可构造的
function a() {}
const boundFunc = a.bind(null);
console.log(boundFunc.prototype);
const b = new boundFunc();
console.log(b);
console.log(b.__proto__ === a.prototype);

// 箭头函数不具有prototype所以不能作为构造函数(即使进行自定义)
const arrow = () => {};
console.log(arrow.prototype);
arrow.prototype = {
  constructor: arrow,
  __proto__: Object.prototype,
};
console.log(arrow);
try {
  const o = new arrow();
} catch (error) {
  console.log(error.toString());
}

// 原型是原始数据类型
function foo() {}
foo.prototype = 3;
const f = new foo();
console.log(foo.prototype);
console.log(f.__proto__ === Object.prototype);

// 给类添加原型属性
class Dog {
  constructor(name) {
    this.name = name;
  }
}
Dog.prototype.species = "dog";

console.log(new Dog("Jack").species);

class Dog2 {
  constructor(name) {
    this.name = name;
  }
  static {
    this.prototype.species = "dog";
  }
}
console.log(new Dog2("Jack").species);
