/*
 * @Author: mangwu                                                             *
 * @File: 13.1.2 detection feature support.js                                  *
 * @Date: 2022-12-23 13:26:22                                                  *
 * @LastModifiedDate: 2022-12-23 13:28:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 集中检测能力
// 检测浏览器是否支持Netscape式的插件
let hasNSPlugins = !!(navigator.plugins && navigator.plugins.length);
// 检测浏览器是否具有DOM Level 1能力
let hasDOM1 = !!(
  document.getElementById &&
  document.createElement &&
  document.getElementsByTagName
);
