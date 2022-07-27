/*
 * @Author: mangwu                                                             *
 * @File: array_buffer.js                                                      *
 * @Date: 2022-07-26 17:30:49                                                  *
 * @LastModifiedDate: 2022-07-27 12:43:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 类型数组 ArrayBuffer 创建通用的、固定长度的原始二进制数据缓冲区
const ab = new ArrayBuffer(5);
console.log(ab);
console.log(ab.byteLength);
console.log(ArrayBuffer.length);
console.log(ArrayBuffer.isView(ab));