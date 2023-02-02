/*
 * @Author: mangwu                                                             *
 * @File: 11-@@search.js                                                       *
 * @Date: 2022-03-09 18:44:46                                                  *
 * @LastModifiedDate: 2022-03-10 23:45:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 所有正则表达式的原型上都有Symbol.search符号属性
console.log(RegExp.prototype[Symbol.search]);
console.log("foobarbar".search("bar"));

class BarSearcher {
  constructor(str) {
    this.str = str;
  }
  static [Symbol.search](target) {
    return target.indexOf("bar");
  }
  [Symbol.search](target) {
    // 返回自定义的匹配索引
    return target.indexOf(this.str);
  }
}

const foosearch = new BarSearcher("foo");
console.log("afoobar".search(BarSearcher));
console.log("afoobar".search(foosearch));

