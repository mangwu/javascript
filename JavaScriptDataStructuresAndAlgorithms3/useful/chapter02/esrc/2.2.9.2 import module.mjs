/*
 * @Author: mangwu                                                             *
 * @File: 2.2.9.2 import module.js                                             *
 * @Date: 2022-10-31 16:36:17                                                  *
 * @LastModifiedDate: 2022-10-31 23:06:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 引入模块
import { circleArea, squareArea as square } from "./2.2.9.1 create module.mjs";

console.log(circleArea(5));
console.log(square(3));

import * as area from "./2.2.9.1 create module.mjs";
console.log(area.circleArea(8));
console.log(area.squareArea(8));
console.log(area);

// 引入默认模块
// 自定义默认模块的名称
import B from "./2.2.9.1 create module.mjs";
const myBook = new B("some title");
myBook.printTitle();
