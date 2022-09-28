/*
 * @Author: mangwu                                                             *
 * @File: 9.2.12 apply().js                                                    *
 * @Date: 2022-09-28 15:06:07                                                  *
 * @LastModifiedDate: 2022-09-28 15:08:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 调用函数对象的捕获器

const target = function () {};

const proxy = new Proxy(target, {
  apply() {
    console.log("--");
    return "自定义";
  },
});
console.log(proxy());
console.log(new proxy());

