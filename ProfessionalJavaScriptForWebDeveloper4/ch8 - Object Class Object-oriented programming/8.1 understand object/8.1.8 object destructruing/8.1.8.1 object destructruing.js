/*
 * @Author: mangwu                                                             *
 * @File: 8.1.7.4 object.js                                                    *
 * @Date: 2022-09-12 18:58:25                                                  *
 * @LastModifiedDate: 2022-09-12 20:44:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 对象解构
// 1. 基本语法
const person = {
  age: 23,
  name: "mangwu",
};
// 不使用对象解构赋值
let page = person.age;
// 使用解构赋值
const { age: personAge, name: personName } = person;
console.log(personAge, personName);

// 2. 简写
const cat = {
  catAge: 3,
  type: "野猫",
};
const { catAge, type } = cat;
console.log(catAge, type);

// 3. 默认值
const dog = {
  dogAge: 1,
  dogType: "中华田园犬",
};
const { dogAge, dogType: dType = 0, dogGender = "公" } = dog;
console.log(dogAge, dType, dogGender);

// 4. 事先声明
let a, b, c;
let d = {};
const obj = {
  a: 1,
  b_: 2,
  e: {
    f: 4,
  },
};
({ a, b_: b, c = 3, e: d.e } = obj);
console.log(a, b, c, d); // 1 2 3
d.e.f = 5;
console.log(obj);

// 5. 类型转换
const { length } = "str";
console.log(length);
const { constructor: sc } = Symbol(123);
console.log(sc, sc === Symbol);
try {
  const { _ } = null;
} catch (error) {
  console.log(error.message);
}
