/*
 * @Author: mangwu                                                             *
 * @File: 6.3.3.1 create_data_view.js                                          *
 * @Date: 2022-08-17 15:11:26                                                  *
 * @LastModifiedDate: 2022-08-25 11:16:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 声明一个包含16个字节的字节数组
const buf = new ArrayBuffer(16);

// 创建操作buf的视图
const whole_view = new DataView(buf); // 默认使用整个字节数组
console.log(whole_view.buffer == buf);
console.log(whole_view.byteOffset);
console.log(whole_view.byteLength);

// 设置偏移量为buf的一半，长度默认为从byteoffset到buffer最后的长度
const half_view = new DataView(buf, buf.byteLength / 2);
console.log(half_view.buffer === buf);
console.log(half_view.byteOffset);
console.log(half_view.byteLength);

// 自定义区间
const my_view = new DataView(buf, 7, 3);
console.log(my_view.buffer === buf);
console.log(my_view.byteOffset);
console.log(my_view.byteLength);

// range Error
try {
  const my_view2 = new DataView(buf, 17);
} catch (error) {
  console.log(error.message);
}
try {
  const my_view3 = new DataView(buf, 8, 9);
} catch (error) {
  console.log(error.message);
}

