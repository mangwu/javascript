/*
 * @Author: mangwu                                                             *
 * @File: useAVLTree.js                                                        *
 * @Date: 2023-08-01 11:11:11                                                  *
 * @LastModifiedDate: 2023-08-01 17:51:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { AVLTree } = require("./10.4 AVL.js");

const avl = new AVLTree();

avl.insertIterative(1);
console.log(avl.toString());
avl.insertIterative(9);
console.log(avl.toString());
avl.insert(18);
console.log(avl.toString());
avl.insertIterative(28);
console.log(avl.toString());
avl.insert(17);
console.log(avl.toString());
avl.insertIterative(15);
console.log(avl.toString());
avl.insert(-2);
console.log(avl.toString());
avl.insertIterative(-11);
console.log(avl.toString());
avl.insertIterative(-21);
console.log(avl.toString());
avl.insertIterative(19);
console.log(avl.toString());
avl.insertIterative(20);
console.log(avl.toString());
avl.insertIterative(21);
console.log(avl.toString());
avl.insertIterative(22);
console.log(avl.toString());
avl.insertIterative(-3);
console.log(avl.toString());
avl.insertIterative(-29);
console.log(avl.toString());
avl.insertIterative(-21);
console.log(avl.toString());
avl.insertIterative(-18);
console.log(avl.toString());
avl.insert(-20);
console.log(avl.toString());
avl.insertIterative(-39);
console.log(avl.toString());
console.log("----------------remove---------------");
avl.removeRecursive(-20);
console.log(avl.toString());
avl.removeRecursive(1);
console.log(avl.toString());
avl.removeRecursive(-39);
console.log(avl.toString());
avl.removeRecursive(-29);
console.log(avl.toString());
avl.removeRecursive(-21);
console.log(avl.toString());
avl.removeRecursive(17);
console.log(avl.toString());
avl.removeRecursive(20);
console.log(avl.toString());
avl.removeRecursive(19);
console.log(avl.toString());
avl.removeRecursive(18);
console.log(avl.toString());
avl.removeRecursive(28);
console.log(avl.toString());
