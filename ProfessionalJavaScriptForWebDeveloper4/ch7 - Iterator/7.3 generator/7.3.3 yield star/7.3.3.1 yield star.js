/*
 * @Author: mangwu                                                             *
 * @File: 7.3.3.1 yield star.js                                                *
 * @Date: 2022-09-06 15:09:00                                                  *
 * @LastModifiedDate: 2022-09-06 15:24:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// yield *
function* generatorFn() {
  yield* [1, 2, 3];
}
function* generatorFn2() {
  for (const item of [1, 2, 3]) {
    yield item;
  }
}
for(const item of generatorFn()) {
  console.log(item);
}
for(const item of generatorFn2()) {
  console.log(item);
}
