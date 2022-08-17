/*
 * @Author: mangwu                                                             *
 * @File: 6.3.3.3 data_view_function.js                                        *
 * @Date: 2022-08-17 16:29:28                                                  *
 * @LastModifiedDate: 2022-08-17 17:02:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 通过视图对象暴露的方法操作字节数组中的数据
// 1. 视图读写字节数组中的值，类型是可以互换使用的
const buf = new ArrayBuffer(8); // 8个字节
const view = new DataView(buf, 4); // 使用后面一半的字节
for (let i = 0; i < buf.byteLength / 2; i++) {
  // 查看每个字节的值(初始都是0)
  console.log(view.getInt8(i));
}
view.setUint8(3, 5); // 最后一个字节设置为 5
view.setUint16(1, 128); // 中间两个字节设置为 128
// 4个字节现在的情况： 0x00 0x00 0x80 0x05
console.log(view.getInt32(0)); // 查看4个字节表示的Int大小 2^15 + 5
for (let i = 0; i < buf.byteLength / 2; i++) {
  // 查看每个字节的值
  console.log(view.getInt8(i));
}

// 2. 字节序 DataView默认以大端序存取字节
const buf2 = new ArrayBuffer(4);
const whole_view = new DataView(buf2); // 可操作buf2的全部4个字节
whole_view.setUint16(0, 0x8000); // 按照默认大端序存储前两个字节
whole_view.setUint16(2, 0x0001); // 按照默认大端序存储后两个字节
// 现在字节为 0x80 0x00 0x00 0x01
// 按照大端序读取4个字节组成的无符号32位整数
console.log(whole_view.getUint32(0)); // 2^31 + 1
// 按照小端序读取4个字节组成的无符号32位整数
console.log(whole_view.getUint32(0, true)); // 2^24 + 2^7

whole_view.setUint16(0, 0x8000, true); // 按照小端序存储前两个字节
whole_view.setUint16(2, 0x0001, true); // 按照小端序存储前两个字节
// 现在字节为0x00 0x80 0x01 0x00
// 按照大端序读取4个字节组成的无符号32位整数
console.log(whole_view.getUint32(0)); // 2^23 + 2^8
// 按照小端序读取4个字节组成的无符号32位整数
console.log(whole_view.getUint32(0, true)); // 2^16 + 2^15

// 3. 边界情况，满足byteOffset和buteOffset+ElementType.byteLength 在视图可操作字节数组长度范围内
const buf3 = new ArrayBuffer(4);
const view3 = new DataView(buf3);
try {
  view3.getBigInt64(0);
} catch (error) {
  console.log(error.message);
}
try {
  view3.getInt32(5);
} catch (error) {
  console.log(error.message);
}
try {
  view3.setInt32(1, 5);
} catch (error) {
  console.log(error.message);
}
try {
  view3.setInt32(5, 5);
} catch (error) {
  console.log(error.message);
}
