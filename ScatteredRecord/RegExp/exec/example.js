/**
 * @description RegExp.prototype.exec()函数
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-17 16:39:23
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @type {RegExp} reg 正则表达式，全局匹配
 */
const reg = new RegExp("foo*", "g");

const str = "table football football fo";

// exec会执行一次搜索匹配，使用lastIndex记录上一次的索引位置
const arr = reg.exec(str); // 
console.log("上一次索引位置：", reg.lastIndex);
const arr2 = reg.exec(str);
console.log("上一次索引位置：", reg.lastIndex);
const arr3 = reg.exec(str);
console.log("上一次索引位置：", reg.lastIndex);

console.log(arr, arr2, arr3);
