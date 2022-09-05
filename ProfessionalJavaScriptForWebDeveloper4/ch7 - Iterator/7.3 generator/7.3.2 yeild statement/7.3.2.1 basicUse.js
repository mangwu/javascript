/*
 * @Author: mangwu                                                             *
 * @File: 7.3.2.1 basicUse.js                                                  *
 * @Date: 2022-09-05 17:07:53                                                  *
 * @LastModifiedDate: 2022-09-05 17:35:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 基本使用
function* generatorFn() {
  console.log("1");
  yield "foo";
  console.log("2");
  yield "bar";
  console.log("3");
  return "baz";
}
const gt1 = generatorFn();
console.log(gt1.next());
console.log(gt1.next());
console.log(gt1.next());
console.log(gt1.next());

function* generatorFn2() {
  let step;
  let value = 0;
  step = yield value++;
  console.log(step);
  if (step) {
    value += step;
  }
  step = yield value++;
  console.log(step);
  if (step) {
    value += step;
  }
  step = yield value++;
  if (step) {
    value += step;
  }
  step = yield value++;
  if (step) {
    value += step;
  }
}
const gt2 = generatorFn2();
console.log(gt2.next(1));
console.log(gt2.next(2));
console.log(gt2.next(4));
