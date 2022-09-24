/*
 * @Author: mangwu                                                             *
 * @File: 9.1.6.3 Reflect.defineProperty.js                                    *
 * @Date: 2022-09-24 00:08:01                                                  *
 * @LastModifiedDate: 2022-09-24 00:09:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 定义属性

const obj = {};

if (
  Reflect.defineProperty(obj, "prop", {
    value: "prop",
    writable: false,
    configurable: false,
    enumerable: true,
  })
) {
  console.log("定义成功");
  console.log(obj);
} else {
  console.log("定义失败");
}
