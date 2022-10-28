/*
 * @Author: mangwu                                                             *
 * @File: 11.2.6.1.js                                                          *
 * @Date: 2022-10-28 12:45:42                                                  *
 * @LastModifiedDate: 2022-10-28 12:47:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

//

const p = Promise.allSettled([
  Promise.resolve("123"),
  Promise.reject(new Error("123")),
]);
