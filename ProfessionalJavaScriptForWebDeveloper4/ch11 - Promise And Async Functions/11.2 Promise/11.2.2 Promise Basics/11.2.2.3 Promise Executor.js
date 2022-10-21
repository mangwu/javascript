/*
 * @Author: mangwu                                                             *
 * @File: 11.2.2.3 Promise.js                                                  *
 * @Date: 2022-10-21 12:42:35                                                  *
 * @LastModifiedDate: 2022-10-21 12:45:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 通过执行函数控制期约状态

let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1);

try {
  let p2 = new Promise((resolve, reject) => reject());
  setTimeout(console.log, 0, p2);
} catch (error) {
  console.log(error.toString());
}
