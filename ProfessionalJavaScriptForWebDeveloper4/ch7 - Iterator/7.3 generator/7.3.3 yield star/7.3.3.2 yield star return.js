/*
 * @Author: mangwu                                                             *
 * @File: 7.3.3.2 yield star return.js                                         *
 * @Date: 2022-09-06 15:25:04                                                  *
 * @LastModifiedDate: 2022-09-06 15:44:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function* generatorFn() {
  yield 1;
  yield 2;
  return "foo";
}
function* generatorFn2() {
  let first = yield* generatorFn();
  console.log("yield *的返回值：", first);
  yield first;
}
for (const item of generatorFn2()) {
  console.log("------");
  console.log(item);
  console.log("------");
}
