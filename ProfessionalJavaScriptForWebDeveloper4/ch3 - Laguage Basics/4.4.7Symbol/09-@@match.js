/*
 * @Author: mangwu                                                             *
 * @File: 09-@@match.js                                                        *
 * @Date: 2022-03-03 21:47:49                                                  *
 * @LastModifiedDate: 2022-03-03 22:36:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 所有正则表达式实例上都有match符号
console.log(RegExp.prototype[Symbol.match]);
console.log("foobar".match(/bar/));

// 修改@@match属性函数
class FooMatch {
  [Symbol.match](target) {
    // target是通过match()调用参数中的符号属性的字符串
    return target.includes("foo");
  }
  static [Symbol.match](target) {
    return target.includes("foo");
  }
}
const fm = new FooMatch();
console.log("fooBar".match(FooMatch));
console.log("barbaz".match(fm));

// 自定义匹配字符和匹配方法
class StringMatcher {
  constructor(str) {
    this.str = str;
  }
  [Symbol.match](target) {
    // target是通过match()调用参数中的符号属性的字符串
    return target.includes(this.str);
  }
}

const sm = new StringMatcher("Bar");
console.log("fooBar".match(sm));
