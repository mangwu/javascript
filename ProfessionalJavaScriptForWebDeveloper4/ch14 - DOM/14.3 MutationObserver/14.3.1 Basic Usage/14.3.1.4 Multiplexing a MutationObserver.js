/*
 * @Author: mangwu                                                             *
 * @File: 14.3.1.4 Multiplexing a MutationObserver.js                 *
 * @Date: 2023-01-05 02:15:38                                                  *
 * @LastModifiedDate: 2023-01-05 02:20:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const div = document.querySelector("div");
const p = document.querySelector("p");

const observer = new MutationObserver((mutationRecords) =>
  console.log(mutationRecords)
);
observer.observe(div, { attributes: true });
observer.observe(p, { attributes: true });
p.className = "bar";
div.className = "foo";

setTimeout(() => {
  observer.disconnect();
  p.className = "bar2";
  div.className = "foo2";
});
