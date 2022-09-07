/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-07 00:00:55                                                  *
 * @LastModifiedDate: 2022-09-07 15:09:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const person = {};
Object.defineProperty(person, "name", {
  configurable: false,
  writable: true,
  value: "mangwu",
  enumerable: true,
});
console.log(person.name);
person.name = "wumang";
console.log(person.name);
Object.defineProperty(person, "name", {
  configurable: false,
  writable: false,
  value: "mangwu",
});
console.log(person.name);
person.name = "wumang";
console.log(person.name);
// Object.defineProperty(person, "name", {
//   configurable: false,
//   // writable: true,
//   // value: "wumang",
// });
// console.log(person.name);
// person.name = "wumang";
// console.log(person.name);
console.log("______");
const student = {};
Object.defineProperty(student, "id", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 1,
});
console.log(student.id);
for (const key in student) {
  console.log(key);
  student[key] = 2;
}
console.log(student.id);

Object.defineProperty(student, "id", {
  configurable: true,
  writable: false,
  value: 3,
});
console.log(student);
console.log(student.id);
for (const key in student) {
  console.log(key);
  student[key] = 2;
}
console.log(student.id);
console.log("______");
// 1. configurable true
const obj1 = {};
Object.defineProperty(obj1, "name", {
  configurable: true,
  value: "mangwu",
});
// 默认情况属性不可枚举，属性值不可修改
console.log("默认情况属性不可枚举，属性值不可修改");
console.log(obj1, obj1.name);
for (const item in obj1) {
  console.log(item);
}
obj1.name = "wumang";
console.log(obj1, obj1.name);
// 可主动修改可枚举，可写属性
console.log("修改为可枚举，可写");
Object.defineProperty(obj1, "name", {
  value: "wumang",
  writable: true,
  enumerable: true,
});
console.log(obj1, obj1.name);
for (const item in obj1) {
  console.log(item);
}
obj1.name = "mangwu";
console.log(obj1, obj1.name);
// 重新修改为不可写
console.log("重新修改为不可写");
Object.defineProperty(obj1, "name", {
  value: "wumang",
  writable: false,
});
console.log(obj1, obj1.name);
for (const item in obj1) {
  console.log(item);
}
obj1.name = "mangwu";
console.log(obj1, obj1.name);
console.log("删除属性");
delete obj1.name;
console.log(obj1, obj1.name);

// 2. configurable false
console.log("_________");
const obj2 = {};
console.log("默认为不可配置的属性");
Object.defineProperty(obj2, "name", {
  enumerable: true,
  writable: true,
  value: "mangwu",
});
console.log("通过普通赋值方式可以修改value值");
console.log(obj2, obj2.name);
for (const item in obj2) {
  console.log(item);
}
obj2.name = "wumang";
console.log(obj2, obj2.name);
console.log("通过defineProperty方式可以修改value值");
Object.defineProperty(obj2, "name", {
  writable: true,
  value: "mangwu",
});
console.log(obj2, obj2.name);
console.log("不能修改configurable和enumerable特性");
try {
  Object.defineProperty(obj2, "name", {
    enumerable: false,
  });
} catch (error) {
  console.log("修改enumerable报错：", error.message);
}
try {
  Object.defineProperty(obj2, "name", {
    configurable: true,
  });
} catch (error) {
  console.log("修改configurable报错：", error.message);
}
console.log("可以单项修改writable:true=> writable: false");
Object.defineProperty(obj2, "name", {
  writable: false,
  value: "wumang",
});
console.log("修改成功后，不能通过defineProperty修改value值");
try {
  Object.defineProperty(obj2, "name", {
    value: "mangwu",
  });
} catch (error) {
  console.log("修改value报错：", error.message);
}
obj2.name = "mangwu"; // 会被忽略
console.log(obj2);
delete obj2.name; // 会被忽略
console.log(obj2);
