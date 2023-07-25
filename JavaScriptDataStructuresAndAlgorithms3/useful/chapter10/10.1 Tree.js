/*
 * @Author: mangwu                                                             *
 * @File: 10.1 Tree.js                                                         *
 * @Date: 2023-07-25 09:27:31                                                  *
 * @LastModifiedDate: 2023-07-25 17:34:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class TreeNode {
  constructor(value, ...args) {
    this.value = value;
    this.chindren = [...args];
  }
}

class BinaryTreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn; // 用于比较节点值
    this.root = null; // 二叉树节点值类型
  }
  insert(value) {
    if (this.root === null) {
      this.root = new BinaryTreeNode(value);
    } else {
      return this.insertNode(this.root, value);
    }
    return true;
  }
  insertIterative(value) {
    if (this.root === null) {
      this.root = new BinaryTreeNode(value);
    } else {
      let node = this.root;
      while (true) {
        if (this.compareFn(node.value, value) < 0) {
          // 右边
          if (node.right === null) {
            node.right = new BinaryTreeNode(value);
            return true;
          } else node = node.right;
        } else if (this.compareFn(node.value, value) > 0) {
          // 右边
          if (node.left === null) {
            node.left = new BinaryTreeNode(value);
            return true;
          } else node = node.left;
        } else return false;
      }
    }
    return true;
  }
  insertNode(node, value) {
    if (this.compareFn(node.value, value) < 0) {
      // node.value小于value，value应该在右边
      if (node.right === null) {
        node.right = new BinaryTreeNode(value);
        return true;
      } else return this.insertNode(node.right, value);
    } else if (this.compareFn(node.value, value) > 0) {
      // node.value大于value，value应该在左边
      if (node.left === null) {
        node.left = new BinaryTreeNode(value);
        return true;
      } else return this.insertNode(node.left, value);
    }
    return false;
  }

  toString() {
    if (!this.node) return "null tree";
    const dfs = (node) => {
      if (!node.left && !node.right) return node.value.toString();
      let cur = [node.value.toString()];
      if (node.left) {
        let leftArrow = "↙";
        const left = dfs(node.left);
        const strArr = left.split("\n");
        const head = strArr[0];
        for (let i = 0; i < head.length; i++) {
          if (head[i] === " ") continue;
          else {
            while (head[i] !== " " && i < head.length) {
              i++;
            }
            leftArrow = " ".repeat(i) + leftArrow;
          }
        }
        if (head.length > leftArrow) {
          leftArrow += " ".repeat(head.length - leftArrow.length);
        }
        cur.push(...strArr);
      }
      if (!node.right) {
        // 无右节点
        cur[0] = " ".repeat(cur[1].length) + cur[0];
        return cur.join("\n");
      }
      if (node.right) {
        const right = dfs(node.right);
        const strArr = right.split("\n");
        if (node.left) {
          // 有左节点
          strArr.forEach((element, i) => {
            strArr[i] = " ".repeat(1) + element;
          });
        } else {
          // 无左节点
          strArr.forEach((element, i) => {
            strArr[i] = " ".repeat(node.value.length + 1) + element;
          });
          cur.push(" ".repeat(node.value.length) + "↘", ...strArr);
          cur[0] += " ".repeat(strArr[0].length - cur[0].length);
          return cur.join("\n");
        }
      }
      return cur;
    };
    //       8
    //    ↙     ↘
    //   2       11
    //  ↙ ↘        ↘
    // 0   3        12
    //      ↘         ↘
    //       4         21
    //        ↘       ↙
    //         7    15
  }
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(node, callback) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  preOrderTranverse(callback) {
    this.preOrderTranverseNode(this.root, callback);
  }
  preOrderTranverseNode(node, callback) {
    if (node) {
      callback(node);
      this.preOrderTranverseNode(node.left, callback);
      this.preOrderTranverseNode(node.right, callback);
    }
  }
}

module.exports = { BinarySearchTree };

//     8
//   2   11
//  0 3    12
//     4     21
//      7  15
