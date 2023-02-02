/**
 * @description  03-asProperties.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-02-24 22:12:19
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 计算属性语法
let a = 1;
let c = 2;
const obj = {
  [a]: 2,
  a: 3,
};
obj[c] = 2;
console.log(obj);

// 符号属性需要使用计算属性语法
const sym = Symbol("foo");
const sym2 = Symbol("foo");
const obj2 = {
  [sym]: "foo",
};
obj2[sym2] = "foo";
console.log(obj2);

// 通过对象定义属性方法定义符号属性
let o = {};
Object.defineProperty(o, sym, { value: "sym's value" });
console.log(o, o[sym]);
Object.defineProperty(obj2, sym, { value: "sym's value" });
console.log(obj2);

// 定义多个
let obj3 = {};
Object.defineProperties(obj3, {
  [sym]: {
    value: "Hello",
  },
  [sym2]: {
    value: "world",
  },
});
console.log(obj3, obj3[sym2]);

// 获取对象属性键
console.log("---对象属性键---");
obj[sym] = "Hello";
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Reflect.ownKeys(obj));
console.log(Object.getOwnPropertyDescriptor(obj, sym));

// 寻找未显示保存在变量中的符号属性

let obj4 = {
  [Symbol("foo")]: "symfoo",
  [Symbol("bar")]: "symbar",
};
let symbar = Object.getOwnPropertySymbols(obj4).find((sym) =>
  sym.toString().match(/bar/)
);
console.log(symbar);
