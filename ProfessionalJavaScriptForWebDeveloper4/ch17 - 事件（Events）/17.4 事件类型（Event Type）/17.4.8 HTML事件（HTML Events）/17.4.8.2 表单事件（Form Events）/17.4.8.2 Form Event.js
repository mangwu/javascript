/*
 * @Author: mangwu                                                             *
 * @File: 17.4.8.2 Form Event.js                                               *
 * @Date: 2023-10-09 10:16:44                                                  *
 * @LastModifiedDate: 2023-10-09 10:17:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  alert("表单提交事件触发");
  console.log(e);
});

form.addEventListener("formdata", (e) => {
  alert("表单数据事件触发");
  console.log(e);
});