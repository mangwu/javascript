/*
 * @Author: mangwu                                                             *
 * @File: 14.3.1.2 attributeOldValue.js                                        *
 * @Date: 2023-01-04 17:36:35                                                  *
 * @LastModifiedDate: 2023-01-04 23:20:23                                      *
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

observer.observe(div, {
  subtree: true,
  attributeOldValue: true,
  attributes: true, // 可以不设置或设置成true，但不能设置为false
});

div.className = "bar";
div.className = "barz";

div.appendChild(document.createElement("p"));
div.children[0].className = "my-p";
div.children[0].className = "my-p2";
