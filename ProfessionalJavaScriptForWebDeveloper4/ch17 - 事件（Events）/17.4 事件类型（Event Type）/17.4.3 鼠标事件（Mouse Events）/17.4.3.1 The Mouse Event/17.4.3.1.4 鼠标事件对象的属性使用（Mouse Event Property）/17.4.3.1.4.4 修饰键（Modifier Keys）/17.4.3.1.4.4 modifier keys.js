/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.1.4.4 modifier keys.js                                        *
 * @Date: 2023-03-08 11:21:52                                                  *
 * @LastModifiedDate: 2023-03-08 11:26:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const clickme = document.querySelector(".clickme");

const log = document.querySelector(".log");
clickme.addEventListener("click", (e) => {
  log.textContent = `metaKey: ${e.metaKey}, altKey: ${e.altKey}, 
  ctrlKey: ${e.ctrlKey}, shiftKey: ${e.shiftKey}`;
});
