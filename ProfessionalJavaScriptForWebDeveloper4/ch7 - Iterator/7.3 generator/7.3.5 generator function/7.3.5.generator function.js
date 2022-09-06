/*
 * @Author: mangwu                                                             *
 * @File: 7.3.5.generator function.js                                          *
 * @Date: 2022-09-06 17:32:59                                                  *
 * @LastModifiedDate: 2022-09-06 17:40:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 生成器方法
function* generatorFn() {
  yield 1;
  yield 2;
}
const gt = generatorFn();
console.log(gt.next);
console.log(gt.throw);
console.log(gt.return);
