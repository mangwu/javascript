/*
 * @Author: mangwu                                                             *
 * @File: 17.4.8.5.1 navigate.js                                               *
 * @Date: 2023-10-09 11:21:09                                                  *
 * @LastModifiedDate: 2023-10-09 13:42:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

navigation.addEventListener("navigate", (e) => {
  alert("hello"); // 在导航跳转前触发
  console.log(e);
});

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  location = "/";
});
