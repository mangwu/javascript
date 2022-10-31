/*
 * @Author: mangwu                                                             *
 * @File: 2.2.9.2 import module.js                                             *
 * @Date: 2022-10-31 16:36:17                                                  *
 * @LastModifiedDate: 2022-10-31 21:45:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 引入模块
import { circleArea, squareArea as square } from "./2.2.9.1 create module.js";

console.log(circleArea(5));
console.log(square(3));

import * as area from "./2.2.9.1 create module.js";
console.log(area.circleArea(8));
console.log(area.squareArea(8));
console.log(area);

// 引入默认模块
// 自定义默认模块的名称
import B from "./2.2.9.1 create module.js";
const myBook = new B("some title");
myBook.printTitle();
