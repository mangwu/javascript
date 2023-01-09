/*
 * @Author: mangwu                                                             *
 * @File: 15.3.6.6 scrollIntoView.js                                           *
 * @Date: 2023-01-09 15:52:45                                                  *
 * @LastModifiedDate: 2023-01-09 16:15:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let btn = document.querySelector(".btn");
let el = document.querySelector(".special");

btn.addEventListener("click", function () {
  el.scrollIntoView(true, {
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
});
