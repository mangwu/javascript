/*
 * @Author: mangwu                                                             *
 * @File: 12.1.7.1.3 .js                                                       *
 * @Date: 2022-11-14 16:56:25                                                  *
 * @LastModifiedDate: 2022-11-14 22:34:03                                      *
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
const obj = {
  a: "objA",
  method() {
    console.log(this);
    console.log(this.a);
  },
};
obj.method();
setTimeout(obj.method);

setTimeout.call(obj, obj.method);

// 解决方案
// 使用箭头函数
function A() {
  this.a = "funcA";
  setTimeout(() => {
    console.log(this.a);
  });
}
A();

setTimeout(function () {
  obj.method();
});
setTimeout(obj.method.bind(obj))
