/**
 * @description String.prototype.matchAll()
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-24 11:09:57
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const str = "testtest1test2";
const reg = /t(e)(st(\d?))/g;

// 数组结构迭代器
const arr = [...str.matchAll(reg)];
console.log(arr);

console.log("---exec循环迭代获取每个匹配项相关信息----");
let execOneTime;
while ((execOneTime = reg.exec(str)) !== null) {
  console.log(execOneTime);
}

// matchAll不会改变lastIndex，但是lastIndex会影响matchAll的匹配结果
const regexp = RegExp('[a-c]','g');
regexp.lastIndex = 1;
const str2 = 'abc';
console.log(Array.from(str2.matchAll(regexp), m => `${regexp.lastIndex} ${m[0]}`));
// Array [ "1 b", "1 c" ]

