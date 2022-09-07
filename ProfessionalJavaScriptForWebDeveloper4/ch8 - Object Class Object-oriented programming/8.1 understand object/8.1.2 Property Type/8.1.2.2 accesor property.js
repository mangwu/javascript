/*
 * @Author: mangwu                                                             *
 * @File: 8.1.2.2 .js                                                          *
 * @Date: 2022-09-07 20:36:38                                                  *
 * @LastModifiedDate: 2022-09-07 21:27:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 严格模式下对单一设置了set或get的访问器属性进行访问或修改会报错
// "use strict";
// 访问器属性
class Book {
  #year; // 私有成员
  constructor(year) {
    this.#year = year;
    this.edition = 1;
  }
  getYear() {
    return this.#year;
  }
  setYear(value) {
    let sub = value - this.#year;
    if (this.edition + sub > 0) {
      this.edition += sub;
      this.#year = value;
    }
  }
}
const book = new Book(2015);
console.log(book);
console.log(book.getYear());
// 使用定义属性的方法让其拥有一个访问器属性year
Object.defineProperty(book, "year", {
  configurable: true,
  enumerable: true,
  set(value) {
    this.setYear(value);
  },
  get() {
    return this.getYear();
  },
});
console.log(book);
console.log(book.year);
book.year = 2018;
console.log(book, book.year);
book.year = 2016;
console.log(book, book.year);
console.log("________");
// 可配置
const obj = {
  first: "mang",
};
Object.defineProperty(obj, "name", {
  configurable: true,
  enumerable: true,
  get() {
    return this.first;
  },
});
console.log("只定义get相当于name只读");
console.log(obj, obj.name);
obj.name = "wu"; // 无效
console.log(obj, obj.name);

Object.defineProperty(obj, "name2", {
  configurable: true,
  enumerable: true,
  set(value) {
    this.first = value;
  },
});
console.log("只定义get相当于name只写，无法通过句点调用获取值");
console.log(obj, obj.name2);
obj.name2 = "wu"; // 有效
console.log(obj, obj.name2);

Object.defineProperty(obj, "name", {
  configurable: false,
  enumerable: true,
  writable: true,
  value: "数据属性",
});
console.log("转换成数据属性");
console.log(obj, obj.name);
obj.name = "wu"; // 数据属性的赋值
console.log(obj, obj.name);
console.log("___________");
const obj2 = { first: "mang" };
Object.defineProperty(obj2, "name", {
  configurable: false,
  enumerable: true,
  get() {
    return this.first;
  },
});
console.log(obj2, obj2.name);
obj2.name = "123";
console.log("只定义了get无法修改属性指向的值");
console.log(obj2, obj2.name);
console.log("configurable设置成false了无法添加set了");
try {
  Object.defineProperty(obj2, "name", {
    configurable: false,
    enumerable: true,
    set(value) {
      this.first = value;
    },
  });
} catch (error) {
  console.log(error.message);
}
console.log("也无法修改定义好的get，即使使用相同逻辑的方法");
try {
  Object.defineProperty(obj2, "name", {
    configurable: false,
    enumerable: true,
    get() {
      return this.first;
    },
  });
} catch (error) {
  console.log(error.message);
}
delete obj2.name; // 被忽略

