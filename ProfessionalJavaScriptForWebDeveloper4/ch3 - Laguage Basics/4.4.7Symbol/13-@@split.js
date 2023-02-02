/*
 * @Author: mangwu                                                             *
 * @File: 13-@@split.js                                                        *
 * @Date: 2022-03-30 00:02:09                                                  *
 * @LastModifiedDate: 2022-03-30 00:12:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 所有正则表达式都有Symbol.split符号属性函数
console.log(RegExp.prototype[Symbol.split]);
console.log("foobarbaz".split(/bar/));

// 自定义符号属性类
class FooSplitter {
  static [Symbol.split](target) {
    return target.split("foo");
  }
}
console.log("barfoobaz".split(FooSplitter));

class StringSplitter {
  constructor(str) {
    this.str = str;
  }
  [Symbol.split](target) {
    return target.split(this.str);
  }
}
console.log("abcd".split(new StringSplitter("")));
