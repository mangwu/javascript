/*
 * @Author: mangwu                                                             *
 * @File: 6.6-tag-statement.js                                                 *
 * @Date: 2022-06-09 16:23:33                                                  *
 * @LastModifiedDate: 2022-06-09 16:40:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 标签语句
// 配合循环控制语句一起使用，使得break continue可以跳出到外部的循环体
let num = 0;
// break
outer: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      // 跳出外层循环体，执行下面的console.log(num)
      break outer;
    }
    num++;
  }
}
console.log(num);

let num2 = 0;
// break
outer: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      // 跳出外层循环体，执行下面的console.log(num)
      continue outer;
    }
    num2++;
  }
}
console.log(num2);