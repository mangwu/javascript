/*
 * @Author: mangwu                                                             *
 * @File: 13.1.2.3 detection limitation.js                                     *
 * @Date: 2022-12-23 21:52:52                                                  *
 * @LastModifiedDate: 2022-12-23 21:54:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 检测局限
// 错误使用方式
let isFirefox = !!(navigator.vendor && navigator.vendorSub);

let isIE = !!(document.all && document.uniqueID);
