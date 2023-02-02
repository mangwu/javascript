/*
 * @Author: mangwu                                                             *
 * @File: 10.3.1.3 JavaScript arguments.js                                     *
 * @Date: 2022-10-05 22:46:55                                                  *
 * @LastModifiedDate: 2022-10-05 22:55:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function aboutArguments() {
  console.log(arguments);
  console.log(arguments[0], arguments[3], arguments.length);
}
aboutArguments();
aboutArguments("mangwu", 22);
aboutArguments("mangwu", 22, "male");
