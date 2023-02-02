/**
 * @description  07-isConcatSpreadable.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-03-01 22:48:54
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 默认concat的两种拼接方式
const a = [1, 2];
const d = { 3: 4 };
const e = [4, 5];
// 直接将对象作为元素追加最后
console.log(a.concat(d));
// 数组对象中的元素
console.log(a.concat(e));

// 修改@@isConcatSpreadable
const initial = ["foo"];
const array = ["bar"];
console.log(array[Symbol.isConcatSpreadable]);
// 默认未定义，使用默认方式进行数组拼接
console.log(initial.concat(array)); // ["foo", "bar"];

// 设置为false，不可打平拼接
array[Symbol.isConcatSpreadable] = false;
console.log(initial.concat(array));

// 类数组对象会被打平入数组
const arrayLikeObject = { length: 1, 0: "baz" };
console.log(arrayLikeObject[Symbol.isConcatSpreadable]);
console.log(initial.concat(arrayLikeObject)); // 整个拼接
arrayLikeObject[Symbol.isConcatSpreadable] = true;
console.log(initial.concat(arrayLikeObject));

// 普通对象设置为打平会被忽略
const obj = { a: 1 };
console.log(obj[Symbol.isConcatSpreadable]);
console.log(initial.concat(obj)); // 整个接入
obj[Symbol.isConcatSpreadable] = true;
console.log(initial.concat(obj)); // 被忽略
