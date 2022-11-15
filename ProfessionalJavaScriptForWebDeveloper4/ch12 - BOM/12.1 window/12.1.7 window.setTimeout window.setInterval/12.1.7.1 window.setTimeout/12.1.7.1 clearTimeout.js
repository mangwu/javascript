/*
 * @Author: mangwu                                                             *
 * @File: 12.1.7.1 clearTimeout.js                                             *
 * @Date: 2022-11-15 23:29:59                                                  *
 * @LastModifiedDate: 2022-11-15 23:31:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let timeoutId = setTimeout(() => alert("Hello, world!"), 1000);
clearTimeout(timeoutId);
