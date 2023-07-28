/*
 * @Author: mangwu                                                             *
 * @File: 10.4 AVL.js                                                          *
 * @Date: 2023-07-28 11:18:36                                                  *
 * @LastModifiedDate: 2023-07-28 14:43:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { BinaryTreeNode, BinarySearchTree } = require("./10.1 Tree.js");

const BalanceFactor = {
  get UNBALANCE_RIGHT() {
    return -2;
  },
  get SLIGHTLY_UNBALANCE_RIGHT() {
    return -1;
  },
  get BALANCED() {
    return 0;
  },
  get SLIGHTLY_UNBALANCE_LEFT() {
    return 1;
  },
  get UNBALANCE_LEFT() {
    return 2;
  },
};
class AVLTree extends BinarySearchTree {
  constructor(compareFn = (a, b) => a - b) {
    super(compareFn);
  }
  getNodeHeight(node) {
    if (node === null) {
      return -1;
    }
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }
  getBalanceFactor(node) {
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }
}
