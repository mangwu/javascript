/*
 * @Author: mangwu                                                             *
 * @File: 17.4.8.3 Toggle Event.js                                             *
 * @Date: 2023-10-09 10:51:00                                                  *
 * @LastModifiedDate: 2023-10-09 10:52:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const mypopover = document.querySelector("#mypopover");

mypopover.addEventListener("beforetoggle", (e) => {
  console.log("beforetoggle event fire");
  console.log("oldState:",e.oldState);
  console.log("newState:",e.newState);
})
mypopover.addEventListener("toggle", (e) => {
  console.log("toggle event fire");
  console.log("oldState:",e.oldState);
  console.log("newState:",e.newState);
})