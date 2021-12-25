/**
 * @description 子匹配模式
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-25 17:07:47
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 使用小括号可以包裹子匹配模式，使用$n表示匹配的子字符

// 将下划线声明的变量转化为驼峰
const str = "this_is_a_underline_var";
function underlineToTuofeng(str) {
  return str.replace(/(_)(\w)/g, (_m, _$1, $2) => $2.toLocaleUpperCase());
}

console.log(underlineToTuofeng(str));
