/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.2.3 example3.js                                             *
 * @Date: 2023-03-16 17:04:59                                                  *
 * @LastModifiedDate: 2023-03-16 17:08:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

window.addEventListener("pointerdown", checkPointerSize);
function checkPointerSize(e) {
  console.log(e);
  e.target.style.width = e.width + "px";
  e.target.style.height = e.height + "px";
}
