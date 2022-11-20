/*
 * @Author: mangwu                                                             *
 * @File: 12.2.2.1 location.assign.js                                          *
 * @Date: 2022-11-20 23:33:19                                                  *
 * @LastModifiedDate: 2022-11-20 23:35:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 三种等价的导航方式
window.location.assign("https://example.com");

window.location = "https://example.com";

location.href = "https://example.com";
