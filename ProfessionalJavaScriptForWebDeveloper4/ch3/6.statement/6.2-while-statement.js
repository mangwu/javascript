/*
 * @Author: mangwu                                                             *
 * @File: 6.2-while-statement.js                                               *
 * @Date: 2022-06-07 14:40:43                                                  *
 * @LastModifiedDate: 2022-06-07 15:04:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 先循环后测试的do-while
let idx = 0;
do idx++;
while (idx < 0);

console.log(idx);

// 先测试再循环的while
while (idx > 1) {
  idx--;
  console.log("执行了循环体");
}
console.log(idx);
