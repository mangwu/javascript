/*
 * @Author: mangwu                                                             *
 * @File: 11.2.4.3 Promise Composition.js                                      *
 * @Date: 2022-10-26 13:07:03                                                  *
 * @LastModifiedDate: 2022-10-26 13:10:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Promise.All() 创建一个由参数组成的新期约，
// 这个新期约会再一组期约全部解决后再解决

let p1 = Promise.all([Promise.resolve(), Promise.resolve()]);

// 可迭代元素可以不是期约
// 但是它会作为期约的内部值传递给Promise.resolve()转换为期约
let p2 = Promise.all([1, 2]);

// 空的期约
