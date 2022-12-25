/*
 * @Author: mangwu                                                             *
 * @File: 13.3.2.1 navigator.geolocation.js                                    *
 * @Date: 2022-12-25 17:42:13                                                  *
 * @LastModifiedDate: 2022-12-25 19:04:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let p = null;
navigator.geolocation.getCurrentPosition(
  (position) => (p = position),
  (error) => console.log(error)
);
