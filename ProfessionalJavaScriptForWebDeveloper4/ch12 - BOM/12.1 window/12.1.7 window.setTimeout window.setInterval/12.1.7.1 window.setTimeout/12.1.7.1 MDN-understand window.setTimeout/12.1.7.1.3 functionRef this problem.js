/*
 * @Author: mangwu                                                             *
 * @File: 12.1.7.1.3 .js                                                       *
 * @Date: 2022-11-14 16:56:25                                                  *
 * @LastModifiedDate: 2022-11-14 17:35:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 计时器函数的this默认为全局对象
globalThis.a = "a";
// const obj = {
//   a: "objA",
//   method() {
//     console.log(this);
//     console.log(this.a);
//   },
// };
// obj.method();
// setTimeout(obj.method);

// setTimeout.call(obj, obj.method);

// 解决方案
const obj2 = {
  a: "obj2A",
  method: () => {
    console.log(this);
    console.log(this.a);
  },
};
setTimeout.call(obj2, obj2.method);
