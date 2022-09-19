/*
 * @Author: mangwu                                                             *
 * @File: 8.4.1.2.0.2.js                                                       *
 * @Date: 2022-09-19 15:38:56                                                  *
 * @LastModifiedDate: 2022-09-19 15:54:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 1. 基本的类表达式写法
var PersonClass = class {
  // 等价于 PersonType 构造函数
  constructor(name) {
    this.name = name;
  }
  // 等价于PersonType.prototype.sayName
  sayName() {
    console.log(this.name);
  }
};

// 2. 命名类表达式
var PersonClass2 = class PersonName {
  // 等价于 PersonType 构造函数
  constructor(name) {
    this.name = name;
  }
  // 等价于PersonType.prototype.sayName
  sayName() {
    console.log(this.name);
  }
};
console.log(PersonClass2.name); // PersonName
console.log(typeof PersonClass2); // function
console.log(typeof PersonName); // undefined

// 3. 等价的命名类表达式
let PersonClass2 = (function () {
  "use strict";
  const PersonName = function (name) {
    // 确保通过关键字new调用该方法
    if (typeof new.target === "undefined") {
      // throw new Error("必须通过new关键字调用构造函数");
      throw new TypeError(
        "Class constructor PersonClass cannot be invoked without 'new'"
      );
    }
    this.name = name;
  };
  Object.defineProperty(PersonName.prototype, "sayName", {
    value: function () {
      // 确保不会通过new调用该方法
      if (typeof new.target !== "undefined") {
        throw new Error("不可使用关键字new调用该方法");
      }
      console.log(this.name);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
  return PersonName;
})();
