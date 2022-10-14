/*
 * @Author: mangwu                                                             *
 * @File: 10.0.2.4 Function.prototype.length.js                                *
 * @Date: 2022-10-14 11:25:57                                                  *
 * @LastModifiedDate: 2022-10-14 11:27:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

console.log(Function.length);
console.log(Function.prototype.length);

console.log(function (a, b) {}.length);
console.log(((a) => {}).length);

console.log(((a, ...rest) => {}).length);
console.log(((a, b = 1, c, ...rest) => {}).length);
