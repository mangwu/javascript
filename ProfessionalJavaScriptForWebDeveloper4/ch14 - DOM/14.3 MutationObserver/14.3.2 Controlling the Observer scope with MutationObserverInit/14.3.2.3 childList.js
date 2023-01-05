/*
 * @Author: mangwu                                                             *
 * @File: 14.3.2.3 childList.js                                                *
 * @Date: 2023-01-05 11:16:55                                                  *
 * @LastModifiedDate: 2023-01-05 11:20:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const div = document.querySelector("div");

const observer = new MutationObserver((mutationRecords) =>
  console.log(mutationRecords)
);

observer.observe(div, { childList: true });

div.insertBefore(div.lastElementChild, div.firstElementChild);
