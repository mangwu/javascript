/**
 * @description 禁用反向引用
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-25 18:22:12
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const reg = /(?:\w+)/g;

const str = "JavaScript is a great language";

console.log([...str.matchAll(reg)]);
