/*
 * @Author: mangwu                                                             *
 * @File: 9.1.6.4 Reflect.deleteProperty().js                                  *
 * @Date: 2022-09-24 19:29:59                                                  *
 * @LastModifiedDate: 2022-09-24 19:32:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 删除指定属性

const obj = { x: 1, y: 2 };
console.log(Reflect.deleteProperty(obj, "x")); // 能成功删除
console.log(obj);

console.log(Reflect.deleteProperty(Object.freeze(obj), "y")); // 不能删除成功
