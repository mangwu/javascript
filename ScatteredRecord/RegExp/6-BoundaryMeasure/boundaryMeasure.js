/**
 * @description 边界量词
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-24 15:56:45
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const str = "  javascript is a great language!   ";
console.log("原始字符长度:", str.length);
// 匹配左侧空白字符
const reg = /^\s*/;
console.log(str.replace(reg, ""));

// 匹配右侧空白字符
const reg2 = /\s*$/;
console.log(str.replace(reg2, ""), str.replace(reg2, "").length);

// 匹配左侧和右侧空白字符
const reg3 = /(^\s*)|(\s*$)/g;
console.log(str.replace(reg3, ""), str.replace(reg3, "").length);

// 匹配中间空白字符
const reg4 = /\s*/g;
// 匹配左侧和右侧空白字符
const arr = str.match(reg3);
// 删除全部字符后添加左右侧空白字符
console.log(
  arr[0] + str.replace(reg4, "") + arr[1],
  (arr[0] + str.replace(reg4, "") + arr[1]).length
);
