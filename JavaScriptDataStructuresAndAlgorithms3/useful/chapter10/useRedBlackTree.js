/*
 * @Author: mangwu                                                             *
 * @File: useRedBlackTree.js                                                   *
 * @Date: 2023-08-07 17:03:26                                                  *
 * @LastModifiedDate: 2023-08-08 10:27:09                                      *
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
console.log(rbt.toString(true));
rbt.insert(5);
console.log(rbt.toString(true));
rbt.insert(7);
console.log(rbt.toString(true));
rbt.insert(9);
console.log(rbt.toString(true));
rbt.insert(10);
console.log(rbt.toString(true));
rbt.insert(-5);
console.log(rbt.toString(true));
rbt.insert(-6);
console.log(rbt.toString(true));
rbt.insert(0);
console.log(rbt.toString(true));
rbt.insert(2);
console.log(rbt.toString(true));
