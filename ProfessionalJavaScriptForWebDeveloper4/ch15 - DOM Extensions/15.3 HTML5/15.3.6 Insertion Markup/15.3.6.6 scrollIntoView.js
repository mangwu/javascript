/*
 * @Author: mangwu                                                             *
 * @File: 15.3.6.6 scrollIntoView.js                                           *
 * @Date: 2023-01-09 15:52:45                                                  *
 * @LastModifiedDate: 2023-01-09 22:20:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let el = document.querySelector(".special");

document.body.addEventListener("click", function () {
  el.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
});
