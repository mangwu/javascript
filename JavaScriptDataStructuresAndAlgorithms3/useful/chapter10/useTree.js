/*
 * @Author: mangwu                                                             *
 * @File: useTree.js                                                           *
 * @Date: 2023-07-25 10:49:02                                                  *
 * @LastModifiedDate: 2023-07-26 14:59:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { BinarySearchTree } = require("./10.1 Tree.js");
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(2);
bst.insert(11);
bst.insertIterative(3);
bst.insertIterative(4);
bst.insert(12);
bst.insertIterative(7);
bst.insert(0);
bst.insertIterative(21);
bst.insert(15);
//       8
//      ↙ ↘
//    2     11
//   ↙ ↘      ↘
//  0   3      12
//       ↘       ↘
//        4       21
//         ↘     ↙
//          7  15
// console.log(bst.toString());
console.log(bst.toString());
// console.log("-----inOrderTraverse-----");
// bst.inOrderTraverse((node) => console.log(node.value));
// console.log("-----preOrderTranverse-----");
// bst.preOrderTranverse((node) => console.log(node.value));
