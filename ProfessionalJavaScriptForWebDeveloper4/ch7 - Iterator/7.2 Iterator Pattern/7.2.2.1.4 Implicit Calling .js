/*
 * @Author: mangwu                                                             *
 * @File: 7.2.2.1.4 hidden .js                                                 *
 * @Date: 2022-09-03 01:50:48                                                  *
 * @LastModifiedDate: 2022-09-03 01:58:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 隐式调用
// 可迭代对象会被接受它的原生语言特性隐式调用迭代器符号属性引用的工厂函数

const arr = [1, 2, 3];
// 1. for of
for (const item of arr) {
  console.log(item);
}

// 2. 数组结构
const [a, b, c] = arr;
console.log(a, b, c);

// 3. 扩展操作符
console.log([0, ...arr]);

// 4. 基于其他数组创建新数组
console.log(Array.from(arr));

// 5. 构造集合
console.log(new Map(arr.map((v, i) => [i, v])));
