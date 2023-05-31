/*
 * @Author: mangwu                                                             *
 * @File: 17.4.4.5 example.js                                                  *
 * @Date: 2023-05-31 17:07:56                                                  *
 * @LastModifiedDate: 2023-05-31 17:10:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const inputs = document.querySelectorAll("input");
const log1 = document.querySelector("#log1");
const log2 = document.querySelector("#log2");

inputs[0].addEventListener("keydown", (e) => {
  log1.textContent += ` ${e.code}`;
});

inputs[1].addEventListener("keyup", (e) => {
  log2.textContent += ` ${e.code}`;
});