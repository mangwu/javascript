/**
 * @description 惰性匹配
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-24 14:59:56
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 惰性匹配
const reg = /<.{5,}?>/g;
const html = "<html><head><title></title></head><body><a></a></body></html>";

console.log(html.match(reg));

const reg2 = /<.??>/;
console.log(html.match(reg2));
