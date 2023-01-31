/*
 * @Author: mangwu                                                             *
 * @File: 16.4.1.0.2 selector content.js                                       *
 * @Date: 2023-01-31 16:53:11                                                  *
 * @LastModifiedDate: 2023-01-31 17:04:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const range = document.createRange();
const articleContent = document.querySelector(".section-content");
const p = articleContent.children[1];
range.setStart(p, 3);
range.setEnd(p.childNodes[10], 15);