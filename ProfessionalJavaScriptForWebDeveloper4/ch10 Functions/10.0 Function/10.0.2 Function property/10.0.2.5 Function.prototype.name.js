/*
 * @Author: mangwu                                                             *
 * @File: 10.0.2.5 FUnction.prototype.name.js                                  *
 * @Date: 2022-10-14 13:57:57                                                  *
 * @LastModifiedDate: 2022-10-15 20:24:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 函数名称
function doSomething() {}
console.log(doSomething.name);
let temp = doSomething;
doSomething = null;
console.log(temp.name);

// export
exports.test = function () {
  return false;
};

console.log(new Function().name);
// 函数表达式
console.log(function hello() {}.name);
console.log(function () {}.name);
let k = function () {};
console.log(k.name);

// 方法
const o = {
  someMethod: function a() {
    return false;
  },
  someMethod2: function () {
    return true;
  },
  someMethod3() {
    return true;
  },
};
console.log(o.someMethod.name);
console.log(o.someMethod2.name);
console.log(o.someMethod3.name);

// 其它
const [f = () => {}] = [];
console.log(f.name);

const { someMethod: m = () => {} } = {};
console.log(m.name);

function foo(f = () => {}) {
  console.log(f.name);
}
foo();

class Foo {
  static someMethod = () => {};
}
console.log(Foo.someMethod.name);

// bind
function foo() {}
console.log(foo.bind({}).name);
// setter
const obj = {
  set prop(v) {},
  get prop() {},
};

const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors.prop.get.name);
console.log(descriptors.prop.set.name);

// 类
class A {}
const B = class C {};
class D {
  static name = "ABCD";
}
console.log(A.name);
console.log(B.name);
console.log(D.name);
console.log(A);
console.log(B);
console.log(D);

class E {
  static name() {
    return false;
  }
}
console.log(E.name);
console.log(E);

// 符号
const sym1 = Symbol();
const sym2 = Symbol("foo");
const obj2 = {
  [sym1]() {},
  [sym2]() {},
};
console.log(obj2);
console.log(obj2[sym1].name);
console.log(obj2[sym2].name);

// 私有属性
class F {
  #field = () => {};
  #method() {}
  getNames() {
    console.log(this.#field.name);
    console.log(this.#method.name);
  }
}
new F().getNames();

// 不要使用name属性值
function Bar() {}
const bar = new Bar();
if (bar.constructor.name === "Bar") {
  console.log("bar is an instance of Bar");
} else {
  console.log("Oops");
}
