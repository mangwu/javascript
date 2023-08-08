/*
 * @Author: mangwu                                                             *
 * @File: 10.5 RedBlackTree.js                                                 *
 * @Date: 2023-08-02 17:28:30                                                  *
 * @LastModifiedDate: 2023-08-08 10:37:23                                      *
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
  setRed() {
    this.color = COLORS.Red;
  }
  setBlack() {
    this.color = COLORS.Black;
  }
}

class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = (a, b) => a - b) {
    super(compareFn);
  }
  insert(value) {
    if (this.root === null) {
      // 情况一，根节点为null
      this.root = new RedBlackTreeNode(value, COLORS.Black);
    } else {
      // 搜索迭代
      const newNode = this.insertNode(this.root, value);
      this.fixTreeProperties(newNode);
    }
  }
  // 在node子树中插入value
  insertNode(node, value) {
    const comparisonRes = this.compareFn(node.value, value);
    if (comparisonRes > 0) {
      // 当前节点大于插入节点值，插入节点在当前节点左边
      if (!node.left) {
        node.left = new RedBlackTreeNode(value, COLORS.Red, node);
        return node.left;
      } else return this.insertNode(node.left, value);
    } else if (comparisonRes < 0) {
      // 当前节点小于插入节点值，插入节点在当前节点右边
      if (!node.right) {
        node.right = new RedBlackTreeNode(value, COLORS.Red, node);
        return node.right;
      } else return this.insertNode(node.right, value);
    } else return null; // 相同节点值不能插入到二叉搜索树中
  }
  fixTreeProperties(node) {
    // 情况二默认条件下不需要进行修正树节点属性
    while (node && node.parent && node.parent.isRed() && node.isRed()) {
      // 处理当前节点时红色，并且父节点也是红色的情况
      const parent = node.parent;
      const grandParent = parent.parent; // 有可能时根节点
      if (grandParent && grandParent.left === parent) {
        // 父节点是左侧子节点
        const uncle = grandParent.right;
        if (uncle && uncle.isRed()) {
          // 情况三
          grandParent.setRed();
          parent.setBlack();
          uncle.setBlack();
          node = grandParent;
        } else {
          if (parent.right === node) {
            // 情况四
            // 左旋父节点形成情况5
            this.rotateL(parent);
            node.setBlack();
          } else {
            parent.setBlack();
          }
          grandParent.setRed();
          // 情况5
          // 右旋祖父节点
          if (grandParent === this.root) {
            this.root = this.rotateR(grandParent);
          } else this.rotateR(grandParent);
          break;
        }
      } else {
        // 父节点是右侧子节点
        const uncle = grandParent.left;
        if (uncle && uncle.isRed()) {
          // 情况三（镜像）
          grandParent.setRed();
          parent.setBlack();
          uncle.setBlack();
          node = grandParent;
        } else {
          if (parent.left === node) {
            // 情况四（镜像）
            // 右旋父节点形成情况五
            this.rotateR(parent);
            node.setBlack();
          } else {
            parent.setBlack();
          }
          // node.setBlack();
          grandParent.setRed();
          // 情况五（镜像）
          // 左旋祖父节点
          if (grandParent === this.root) {
            this.root = this.rotateL(grandParent);
          } else this.rotateL(grandParent);
          break;
        }
      }
    }
    this.root.setBlack();
  }
  rotateL(node) {
    // 左旋
    const right = node.right;
    // 连接node和right的左孩子
    node.right = right.left;
    right.left && (right.left.parent = node);
    // 连接right和node的父节点
    right.parent = node.parent;
    if (node.parent && node.parent.left === node) {
      node.parent.left = right;
    } else if (node.parent) {
      node.parent.right = right;
    }
    // 连接right和node
    right.left = node;
    node.parent = right;
    return right;
  }
  rotateR(node) {
    // 右旋
    const left = node.left;
    // 连接node和left的右孩子
    node.left = left.right;
    left.right && (left.right.parent = node);
    // 连接left和node的父节点
    left.parent = node.parent;
    if (node.parent && node.parent.left === node) {
      node.parent.left = left;
    } else if (node.parent) {
      node.parent.right = left;
    }
    // 连接left和node
    left.right = node;
    node.parent = left;
    return left;
  }
  toString(flag = false) {
    const res = super.toString();
    if (!flag) return res;
    // 彩色树
    const strArr = res.split("\n");
    const n = strArr.length;
    for (let i = 0; i < n; i += 2) {
      let cur = "";
      const str = strArr[i];
      const m = str.length;
      for (let i = 0; i < m; i++) {
        if (str[i] === " ") {
          cur += str[i];
          continue;
        }
        let num = "";
        while (i < m && str[i] !== " ") {
          num += str[i];
          i++;
        }
        i--;
        num = parseInt(num);
        const node = this.searchNode(num);
        if (node && node.isRed()) num = `\x1b[31m${num}\x1b[0m`;
        if (node && node.isBlack()) num = `\x1b[35m${num}\x1b[0m`;
        cur += num;
      }
      strArr[i] = cur;
    }
    return strArr.join("\n");
  }
}

module.exports = { RedBlackTree, RedBlackTreeNode };
