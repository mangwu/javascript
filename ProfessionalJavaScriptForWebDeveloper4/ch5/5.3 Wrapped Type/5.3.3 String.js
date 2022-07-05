/*
 * @Author: mangwu                                                             *
 * @File: 5.3.3 String.js                                                      *
 * @Date: 2022-07-05 11:21:31                                                  *
 * @LastModifiedDate: 2022-07-05 17:01:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// String是字符串对应的包装的引用类型
const strObj = new String("Hello, 世界");

// 继承的valueOf, toString toLocaleString 都返回原始字符串

console.log(strObj.toString());

// length属性表示字符串中的字符数量，双字节字符按照单个字符数量计算
console.log(strObj.length);

// charAt()
let message = "abc按不出";
console.log(message.charAt(4));

// 字符编码

message = "𝌆a";

console.log(message.length, message.charAt(0), message.charAt(1));

// charCodeAt()
console.log(
  "".charCodeAt(),
  message.charCodeAt(),
  message.charCodeAt(0),
  message.charCodeAt(1),
  message.charCodeAt(2),
  message.charCodeAt(3)
);
// String.fromCharCode()

console.log(String.fromCharCode(67, 85, 0x61, 0x65, 12582, 0xd834, 0xdf06));
