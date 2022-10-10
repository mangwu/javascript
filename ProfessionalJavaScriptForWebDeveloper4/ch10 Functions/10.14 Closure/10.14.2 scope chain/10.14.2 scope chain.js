/*
 * @Author: mangwu                                                             *
 * @File: 10.14.2 scope chain.js                                               *
 * @Date: 2022-10-10 17:31:20                                                  *
 * @LastModifiedDate: 2022-10-10 17:32:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 作用域链
function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
let result = compare(5, 10);
