/*
 * @Author: mangwu                                                             *
 * @File: 5.3.3 String.js                                                      *
 * @Date: 2022-07-05 11:21:31                                                  *
 * @LastModifiedDate: 2022-07-06 17:32:43                                      *
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

// String.codePointAt();

message = "a😊b";
console.log(
  message,
  message.codePointAt(),
  message.codePointAt(0),
  message.codePointAt(1),
  message.codePointAt(2),
  message.codePointAt(3)
);

for (const ch of message) {
  console.log(ch);
}
console.log(...message);

// fromCodePoint()
console.log(String.fromCodePoint(97, 128522, 98));

// normalize()

console.log(String.fromCharCode(0x00c5));
console.log(String.fromCharCode(0x212b));
console.log(String.fromCharCode(0x0041, 0x030a));

let a = "Å";
let b = "Å";
let c = "Å";
console.log(a == b, b == c, a == c);
console.log(a.charCodeAt(), b.charCodeAt(), c.codePointAt());

// normalize

console.log(
  a.normalize("NFD").charCodeAt(),
  a.normalize("NFC").charCodeAt(),
  a.normalize("NFKD").charCodeAt(),
  a.normalize("NFKC").charCodeAt()
);

console.log(
  b.normalize("NFD").charCodeAt(),
  b.normalize("NFC").charCodeAt(),
  b.normalize("NFKD").charCodeAt(),
  b.normalize("NFKC").charCodeAt()
);

console.log(
  c.normalize("NFD").charCodeAt(),
  c.normalize("NFC").charCodeAt(),
  c.normalize("NFKD").charCodeAt(),
  c.normalize("NFKC").charCodeAt()
);

console.log(b == b.normalize("NFC"), b == b.normalize("NFD"));

console.log(
  a.normalize("NFD") == b.normalize("NFD"),
  a.normalize("NFKD") == c.normalize("NFKD"),
  b.normalize("NFC") == c.normalize("NFC")
);

// 操作字符串的方法
// concat
let strValue = "hello ";
let res = strValue.concat("world");
console.log(res);

// slice substring substr

let str = "ABCDEFGHIJKLM";
console.log(str.slice(2, 5), str.substring(2, 5), str.slice(8), str.slice());
console.log(str.substr(2, 5));
console.log(str.slice(-8, -2), str.substring(-5, 11), str.substr(-2, 1));
// indexOf
let str2 =
  "Hello, cat, how constructor pop you Oh, you are fine cat, be careful cat";
console.log(str2.indexOf("cat"));
let pos = str2.indexOf("cat");
let allIdx = [];
while (pos > -1) {
  allIdx.push(pos);
  pos = str2.indexOf("cat", pos + 1);
}
console.log(allIdx);

// lastIndexOf
console.log(str2.lastIndexOf("cat"));
console.log(str2.lastIndexOf("cat", 20));

// includes
let str3 = "foobarbaz";
console.log(str3.includes("bar"));
console.log(str3.includes("bar", 4));
// startWith
console.log(str3.startsWith("foo"), str3.startsWith("bar"));
console.log(str3.startsWith("foo", 3), str3.startsWith("bar", 3));
// endWith
console.log(str3.endsWith("baz"), str3.endsWith("bar"));
console.log(str3.endsWith("baz", 6), str3.endsWith("bar", 6));

// trim()
let str4 = " \r\n\tabcde  f\r\n\tg hijklmn  \r\n\t";
console.log(str4, str4.length);
console.log(str4.trim());
