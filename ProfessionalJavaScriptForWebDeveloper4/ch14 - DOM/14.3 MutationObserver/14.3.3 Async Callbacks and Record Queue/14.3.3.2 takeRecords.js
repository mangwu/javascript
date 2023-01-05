/*
 * @Author: mangwu                                                             *
 * @File: 14.3.3.2 takeRecords.js                                              *
 * @Date: 2023-01-05 16:02:32                                                  *
 * @LastModifiedDate: 2023-01-05 16:06:03                                      *
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

observer.observe(div, { attributes: true });

div.className = "bar";
div.className = "baz";
div.className = "foo";

console.log(observer.takeRecords());
console.log(observer.takeRecords());

div.className = "foo";


