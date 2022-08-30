/*
 * @Author: mangwu                                                             *
 * @File: 6.3.4.5 overflow.js                                                  *
 * @Date: 2022-08-30 14:21:07                                                  *
 * @LastModifiedDate: 2022-08-30 14:57:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 元素溢出
const int8Arr = new Int8Array(2); // [-128, 127]
int8Arr[1] = 128; // 0x80 上溢
console.log(int8Arr);
int8Arr[0] = -129; // 0x17f
console.log(int8Arr);

const uint8Arr = new Uint8Array(2); // [0, 255];
uint8Arr[1] = 256; // 0x100上溢
console.log(uint8Arr);
uint8Arr[0] = -1; // 0x1ff 下溢
console.log(uint8Arr);

const float32Arr = new Float32Array(1);
float32Arr[0] = -1123456789101112;
console.log(float32Arr);

const uintClampedArr = new Uint8ClampedArray(3);
uintClampedArr[0] = -1234; // 下溢
uintClampedArr[1] = 5678; // 上溢
uintClampedArr[2] = 12.5001; // 非整数
uint8Arr[0] = 12.5056;
console.log(uintClampedArr);
console.log(uint8Arr);
