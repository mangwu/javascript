/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.2.3.0 nullProtoObj.js                                          *
 * @Date: 2022-09-14 14:10:46                                                  *
 * @LastModifiedDate: 2022-09-14 15:49:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 纯净对象
const obj = {};
const nullProtoObj = Object.create(null);

console.log(obj.toString());
// console.log(nullProtoObj.toString());

// alert(obj);
// alert(nullProtoObj);

obj.valueOf(); // {}
// nullProtoObj.valueOf(); // Uncaught TypeError: nullProtoObj.valueOf is not a function

obj.hasOwnProperty("p"); // false
// nullProtoObj.hasOwnProperty("p"); // Uncaught TypeError: nullProtoObj.hasOwnProperty is not a function

obj.constructor; // Object() {[native code]}
nullProtoObj.constructor; // undefined

nullProtoObj.toString = Object.prototype.toString;
nullProtoObj.toString();

delete nullProtoObj.toString;

// 自定义原型
const proto = Object.create(null);
Object.setPrototypeOf(nullProtoObj, proto);
Object.getPrototypeOf(nullProtoObj).toString = Object.prototype.toString;
Object.getPrototypeOf(nullProtoObj).__proto__ = proto;
Object.defineProperties(proto, {
  constructor: {
    value: Symbol("DIYPrototype"),
  },
  toLocaleString: {
    value: function () {
      return this.toString() + "DIYPrototype";
    },
  },
});

// 普通对象的bug
let ages = { alice: 18, bob: 17 };
function hasPerson(name) {
  return name in ages;
}
function getAge(name) {
  return ages[name];
}

hasPerson("alice"); // true
console.log(hasPerson("hasOwnProperty")); // true
console.log(getAge("bob")); // 17
console.log(getAge("toString")); // [Function: toString]

ages = Object.create(null, {
  alice: {
    enumerable: true,
    value: 18,
  },
  bob: {
    enumerable: true,
    value: 17,
  },
});

hasPerson("alice"); // true
console.log(hasPerson("hasOwnProperty")); // false
console.log(getAge("bob")); // 17
console.log(getAge("toString")); // undefined

let user = {};
Object.prototype.authenticated = true;
if (user.authenticated) {
  // 能访问到敏感数据了
  console.log(true);
}

// 使用纯净对象
user = Object.create(null);
Object.prototype.authenticated = true;
if (user.authenticated) {
  // 不会被访问
  console.log(true);
}