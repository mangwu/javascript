/*
 * @Author: mangwu                                                             *
 * @File: useRedBlackTree.js                                                   *
 * @Date: 2023-08-07 17:03:26                                                  *
 * @LastModifiedDate: 2023-08-07 17:22:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { RedBlackTree } = require("./10.5 RedBlackTree.js");

const rbt = new RedBlackTree();

rbt.insert(1);
rbt.insert(3);
rbt.insert(5);
rbt.insert(7);
rbt.insert(9);

console.log(rbt.toString());
console.log(`
  3    
 ↙ ↘
\x1b[31m1\x1b[0m   7
   ↙ ↘
  5   9`);
