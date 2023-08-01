/*
 * @Author: mangwu                                                             *
 * @File: useTree.js                                                           *
 * @Date: 2023-07-25 10:49:02                                                  *
 * @LastModifiedDate: 2023-08-01 17:06:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { BinarySearchTree, BinaryTreeNode } = require("./10.1 Tree.js");
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(2);
bst.insert(11);
bst.insertIterative(12);
bst.insertIterative(21);
bst.insert(15);
bst.insertIterative(3);
bst.insert(4);
bst.insertIterative(7);
bst.insertIterative(0);

//       8
//     ↙   ↘
//    2     11
//   ↙ ↘      ↘
//  0   3      12
//       ↘       ↘
//        4       21
//         ↘     ↙
//          7  15
console.log(bst.toString());

console.log("-----inOrderTraverse-----");
bst.inOrderTraverse((node) => console.log(node.value));
console.log("-----preOrderTranverse-----");
bst.preOrderTranverse((node) => console.log(node.value));
console.log("-----postOrderTranverse-----");
bst.postOrderTranverse((node) => console.log(node.value));
console.log("-----min and max-----");
bst.insert(1);
bst.insert(-5);
bst.insert(9);
bst.insert(10);
console.log(bst.toString());
console.log("min:", bst.min());
console.log("max:", bst.max());
console.log("-----search and searchNode-----");
console.log("search 5:", bst.search(5));
console.log("search 1:", bst.search(1));
console.log("searchNode 5:", bst.searchNode(5));
console.log("searchNode 0:", bst.searchNode(0));
console.log("-----remove-----");
console.log(
  "remove root node with value 8, perfer right:",
  bst.remove(8, "right")
);
console.log(bst.toString());
console.log("remove leaf node with value 7 :", bst.remove(7, "right"));
console.log(bst.toString());
console.log("remove inner node with value 0, perfer left", bst.remove(0));
console.log(bst.toString());
console.log("remove non-existent node with value 0", bst.remove(0));
console.log(bst.toString());
console.log("-----removeNode-----");
console.log(
  "remove non-existent 1 node: ",
  bst.removeNode(new BinaryTreeNode(1))
);
console.log("remove existent 1 leaf node: ", bst.removeNode(bst.searchNode(1)));
console.log(bst.toString());
console.log(
  "remove existent 11 root node, perfer left: ",
  bst.removeNode(bst.searchNode(11), "right")
);
console.log(bst.toString());
console.log(
  "remove existent 2 root node, perfer right: ",
  bst.removeNode(bst.searchNode(2), "right")
);
console.log(bst.toString());
console.log("-----removeRecursive-----");
const preNode3 = bst.searchNode(3);
const preNode4 = bst.searchNode(4);
console.log("remove existent 3 root node");
bst.removeRecursive(3);
console.log(bst.toString());
const curNode4 = bst.searchNode(4);
console.log("cur node 4 is pre node 4 ? ", preNode4 === curNode4);
console.log("cur node 4 is pre node 3 ? ", preNode3 === curNode4);
console.log();
console.log("-----The problem of Normal Binary Search Tree:-------");
const bst2 = new BinarySearchTree();
bst2.insert(1);
bst2.insert(2);
bst2.insert(3);
bst2.insert(4);
bst2.insert(0);
bst2.insert(5);
bst2.insert(6);
console.log("This show it's out of balance");
console.log(bst2.toString());
const bst3 = new BinarySearchTree();
bst3.insert(3);
bst3.insert(1);
bst3.insert(5);
bst3.insert(2);
bst3.insert(0);
bst3.insert(4);
bst3.insert(6);
console.log("better format:");
console.log(bst3.toString());
