/*
 * @Author: mangwu                                                             *
 * @File: 7.3.5.2 generator throw.js                                           *
 * @Date: 2022-09-06 20:28:47                                                  *
 * @LastModifiedDate: 2022-09-06 21:08:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 抛出错误
const range = function* (start, end) {
  while (start < end) {
    yield start;
    start++;
  }
};
const gt = range(1, 6);
gt.next();
console.log(gt);
try {
  gt.throw("抛出错误");
} catch (error) {
  console.log(error);
}
console.log(gt);
console.log(gt.next());

const range2 = function* (start, end) {
  while (start++ < end) {
    try {
      yield start;
    } catch (error) {
      console.log(error);
    }
  }
};
const gt2 = range2(2, 7);
console.log(gt2);
gt2.next();
gt2.throw("抛出错误");
console.log(gt2);
console.log(gt2.next());

const gt3 = range2(2, 7);
gt3.throw("直接报错");
