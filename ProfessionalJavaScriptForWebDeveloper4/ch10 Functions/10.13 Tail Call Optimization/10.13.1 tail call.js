/*
 * @Author: mangwu                                                             *
 * @File: 10.13.1 tail call.js                                                 *
 * @Date: 2022-10-10 10:13:38                                                  *
 * @LastModifiedDate: 2022-10-10 10:14:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function innerFunction() {
  return "尾调用";
}

// 尾调用
function outerFunction() {
  return innerFunction(); // 尾调用
}
