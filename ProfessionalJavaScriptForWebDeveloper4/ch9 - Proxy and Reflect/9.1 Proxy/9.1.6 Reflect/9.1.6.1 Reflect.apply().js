/*
 * @Author: mangwu                                                             *
 * @File: 9.1.6.1 Reflect.apply().js                                           *
 * @Date: 2022-09-23 21:30:52                                                  *
 * @LastModifiedDate: 2022-09-23 21:32:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 调用目标函数，给定this和参数数组

let str = Reflect.apply(
  String.fromCharCode,
  undefined,
  [104, 101, 108, 108, 111]
);
console.log(str);
