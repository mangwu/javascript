/*
 * @Author: mangwu                                                             *
 * @File: 01-baseUse.js                                                        *
 * @Date: 2022-02-23 23:23:51                                                  *
 * @LastModifiedDate: 2022-02-24 00:00:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 不能用new声明
let sym = Symbol();
console.log(typeof sym);

// 可以使用字符串和数字对符号实例进行描述
let foosym = Symbol("foo");
let otherfoosym = Symbol("foo");

// 当这种描述与符号的定义和标识完全无关，只用于代码调试
console.log(foosym == otherfoosym);
console.log(foosym === otherfoosym);
console.log(foosym);

// 当作新属性，不会覆盖已有属性
const a = {
  foo: "oldFoo",
  foo: "newFoo",
};

a[foosym] = "oldFoo";
a[foosym] = "newFoo";
a[otherfoosym] = "newFoo";
console.log(a);

// 包装对象
const mySym = Symbol("mySym");
const objectSym = new Object(mySym);
console.log(objectSym, objectSym.description);