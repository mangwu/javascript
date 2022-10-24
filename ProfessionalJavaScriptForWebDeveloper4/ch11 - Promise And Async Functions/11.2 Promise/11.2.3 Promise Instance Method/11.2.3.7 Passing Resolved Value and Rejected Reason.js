/*
 * @Author: mangwu                                                             *
 * @File: 11.2.3.7.js                                                          *
 * @Date: 2022-10-24 22:27:22                                                  *
 * @LastModifiedDate: 2022-10-24 22:29:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 传递解决值和拒绝理由

let p1 = new Promise((resolve, reject) => resolve("foo"));
let p2 = new Promise((resolve, reject) => reject("reason"));

p1.then((value) => console.log(value));
p2.catch((reason) => console.log(reason));
