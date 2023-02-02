/*
 * @Author: mangwu                                                             *
 * @File: 10.14.3 memory leaks.js                                              *
 * @Date: 2022-10-12 13:39:56                                                  *
 * @LastModifiedDate: 2022-10-12 14:16:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 闭包可能导致内存泄漏

function assignHanlder() {
  let element = document.getElementById("someElement");
  element.onclick = () => console.log(element.id);
}

function assignHanlder() {
  let element = document.getElementById("someElement");
  let id = element.id;
  element.onclick = () => console.log(id);
  element = null;
}

