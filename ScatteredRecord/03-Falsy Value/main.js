/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-29 15:13:33                                                  *
 * @LastModifiedDate: 2022-08-29 15:23:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 打印all
console.log(document.all);
// 侦查
if (document.all) {
  // 侦察浏览器是否支持all
  document.all[0].style.color = "black";
  console.log(document.all[0]);
  console.log(document.all.root);
} else {
  // 使用id获取元素
  console.log(document.getElementById("root"));
}
