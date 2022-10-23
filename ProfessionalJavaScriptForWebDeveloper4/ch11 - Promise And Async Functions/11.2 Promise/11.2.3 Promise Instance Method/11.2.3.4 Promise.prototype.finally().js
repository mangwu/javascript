/*
 * @Author: mangwu                                                             *
 * @File: 11.2.3.4 Promise.prototype.finally().js                              *
 * @Date: 2022-10-23 22:51:36                                                  *
 * @LastModifiedDate: 2022-10-23 23:45:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// finally()方法，添加onFinally处理程序，无法区分期约的状态
// 主要用于避免在拒绝和解决状态的处理程序中出现冗余代码
// 也可用于清理代码

let p1 = Promise.resolve("resolved value");
// node会直接报错
let p2 = Promise.reject("rejected reason");

let onFinally = function () {
  setTimeout(console.log, 0, "Finally!");
};

p1.finally(onFinally);
p2.finally(onFinally);

let p = Promise.resolve("foo");
let pa = p.finally();
setTimeout(console.log, 0, p, pa);
setTimeout(console.log, 0, p === pa);

let pb = p.finally(() => undefined);
let pc = p.finally(() => {});
let pd = p.finally(() => "bar");
let pe = p.finally(() => Promise.resolve("bar"));
let pf = p.finally(() => new Error("qux"));
setTimeout(console.log, 0, pb);
setTimeout(console.log, 0, pc);
setTimeout(console.log, 0, pd);
setTimeout(console.log, 0, pe);
setTimeout(console.log, 0, pf);

// 返回待定和拒绝的情况
let pg = p.finally(() => new Promise(() => {}));
let ph = p.finally(() => Promise.reject("reason"));

setTimeout(console.log, 0, pg);
setTimeout(console.log, 0, ph);

let pi = p.finally(() => {
  throw new Error("baz");
});

setTimeout(console.log, 0, pi);

// let p = Promise.resolve("foo");
// 返回待定的期约并不常见，这个待定的期约一旦被解决，就会返回为透传的新期约
// 返回一个待定的期约，这个期约在100ms后会被解决
let pj = p.finally(
  () => new Promise((resolve, reject) => setTimeout(() => resolve("bar"), 100))
);

setTimeout(console.log, 0, pj); // 0ms时返回的就是在onFinally中创建的新期约
setTimeout(console.log, 0, pj == p);

setTimeout(console.log, 200, pj); // 200ms时返回的就是透传的和调用者一样的新期约
setTimeout(console.log, 200, pj == p);
