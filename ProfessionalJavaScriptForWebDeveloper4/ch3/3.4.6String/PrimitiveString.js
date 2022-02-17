/**
 * @description  PrimitiveString.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-02-17 23:17:21
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 原始字符串
console.log(String.raw`\u00a9`);
console.log(`\u00a9`);

// 换行
console.log("first line\nsecond line");
console.log(String.raw`first line\nsecond line`);
console.log(String.raw`first line
second line`);

// raw属性
const tagFunc = (strings) => {
  console.log("----实际字符串----");
  for(const str of strings) {
    console.log(str);
  }
  console.log("----原始字符串----");
  for(const str of strings.raw) {
    console.log(str);
  }
}
let chazhi = 1;
tagFunc`\u00A9${chazhi}\n`
