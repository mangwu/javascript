/*
 * @Author: mangwu                                                             *
 * @File: 10-@@replace.js                                                      *
 * @Date: 2022-03-08 15:28:31                                                  *
 * @LastModifiedDate: 2022-03-08 18:50:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 正则表达式原型上都有@@replace符号属性定义的函数
console.log(RegExp.prototype[Symbol.replace]);
console.log("foovarbaz".replace("var", "bar"));

// 定义符号属性函数类
class ReplaceFoo {
  constructor(str) {
    this.str = str;
  }
  /**
   * @description 自定义Symbol.replace符号属性函数
   * @static 静态方法
   * @param {String} target 调用字符串
   * @param {String} replacement 替换字段
   * @returns {String}
   */
  static [Symbol.replace](target, replacement) {
    // 将所有foo字段替换为replacement字段
    return target.split("foo").join(replacement);
  }
  /**
   * @description 对象方法，自定义实例对象的Symbol.replace符号属性函数
   * @param {String} target 调用字符串
   * @param {String} replacement 替换字段
   * @returns {String}
   */
  [Symbol.replace](target, replacement) {
    // 将多有自定义字段替换为replacement字段
    return target.split(this.str).join(replacement);
  }
}
const replaceBar = new ReplaceFoo("Bar");
console.log("afoobfooc".replace(ReplaceFoo, "$"));
console.log("aBargoodBarmanBar".replace(replaceBar, "#"));
