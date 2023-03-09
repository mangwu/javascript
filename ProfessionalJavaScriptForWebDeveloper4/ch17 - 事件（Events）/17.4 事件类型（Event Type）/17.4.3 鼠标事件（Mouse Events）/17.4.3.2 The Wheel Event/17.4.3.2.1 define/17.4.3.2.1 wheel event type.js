/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.2.1 wheel event type.js                                       *
 * @Date: 2023-03-09 00:30:12                                                  *
 * @LastModifiedDate: 2023-03-09 09:14:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const div = document.querySelector("div");

div.addEventListener("wheel", (e) => {
  console.log(e);
  div.innerHTML = `<div class="text">wheelEvent.ctrlKey: <span>${e.ctrlKey}</span>, 
  wheelEvent.shiftKey: <span>${e.shiftKey}</span></div>`;
});
