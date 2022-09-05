/*
 * @Author: mangwu                                                             *
 * @File: 7.3.1.3 generator .js                                                *
 * @Date: 2022-09-05 15:44:40                                                  *
 * @LastModifiedDate: 2022-09-05 16:28:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const generatorFn = function* () {};
let gt = generatorFn();
console.log(gt);
console.log(gt.next);
console.log(gt.next());
console.log(gt);
console.log("-------");

const generatorFn2 = function* () {
  return "foo";
};
let gt2 = generatorFn2();
console.log(gt2.next());
console.log(gt2.next());
console.log("-------");
const generatorFn3 = function* () {
  console.log("Executed on the first call of next()");
  return "foo";
};
let gt3 = generatorFn3();
console.log(gt3.next());
console.log("上面是初次执行next的打印");
console.log(gt3.next());

// 自引用
console.log("------");
const gt4 = generatorFn3();
const gt5 = gt4[Symbol.iterator]();
console.log(gt4);
console.log(gt5);
console.log(gt4 === gt5);
