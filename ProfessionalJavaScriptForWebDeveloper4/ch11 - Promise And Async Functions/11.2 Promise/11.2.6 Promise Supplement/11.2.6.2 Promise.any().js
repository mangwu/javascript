/*
 * @Author: mangwu                                                             *
 * @File: 11.2.6.2 Promise.any().js                                            *
 * @Date: 2022-10-28 16:27:07                                                  *
 * @LastModifiedDate: 2022-10-28 17:12:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let p1 = Promise.any([]);

Promise.any([
  new Promise((resolve, reject) => reject("Always fails")),
  new Promise((resolve, reject) => setTimeout(resolve, 500, "Done eventually")),
  new Promise((resolve, reject) => setTimeout(resolve, 100, "Done quick")),
]).then((values) => console.log(values));

Promise.any([
  new Promise((resolve, reject) => reject("Always fails")),
  Promise.reject(new Error("Initial fails")),
  new Promise((resolve, reject) => setTimeout(reject, 100, "Fail quick")),
]).catch((reason) => {
  console.log(reason);
});

let a = Promise.any([
  new Promise((resolve, reject) => reject("Always fails")),
  Promise.reject(new Error("Initial fails")),
  new Promise((resolve, reject) => setTimeout(reject, 100, "Fail quick")),
])