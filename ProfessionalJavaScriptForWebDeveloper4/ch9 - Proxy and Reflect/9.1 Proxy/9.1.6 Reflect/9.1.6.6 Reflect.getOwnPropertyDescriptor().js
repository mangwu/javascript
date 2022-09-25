/*
 * @Author: mangwu                                                             *
 * @File: 9.1.6.6 Reflect.getOwnPropertyDescriptor().js                        *
 * @Date: 2022-09-24 21:07:18                                                  *
 * @LastModifiedDate: 2022-09-24 21:08:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 获取自有属性的属性描述符
try {
  console.log(Reflect.getOwnPropertyDescriptor("foo", "0"));
} catch (error) {
  console.log(error.message);
}
console.log(Object.getOwnPropertyDescriptor("foo", "0"));

