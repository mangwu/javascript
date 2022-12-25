/*
 * @Author: mangwu                                                             *
 * @File: 13.1.1 safer capability detection.js                                 *
 * @Date: 2022-12-23 12:55:26                                                  *
 * @LastModifiedDate: 2022-12-23 13:05:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 安全能力检测

// 错误的例子
function isSortable(object) {
  return !!object.sort;
}
// 使用typeof
function isSortable(object) {
  return typeof object.sort === "function";
}

// 不适用IE8及以下
function hasCreateElement() {
  return typeof document.createElement === "function";
}
