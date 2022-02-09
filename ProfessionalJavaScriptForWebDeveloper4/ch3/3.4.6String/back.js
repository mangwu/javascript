/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-09 19:45:40                                                  *
 * @LastModifiedDate: 2022-02-09 19:51:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 关于退格的转义字符使用，表示将光标移动到退一格
console.log('abc\b\bdef'); // node环境下打印adef // 浏览器环境下，\b被识别为未知字符