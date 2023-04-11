/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.1.4.9  触摸屏设备（Touch Device Support）.js                         *
 * @Date: 2023-04-11 17:43:14                                                  *
 * @LastModifiedDate: 2023-04-11 17:48:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("mousewheel", (e) => {
  console.log("mousewheel");
});
wrapper.addEventListener("scroll", (e) => {
  console.log("scroll");
});
wrapper.addEventListener("wheel", (e) => {
  console.log("wheel");
});
