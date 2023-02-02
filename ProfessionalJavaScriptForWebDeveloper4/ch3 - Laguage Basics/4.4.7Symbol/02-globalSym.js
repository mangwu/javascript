/*
 * @Author: mangwu                                                             *
 * @File: 02-globalSym.js                                                      *
 * @Date: 2022-02-24 21:36:25                                                  *
 * @LastModifiedDate: 2022-02-24 22:00:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 通过for创建全局符号
const globalSym = Symbol.for("foo");
console.log(globalSym);

// 重用全局符号
const otherGlobalSym = Symbol.for("foo");
console.log(globalSym == otherGlobalSym);

// 描述符号相同的局部符号是个新符号和全局符号不相等
const localSym = Symbol("foo");
console.log(globalSym === localSym);

// 键值必须时字符串，仍然参数都会被转化为字符串
const globalSym2 = Symbol.for(); // 相当于undefined
const globalSym3 = Symbol.for(null); // 转化为"null"
const globalSym4 = Symbol.for([]); // 空字符串
console.log(globalSym2, globalSym3, globalSym4);

// 查询符号的键,只对全局符号有效
console.log(Symbol.keyFor(globalSym3));
console.log(Symbol.keyFor(localSym));
try {
  console.log(Symbol.keyFor("foo"));
} catch (error) {
  console.log("查询的不是符号", error);
}
