/*
 * @Author: mangwu                                                             *
 * @File: 14.3.1.5 Reusing a MutationObserver.js                               *
 * @Date: 2023-01-05 02:26:32                                                  *
 * @LastModifiedDate: 2023-01-05 02:28:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const p = document.querySelector("p");
const observer = new MutationObserver((mutationRecords) =>
  console.log(mutationRecords)
);
observer.observe(p, { attributes: true });
p.className = "bar";

observer.disconnect();

p.className = "bar2";
p.className = "bar3";
observer.observe(p, { attributes: true });

p.className = "bar4";
