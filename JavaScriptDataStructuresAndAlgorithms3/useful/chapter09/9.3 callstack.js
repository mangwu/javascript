/*
 * @Author: mangwu                                                             *
 * @File: 9.3 callstack.js                                                              *
 * @Date: 2023-07-24 15:44:31                                                  *
 * @LastModifiedDate: 2023-07-24 15:45:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let i = 0;

function recursion() {
  i++;
  recursion();
}

try {
  recursion();
} catch (err) {
  console.log(i);
  console.log(err.message);
}
