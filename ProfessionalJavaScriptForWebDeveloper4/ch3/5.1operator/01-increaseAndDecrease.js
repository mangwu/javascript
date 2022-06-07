/*
 * @Author: mangwu                                                             *
 * @File: 01-.js                                                               *
 * @Date: 2022-05-24 13:46:29                                                  *
 * @LastModifiedDate: 2022-05-24 15:52:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一元操作符
// 递增/递减操作符

// 前缀版本
let age = 19;
++age;
console.log(age); // 20
--age;
console.log(age); // 19

// 前缀版本在求值之前改变变量的值
console.log(--age + 2); // 20

// 后缀版本在求值之后改变变量的值
console.log(age-- + 2); // 20

// 作用变量类型

let b = true;
let c = null;
let d = {
  toString() {
    return "12.3";
  },
  // valueOf() {
  //   return "d";
  // },
};
let e = 1.1;
let f = "num";
console.log(++b);
console.log(++c);
console.log(++d);
console.log(--e);
console.log(++f);
