/*
 * @Author: mangwu                                                             *
 * @File: 10.4 AVL.js                                                          *
 * @Date: 2023-07-28 11:18:36                                                  *
 * @LastModifiedDate: 2023-08-02 11:09:34                                      *
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
    if (!node) {
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
  rotationLL(node) {
    // L-L，右旋操作
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }
  rotationRR(node) {
    // R-R，左旋操作
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }
  rotationLR(node) {
    // L-R 左子树先左旋，再进行右旋操作
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }
  rotationRL(node) {
    // R-L 右子树先右旋，再进行左旋操作
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }
  insertNode(node, value) {
    if (!node) return new BinaryTreeNode(value);
    const comparisonRes = this.compareFn(node.value, value);
    if (comparisonRes < 0) {
      // node.value小于value，value应该在右边
      node.right = this.insertNode(node.right, value);
    } else if (comparisonRes > 0) {
      // node.value大于value，value应该在左边
      node.left = this.insertNode(node.left, value);
    } else return node; // 重复的节点，不需要进行平衡校验
    // 进行平衡校验
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCE_LEFT) {
      // 通过判断当前节点的左节点和插入节点值的大小，来确定节点插入的左右位置
      if (this.compareFn(node.left.value, value) > 0) {
        // 左子节点的值大于value，value节点在左子节点左边，属于LL情况
        return this.rotationLL(node);
      } else return this.rotationLR(node);
    } else if (balanceFactor === BalanceFactor.UNBALANCE_RIGHT) {
      // 通过判断当前节点右节点和插入节点值的大小，来确定节点插入的左右位置
      if (this.compareFn(node.right.value, value) < 0) {
        // 右子节点的值小于value，value 节点在右子节点右边，属于RR情况
        return this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }
    return node;
  }
  insertIterative(value) {
    const avlOperate = (nodeArr) => {
      const n = nodeArr.length;
      for (let i = n - 1; i >= 0; i--) {
        let node = nodeArr[i];
        let type =
          i === 0 ? "root" : nodeArr[i - 1].right === node ? "right" : "left";
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCE_LEFT) {
          if (this.compareFn(node.left.value, value) > 0) {
            // 左子节点的值大于value，value节点在左子节点左边，属于LL情况
            node = this.rotationLL(node);
          } else node = this.rotationLR(node);
        } else if (balanceFactor === BalanceFactor.UNBALANCE_RIGHT) {
          if (this.compareFn(node.right.value, value) < 0) {
            // 右子节点的值小于value，value 节点在右子节点右边，属于RR情况
            node = this.rotationRR(node);
          } else node = this.rotationRL(node);
        }
        if (type === "root") this.root = node;
        else nodeArr[i - 1][type] = node;
      }
    };
    if (this.root === null) {
      this.root = new BinaryTreeNode(value);
    } else {
      let node = this.root;
      const nodeArr = [];
      while (true) {
        if (this.compareFn(node.value, value) < 0) {
          // 右边
          nodeArr.push(node);
          if (node.right === null) {
            node.right = new BinaryTreeNode(value);
            break;
          } else node = node.right;
        } else if (this.compareFn(node.value, value) > 0) {
          // 右边
          nodeArr.push(node);
          if (node.left === null) {
            node.left = new BinaryTreeNode(value);
            break;
          } else node = node.left;
        } else return false;
      }
      avlOperate(nodeArr);
    }
    return true;
  }
  removeNodeRecursive(node, value) {
    node = super.removeNodeRecursive(node, value);
    if (!node) return node; // 空节点不需要处理
    // 检查node子树是否平衡
    return this.checkAVLNode(node);
  }
  checkAVLNode(node) {
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCE_LEFT) {
      // 左倾
      const balanceFactorLeft = this.getBalanceFactor(node.left);
      if (
        balanceFactorLeft === BalanceFactor.BALANCED ||
        balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCE_LEFT
      ) {
        // LL
        return this.rotationLL(node);
      } else {
        // LR
        return this.rotationLR(node);
      }
    } else if (balanceFactor === BalanceFactor.UNBALANCE_RIGHT) {
      // 右倾
      const balanceFactorRight = this.getBalanceFactor(node.right);
      if (
        balanceFactorRight === BalanceFactor.BALANCED ||
        balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCE_RIGHT
      ) {
        // RR
        return this.rotationRR(node);
      } else return this.rotationRL(node);
    }
    return node;
  }
  // 覆盖继承的remove和removenNode，不再支持perfer参数
  remove(value, _perfer = "left") {
    this.removeRecursive(value);
  }
  removeNode(node, _perfer = "left") {
    console.log("请使用remove方法，不再支持直接删除node");
  }
}
module.exports = { AVLTree };

// left right

// leftH - rightH = x

// maxLeftH  minRightH

// max(leftH, leftH - maxLeftH + rightH)
// max(rightH, rightH - minRigthH + leftH)
