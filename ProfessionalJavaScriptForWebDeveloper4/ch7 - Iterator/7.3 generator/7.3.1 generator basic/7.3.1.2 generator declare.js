/*
 * @Author: mangwu                                                             *
 * @File: 7.3.1..js                                                            *
 * @Date: 2022-09-05 15:39:05                                                  *
 * @LastModifiedDate: 2022-09-05 15:44:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 生成器声明
// 1. 函数声明
function* generatorFn() {}
console.log(generatorFn);
// 2. 函数表达式声明
var generatorFn = function* () {};
console.log(generatorFn);
// 3. 作为对象字面量属性
let obj = {
  *generatorFn() {},
  gf: function* () {},
};
console.log(obj);
// 4. 作为类实例方法
class Foo {
  *generatorFn() {}
}
console.log(new Foo().generatorFn);
// 5. 作为类的静态方法
class Foo2 {
  static *generatorFn() {}
}
console.log(Foo2.generatorFn);
