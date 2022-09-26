/*
 * @Author: mangwu                                                             *
 * @File: 9.1.7.2 status flags.js                                              *
 * @Date: 2022-09-26 21:45:06                                                  *
 * @LastModifiedDate: 2022-09-26 21:54:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 状态标记

// const o = {};
try {
  Object.defineProperty(o, "foo", {
    value: "bar",
  });
  console.log("success");
} catch (error) {
  console.log("failure");
}

// 重写的代码
const o = {};
if (
  Reflect.defineProperty(o, "foo", {
    value: "bar",
  })
) {
  console.log("success");
} else {
  console.log("failure");
}
