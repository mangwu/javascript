/*
 * @Author: mangwu                                                             *
 * @File: 6.3.4.1 createElementArray.js                                        *
 * @Date: 2022-08-25 11:17:30                                                  *
 * @LastModifiedDate: 2022-08-26 09:52:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 创建定型数组
// 1. 使用已有的缓冲
const buf = new ArrayBuffer(12);
const int32Arr = new Int32Array(buf); // 构造一个长度为3，元素占用4个字节的定型数组
console.log(int32Arr.length);
console.log(int32Arr.byteLength);
// 2. 使用自有缓冲
const int16Arr = new Int16Array(5); // 构造一个长度为5，元素占用2个字节的定型数组
console.log(int16Arr.buffer.byteLength); // 缓存的长度，10

// 3. 填充可迭代结构
const uint16Arr = new Uint16Array([1, 2, 3, 128]); // 长度为4，元素占用2个字节，元素值都是无符号整数的定型数组
console.log(uint16Arr);

// 4. 基于其它定型数组 会创建新缓存区，长度和其它定型数组一样，字节长度由定型数组类型决定
const int8Arr = new Int8Array(uint16Arr); // 长度为4，元素占用1个字节，新建4个字节的缓冲
console.log(int8Arr); // 对应的每个值都会被转换成新格式， 128 -> -128

// 5. 使用ElementType.from() 从一个类数组结构中构造定型数组
const uint8arr = Uint8Array.from({ 0: 1, 2: 3, 3: 5, length: 3 }, (v) => v - 2);
console.log(uint8arr); // 类数组元素中没有索引1的元素，所以但是长度为3，所以默认为0

// 6. 使用ElementType.of()
const int32Arr2 = Int32Array.of(null, "a", "1", undefined, uint8arr);
console.log(int32Arr2); // 不能转换为数字的默认为0，能转换为数字或就是数字的将数组用32位保存
