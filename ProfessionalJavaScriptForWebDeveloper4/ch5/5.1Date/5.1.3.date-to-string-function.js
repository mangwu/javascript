/**
 * @description  5.1.1.3.date-to-string-function.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-06-28 14:32:52
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 一些返回常用格式的日期方法
// 具体格式和JavaScript所在的运行环境的执行有关系

const date = new Date("2022-01-01 00:00:00.000 GMT+0800");
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toUTCString());
console.log(date.toISOString());
