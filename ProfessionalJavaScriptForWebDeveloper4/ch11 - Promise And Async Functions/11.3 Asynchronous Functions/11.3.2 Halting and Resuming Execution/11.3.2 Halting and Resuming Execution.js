/*
 * @Author: mangwu                                                             *
 * @File: 11.3.2 Halting and Resuming Execution.js                             *
 * @Date: 2022-10-30 22:01:39                                                  *
 * @LastModifiedDate: 2022-10-30 23:16:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

async function foo() {
  console.log(await Promise.resolve("foo"));
}

async function bar() {
  console.log(await "bar");
}

async function baz() {
  console.log("baz");
}
foo();
bar();
baz();

// 异步函数在不关心返回值时，起关键作用的其实是await关键字
async function printOne() {
  console.log(2);
}
console.log(1);
printOne();
console.log(2);

// await会暂停异步函数的执行，记录位置
async function test() {
  console.log(2);
  await null;
  console.log(4);
}
console.log(1);
test();
console.log(3);


// 异步函数，await后面是期约的情况
async function test2() {
  console.log(2);
  console.log(await Promise.resolve(8));
  console.log(9);
}

async function test3() {
  console.log(4);
  console.log(await 6);
  console.log(7);
}
console.log(1);
test2();
console.log(3);
test3();
console.log(5);