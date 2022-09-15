/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.7.1 Object.values.js                                           *
 * @Date: 2022-09-15 23:08:35                                                  *
 * @LastModifiedDate: 2022-09-15 23:10:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 获取对象的自有可枚举属性的属性值

const obj = {
  bar: {
    0: "0",
  },
  10: 10,
  foo: 3,
  2: 2,
};
const values = Object.values(obj);
console.log(values);
console.log(values[2] === obj.bar);
