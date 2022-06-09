/*
 * @Author: mangwu                                                             *
 * @File: 6.5-cycleControl-statement.js                                        *
 * @Date: 2022-06-09 10:44:50                                                  *
 * @LastModifiedDate: 2022-06-09 11:13:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 循环控制语句
// break; 跳出距离最近的循环体，强制执行循环体后的下一条语句
// continue; 跳出距离最近的循环体，但会再次从循环顶部开始执行
let idx = 5;
while (true) {
  // break可以跳出死循环
  if (idx == 0) {
    break;
  }
  idx--;
}

// 嵌套循环

let num = 0;
while (idx < 10) {
  if (idx % 5 == 0) {
    idx++;
    continue;
  }
  for (let i = 0; i < 10; i++) {
    if ((i + idx) % 5 == 0) {
      break;
    }
    num++;
  }
  idx++;
}
console.log(num);
