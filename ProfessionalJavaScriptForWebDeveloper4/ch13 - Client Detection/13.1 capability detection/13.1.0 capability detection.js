/*
 * @Author: mangwu                                                             *
 * @File: 13.1.0 capability detection.js                                       *
 * @Date: 2022-12-22 23:20:41                                                  *
 * @LastModifiedDate: 2022-12-22 23:25:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function getElement(id) {
  if (document.querySelector) {
    return document.querySelector(`#${id}`);
  } else if (document.getElementById) {
    return document.getElementById(id);
  } else if (document.all) {
    return document.all[id];
  } else {
    throw new Error("无法通过id获取元素");
  }
}
