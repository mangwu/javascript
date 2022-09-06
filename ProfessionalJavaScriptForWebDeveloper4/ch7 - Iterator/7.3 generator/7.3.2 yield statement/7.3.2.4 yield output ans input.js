/*
 * @Author: mangwu                                                             *
 * @File: 7.3.2.4.js                                                           *
 * @Date: 2022-09-06 13:54:53                                                  *
 * @LastModifiedDate: 2022-09-06 14:23:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// yield的输入与输出
function* inputAndOutPut(initial) {
  console.log(initial);
  let first = yield 1;
  console.log(
    "本语句是第二个next()调用时执行，第一次调用的next参数不会被使用，但上一个yield返回本次传递给next参数的值",
    first
  );
  let second = yield 2;
  console.log("本语句是第三个next(),第三个next的参数为", second);
  let third = yield 3;
  console.log("本语句是第四个next(),第四个next的参数为", third);
  return "foo";
}
const gt = inputAndOutPut("initial");
console.log("------");
console.log(gt.next("不会被使用的值"));
console.log("------");

console.log(gt.next("next2"));
console.log("------");

console.log(gt.next("next3"));
console.log("------");

console.log(gt.next("next4"));
console.log("------");

// 同时用于输入输出
function* gFn() {
  return yield "foo";
}
const gt2 = gFn();
console.log(gt2.next());
console.log(gt2.next("bar"));
