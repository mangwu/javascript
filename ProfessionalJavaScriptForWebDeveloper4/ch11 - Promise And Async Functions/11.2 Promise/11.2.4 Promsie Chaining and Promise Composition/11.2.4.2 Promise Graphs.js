/*
 * @Author: mangwu                                                             *
 * @File: 11.2.4.2 Promise Graphs.js                                           *
 * @Date: 2022-10-26 11:25:42                                                  *
 * @LastModifiedDate: 2022-10-26 11:30:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let A = new Promise((resovle, reject) => {
  console.log("A");
  resovle();
});

let B = A.then(() => console.log("B"));
let C = A.then(() => console.log("C"));

B.then(() => console.log("D"));
B.then(() => console.log("E"));
C.then(() => console.log("F"));
C.then(() => console.log("G"));

//    A
//   / \
//  B   C
// /\   /\
// D E  F G
