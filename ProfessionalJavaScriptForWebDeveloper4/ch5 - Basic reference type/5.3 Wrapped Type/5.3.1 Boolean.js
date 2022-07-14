/*
 * @Author: mangwu                                                             *
 * @File: 5.3.1 Boolean.js                                                     *
 * @Date: 2022-07-04 22:13:08                                                  *
 * @LastModifiedDate: 2022-07-04 22:34:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 包装的原始数据引用类型Boolean

// 重写继承的valueOf和toString方法
const b = new Boolean(25);
console.log(b.valueOf(), b.toString()); // true 'true'

// 原始值和引用值的区别，使用typeof 和 instancof 返回不同

let bValue = true;
let bObj = new Boolean(bValue);
console.log(typeof bValue, typeof bObj);
console.log(bValue instanceof Boolean, bObj instanceof Boolean);

// 永远不要使用包装类型
let falseObject = new Boolean(false);
let res = falseObject && true;
console.log(res); // true 
