/*
 * @Author: mangwu                                                             *
 * @File: 10.5 RedBlackTree.js                                                 *
 * @Date: 2023-08-02 17:28:30                                                  *
 * @LastModifiedDate: 2023-08-03 10:23:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { BinaryTreeNode, BinarySearchTree } = require("./10.1 Tree.js");
const COLORS = {
  get Red() {
    return "#ff0000";
  },
  get Black() {
    return "#000";
  },
};
class RedBlackTreeNode extends BinaryTreeNode {
  constructor(
    value,
    color = COLORS.Red, // 默认红节点
    parent = null,
    left = null,
    right = null
  ) {
    super(value, left, right);
    this.color = color;
    this.parent = parent;
  }
  isRed() {
    return this.color === COLORS.Red;
  }
  isBlack() {
    return this.color === COLORS.Black;
  }
}

class RedBlackTree extends BinarySearchTree {
  
}