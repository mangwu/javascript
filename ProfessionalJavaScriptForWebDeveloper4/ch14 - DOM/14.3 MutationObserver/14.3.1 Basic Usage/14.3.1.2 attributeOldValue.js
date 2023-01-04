/*
 * @Author: mangwu                                                             *
 * @File: 14.3.1.2 attributeOldValue.js                                        *
 * @Date: 2023-01-04 17:36:35                                                  *
 * @LastModifiedDate: 2023-01-04 17:41:00                                      *
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
  attributes: false,
  attributeOldValue: true,
});

div.className = "bar";
div.setAttribute("foo", "baz");

div.appendChild(document.createElement("p"));
div.children[0].className = "my-p";
