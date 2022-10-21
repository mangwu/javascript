/*
 * @Author: mangwu                                                             *
 * @File: 11.2.2.4 Promise.solve.js                                            *
 * @Date: 2022-10-21 15:22:50                                                  *
 * @LastModifiedDate: 2022-10-21 17:12:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 静态方法Promise.resolve 返回一个处于兑现状态的Promise实例
let p1 = new Promise((resolve, reject) => resolve());

let p2 = Promise.resolve();

console.log(p1);
console.log(p2);

// Promise.resolve()的第一个参数就是期约实例的内部值
setTimeout(console.log, 0, Promise.resolve()); // Promise {<fulfilled>: undefined}
setTimeout(console.log, 0, Promise.resolve(3)); // Promise {<fulfilled>: 3}
setTimeout(console.log, 0, Promise.resolve({ a: "b" })); // Promise {<fulfilled>: { a: 'b' }}
setTimeout(console.log, 0, Promise.resolve(3, 4, 5)); // Promise {<fulfilled>: 3}

// 幂等性
let p3 = new Promise(() => {});
console.log(p3 === Promise.resolve(p3));
console.log(p3 === Promise.resolve(Promise.resolve(p3)));
console.log(p3);
// 包装错误对象

let p4 = Promise.resolve(new Error("foo"));
console.log(p4);