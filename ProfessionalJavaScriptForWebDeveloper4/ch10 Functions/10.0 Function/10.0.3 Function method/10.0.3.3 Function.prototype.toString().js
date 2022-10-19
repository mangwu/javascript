/*
 * @Author: mangwu                                                             *
 * @File: 10.0.3.3 Function.prototype.toString().js                            *
 * @Date: 2022-10-19 11:08:45                                                  *
 * @LastModifiedDate: 2022-10-19 11:10:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

try {
  Function.prototype.toString.call("foo");
} catch (error) {
  console.log(error.toString());
}
