/*
 * @Author: mangwu                                                             *
 * @File: 9.2.2 set().js                                                       *
 * @Date: 2022-09-27 21:00:50                                                  *
 * @LastModifiedDate: 2022-09-27 21:02:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 捕获器 set
// 拦截对象赋值属性值的操作

const target = {};
const proxy = new Proxy(target, {
  set() {
    console.log(arguments);
    return Reflect.set(...arguments);
  },
});

proxy.foo = "bar";
