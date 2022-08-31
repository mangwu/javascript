/*
 * @Author: mangwu                                                             *
 * @File: 6.6.1.2 API.js                                                       *
 * @Date: 2022-08-31 23:59:54                                                  *
 * @LastModifiedDate: 2022-09-01 00:01:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const set = new Set().add(0).add(-0).add(NaN).add("1");
console.log(set);
console.log(set.has(NaN));
console.log(set.delete(NaN));
console.log(set.size);
set.clear();
console.log(set);
