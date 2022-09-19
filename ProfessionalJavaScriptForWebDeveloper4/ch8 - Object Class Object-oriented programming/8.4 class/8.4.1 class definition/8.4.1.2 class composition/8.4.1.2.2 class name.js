/*
 * @Author: mangwu                                                             *
 * @File: 8.4.1.2.2 class name.js                                              *
 * @Date: 2022-09-19 10:43:18                                                  *
 * @LastModifiedDate: 2022-09-19 10:49:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 类表达式 类名称自定义
let Person = class PersonName {
  identify() {
    console.log(Person.name, PersonName.name);
  }
};

let p = new Person();
p.identify();

console.log(Person.name);
try {
  console.log(PersonName);
} catch (error) {
  console.log(error.message);
}
console.log(Object.getOwnPropertyDescriptor(Person, "name"));
Object.defineProperty(Person, "name", {
  writable: true,
  configurable: true,
  value: "Person",
});
p.identify();
