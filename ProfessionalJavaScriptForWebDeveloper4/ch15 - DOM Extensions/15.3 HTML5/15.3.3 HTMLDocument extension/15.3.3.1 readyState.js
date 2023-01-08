/*
 * @Author: mangwu                                                             *
 * @File: 15.3.3.1 readyState.js                                               *
 * @Date: 2023-01-07 20:54:37                                                  *
 * @LastModifiedDate: 2023-01-07 20:54:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


let interval = setInterval(() => {
  console.log(document.readyState);
});
setTimeout(() => {
  clearInterval(interval);
}, 500);