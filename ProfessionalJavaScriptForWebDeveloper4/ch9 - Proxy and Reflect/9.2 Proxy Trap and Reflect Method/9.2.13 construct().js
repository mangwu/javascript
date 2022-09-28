/*
 * @Author: mangwu                                                             *
 * @File: 9.2.13 construct().js                                                *
 * @Date: 2022-09-28 15:13:21                                                  *
 * @LastModifiedDate: 2022-09-28 15:23:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// new 操作符调用函数的捕获器

const Target = function () {
  this.x = "1";
};

const proxy = new Proxy(Target, {
  construct() {
    console.log(arguments, arguments[2] === Target, arguments[2] === proxy);

    return Reflect.construct(...arguments);
  },
});
console.log(new proxy());
function Person() {
  this.y = 2;
}
console.log(Reflect.construct(proxy, [], Person));
