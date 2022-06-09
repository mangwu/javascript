/*
 * @Author: mangwu                                                             *
 * @File: function.js                                                          *
 * @Date: 2022-06-09 17:13:27                                                  *
 * @LastModifiedDate: 2022-06-09 17:25:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 函数

// 使用function定义的代码块，可以复用，具有封装特性
function functionName(name) {
  console.log("所以参数", arguments);
  return name + ",hello";
}

console.log(functionName("mangwu", 1, 2));
