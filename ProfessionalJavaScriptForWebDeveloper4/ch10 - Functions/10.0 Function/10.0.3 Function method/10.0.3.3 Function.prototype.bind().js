/*
 * @Author: mangwu                                                             *
 * @File: 10.0.3.3 function.prototype.bind().js                                *
 * @Date: 2022-10-18 17:34:42                                                  *
 * @LastModifiedDate: 2022-10-19 03:01:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 逻辑上等价
function func() {
  console.log(arguments);
}

const boundFn1 = func.bind(null, 1, 2);
const boundFn2 = (...rest) => func.call(null, 1, 2, ...rest);

boundFn1(3, 4); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
boundFn2(3, 4); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

// 进一步绑定
function fn() {
  console.log(this, ...arguments);
}

const boundFnc1 = fn.bind("this value", 2, 8);
const boundFnc2 = boundFnc1.bind("new this value", 4, 1);
boundFnc2.call("another this value", 3, 7);

// 使用绑定函数作为构造函数
function Base() {
  console.log(...arguments);
  console.log(new.target === Base);
  console.log(arguments.callee);
}

const BoundBase = Base.bind(null, 1, 2);
new BoundBase(3, 4);

try {
  class Derived extends BoundBase {}
} catch (error) {
  console.log(error.toString());
}

class A {}
const B = A.bind(null, 1, 2);
const C = B.bind(null, 3, 4);
const a = new A();
const b = new B();
console.log(a instanceof B);
console.log(a instanceof C);
console.log(b instanceof A);
console.log(b instanceof C);

// 绑定函数的属性
class D {
  constructor(a, b, c, d) {}
  static {
    this.x = 1;
    this.y = 2;
  }
}
class E extends D {}
const BoundD = D.bind(null, 2);
const BoundE = E.bind(null, 2);
console.log(BoundE.__proto__ === E.__proto__);
console.log(BoundE.__proto__ === D);
console.log(BoundD.__proto__ === Function.prototype);
console.log(D.length);
console.log(BoundD.length);
console.log(BoundD.x);
console.log(BoundE.x);

// 偏函数
function list(...args) {
  return args;
}
console.log(list(1, 2, 3));
const leading37List = list.bind(null, 37);
console.log(leading37List(1, 2, 3));

// setTimeout
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}
LateBloomer.prototype.bloom = function () {
  // 1秒后执行decalre
  setTimeout(this.declare.bind(this), 1000);
};
LateBloomer.prototype.declare = function () {
  console.log(`我是有${this.petalCount}朵花瓣的鲜花`);
};
const flower = new LateBloomer();
flower.bloom();

// 使用绑定函数作为构造函数的优劣'
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
Point.prototype.toString = function () {
  return `${this.x},${this.y}`;
};

const YAxisPoint = Point.bind(null, 0);
const p = new Point(2, 5);
const p2 = new YAxisPoint(3);
console.log(p.toString());
console.log(p2.toString());

// 类数组
const slice = Array.prototype.slice;
const arrLikeObj = {
  1: 0,
  2: 5,
  0: 2,
  3: 7,
  length: 4,
};
console.log(slice.apply(arrLikeObj));

const slice2 = Function.prototype.apply.bind(Array.prototype.slice);
console.log(slice2(arrLikeObj));
