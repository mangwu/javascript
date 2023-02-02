/*
 * @Author: mangwu                                                             *
 * @File: 10.9.2.1 standard function this.js                                   *
 * @Date: 2022-10-08 06:59:40                                                  *
 * @LastModifiedDate: 2022-10-08 07:03:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 标准函数的this
color = "red";
function sayColor() {
  console.log(this.color);
}
function sayColor2() {
  "use strict";
  console.log(this);
}

sayColor(); // red
sayColor2(); // 因为严格模式下默认this是undefined，所以不会打印color
const o = {
  sayColor,
  color: "blue",
};
o.sayColor(); // blue
