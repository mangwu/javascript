/*
 * @Author: mangwu                                                             *
 * @File: 8.1.8.2.js                                                           *
 * @Date: 2022-09-12 20:12:18                                                  *
 * @LastModifiedDate: 2022-09-12 21:13:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 嵌套解构
const book = {
  title: "JavaScript高级程序设计第四版",
  content: {
    catalogue: [1, 2, 3, 4],
    body: "bala...",
    appendix: "thank you",
  },
};
const {
  title,
  content: {
    catalogue: [a, ...rest],
    body,
    appendix: supplement,
    athor = "mangwu",
  },
} = book;
console.log(title, a, rest, body, supplement, athor);
