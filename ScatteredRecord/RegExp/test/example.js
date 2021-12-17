/**
 * @description RegExp.prototype.test()方法
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-17 17:18:56
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const reg = new RegExp("foo*", 'g');

const a = "table football fofo a";

console.log(reg.test(a), reg.lastIndex);
console.log(reg.test(a), reg.lastIndex);
console.log(reg.test(a), reg.lastIndex);
console.log(reg.test(a), reg.lastIndex);
