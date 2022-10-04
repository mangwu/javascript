/*
 * @Author: mangwu                                                             *
 * @File: 3.2 function context.js                                              *
 * @Date: 2022-10-02 20:08:39                                                  *
 * @LastModifiedDate: 2022-10-02 20:18:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 函数上下文中的this

function f1() {
  return this;
}
console.log(f1() === globalThis);
console.log(f1() === global);
console.log(f1() === this);

function f2() {
  "use strict";
  return this;
}
console.log(f2());
