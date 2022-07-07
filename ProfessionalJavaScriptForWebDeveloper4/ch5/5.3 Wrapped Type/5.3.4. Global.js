/*
 * @Author: mangwu                                                             *
 * @File: 5.3.4. Global.js                                                     *
 * @Date: 2022-07-07 23:00:24                                                  *
 * @LastModifiedDate: 2022-07-07 23:17:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Global对象没有实现
try {
  console.log(Global);
} catch (error) {
  console.log("Global未定义");
}

console.log(this);
console.log(global.isFinite(12));

// encodeURI()和encodeURIComponent()

console.log(
  encodeURI(
    "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#描述"
  )
);
