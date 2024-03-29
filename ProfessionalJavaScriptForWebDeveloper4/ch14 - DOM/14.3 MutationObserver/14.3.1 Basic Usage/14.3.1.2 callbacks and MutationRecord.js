/*
 * @Author: mangwu                                                             *
 * @File: 14.3.1.2 callbacks and MutationRecord.js                             *
 * @Date: 2023-01-03 16:29:18                                                  *
 * @LastModifiedDate: 2023-01-04 10:40:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let observer = new MutationObserver((mutationRecords, observer) => {
  console.log(mutationRecords);
  console.log(observer === observer);
});

observer.observe(document.body, { attributes: true });
// document.body.setAttribute("foo", "bar");
// document.body.className = "baz";

document.body.setAttributeNS("localhost:8000", "foo", "bar");
