/*
 * @Author: mangwu                                                             *
 * @File: 23-assignment-op.js                                                  *
 * @Date: 2022-06-07 11:16:03                                                  *
 * @LastModifiedDate: 2022-06-07 13:43:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 赋值操作符
// 简单赋值
let a = 5;
// 复合赋值
a += 5;

console.log(a);
5;

// 压缩代码 省略return
let arr = [
  { id: 0, value: "嘿" },
  { id: 1, value: "嘿嘿" },
];
console.log(
  arr.reduce((pre, cur) => {
    pre[cur.id] = cur.value;
    return pre;
  }, [])
);
console.log(arr.reduce((pre, cur) => ((pre[cur.id] = cur.value), pre), []));
