/*
 * @Author: mangwu                                                             *
 * @File: 10.1 Tree.js                                                         *
 * @Date: 2023-07-25 09:27:31                                                  *
 * @LastModifiedDate: 2023-07-27 17:13:10                                      *
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
  postOrderTranverse(callback) {
    this.postOrderTranverseNode(this.root, callback);
  }
  postOrderTranverseNode(node, callback) {
    if (node) {
      this.postOrderTranverseNode(node.left, callback);
      this.postOrderTranverseNode(node.right, callback);
      callback(node);
    }
  }
  min() {
    return this.minNode()?.value;
  }
  minNode() {
    let cur = this.root;
    while (cur && cur.left) {
      cur = cur.left;
    }
    return cur;
  }
  // 更具有适用性的方法，在任意一个二叉搜索树的节点上寻找最小节点
  minNode(node = this.root) {
    let cur = node;
    while (cur && cur.left) {
      cur = cur.left;
    }
    return cur;
  }
  max() {
    return this.maxNode()?.value;
  }
  maxNode() {
    let cur = this.root;
    while (cur && cur.right) {
      cur = cur.right;
    }
    return cur;
  }
  // 更具有适用性的方法，在任意一个二叉搜索树的节点上寻找最大节点
  maxNode(node = this.root) {
    let cur = node;
    while (cur && cur.right) {
      cur = cur.right;
    }
    return cur;
  }
  search(value) {
    return Boolean(this.searchNode(value));
  }
  // 复用遍历方法，全局搜索
  searchNode(value) {
    let res = undefined;
    this.inOrderTraverse((node) => {
      if (this.compareFn(node.value, value) === 0) res = node;
    });
    return res;
  }
  // 迭代搜索
  searchNode(value) {
    let res = undefined;
    let cur = this.root;
    while (cur) {
      const comparisonRes = this.compareFn(cur.value, value);
      if (comparisonRes === 0) {
        res = cur;
        break;
      } else if (comparisonRes < 0) {
        // cur.value小于value 在右边
        cur = cur.right;
      } else {
        // cur.value大于value，在左边
        cur = cur.left;
      }
    }
    return res;
  }
  // 递归搜索
  searchNode(value) {
    const binarySearchNode = (node, value) => {
      if (!node) return;
      const comparisonRes = this.compareFn(node.value, value);
      if (comparisonRes === 0) {
        return node;
      } else if (comparisonRes < 0) {
        // cur.value小于value 在右边
        return binarySearchNode(node.right, value);
      } else {
        // cur.value大于value，在左边
        return binarySearchNode(node.left, value);
      }
    };
    return binarySearchNode(this.root, value);
  }
  // 更具有适用性的方法，在任意一个二叉搜索树的节点上进行搜索
  searchNode(value, node = this.root) {
    let res = undefined;
    let cur = node;
    while (cur) {
      const comparisonRes = this.compareFn(cur.value, value);
      if (comparisonRes === 0) {
        res = cur;
        break;
      } else if (comparisonRes < 0) {
        // cur.value小于value 在右边
        cur = cur.right;
      } else {
        // cur.value大于value，在左边
        cur = cur.left;
      }
    }
    return res;
  }
  remove(value, perfer = "left") {
    if (!this.root) return;
    if (this.compareFn(this.root.value, value) === 0) {
      // 移除根节点
      const res = this.root;
      this.root = this.removeNode(this.root, perfer, "remove");
      return res;
    }
    // 被移除的节点
    let pre = null;
    let cur = this.root;
    while (cur) {
      const comparisonRes = this.compareFn(cur.value, value);
      if (comparisonRes === 0) {
        // 找到移除的节点了
        const res = cur;
        if (pre.value > cur.value) {
          // cur是pre的左节点
          pre.left = this.removeNode(cur, perfer, "remove");
        } else {
          // cur是pre的右节点
          pre.right = this.removeNode(cur, perfer, "remove");
        }
        return res;
      } else if (comparisonRes < 0) {
        // cur.value小于value 在右边
        pre = cur;
        cur = cur.right;
      } else {
        // cur.value大于value，在左边
        pre = cur;
        cur = cur.left;
      }
    }
    return;
  }
  // 移除当前节点，当前节点子树构成的新子树使用perfer作为新的子树根节点
  removeNode(node, perfer = "left") {
    if (!node) return;
    // 检查内部调用的额外参数
    if (arguments[2] !== "remove") {
      // 外部调用，传入的node可能不是本BTS的节点
      const res = this.searchNode(node.value);
      if (res === node) return this.remove(node.value, perfer);
      return console.log("传入的节点非本BST的节点"); // node非本BTS的节点
    }
    if (!node.left && !node.right) return null;
    else if (node.left && node.right) {
      const res = node[perfer];
      if (perfer === "left") {
        // 默认左节点作为子树根节点
        const maxNode = this.maxNode(res);
        maxNode.right = node.right;
      } else {
        // 使用右节点作为子树根节点
        const minNode = this.minNode(res);
        minNode.left = node.left;
      }
      node.right = null;
      node.left = null;
      return res;
    } else if (node.left) {
      // 只有左节点
      const res = node.left;
      node.left = null;
      return res;
    } else {
      // 只有右节点
      const res = node.right;
      node.right = null;
      return res;
    }
  }
  // 一个toString例子
  //       8
  //     ↙   ↘
  //    2     11
  //   ↙ ↘      ↘
  //  0   3      12
  //       ↘       ↘
  //        4       21
  //         ↘     ↙
  //          7  15
  toString() {
    if (!this.root) return "null tree";
    const dfs = (node) => {
      if (!node.left && !node.right) return node.value.toString();
      const nodeValueStrArr = node.value.toString().split("");
      // 左箭头位置
      let leftArrowIdx = 0;
      // 右箭头位置
      let rightArrowIdx = 0;
      // 左结果字符串数组
      let leftStrArr = [];
      // 右结果字符串数组
      let rightStrArr = [];
      // 左节点字符串长度
      let leftLen = 0;
      // 右节点字符串长度
      let rightLen = 0;
      // 处理左节点
      if (node.left) {
        const leftArrow = "↙";
        const left = dfs(node.left);
        leftStrArr = left.split("\n").map((v) => v.split(""));
        const head = leftStrArr[0];
        leftLen = head.length;
        const leftArrowArr = new Array(leftLen).fill(" ");
        // 获取首行节点值结束的位置
        leftArrowIdx = getFirstNonBlankIndex(head.join(""), false) + 1;
        leftArrowArr[leftArrowIdx] = leftArrow;
        if (leftArrowIdx === leftLen) {
          // 节点值在最后，需要增加宽度
          leftStrArr.forEach((ele) => ele.push(" "));
          leftLen++;
        }
        leftStrArr.unshift(leftArrowArr);
      }
      // 处理右节点
      if (node.right) {
        const rightArrow = "↘";
        const right = dfs(node.right);
        rightStrArr = right.split("\n").map((v) => v.split(""));
        const head = rightStrArr[0];
        rightLen = head.length;
        // 获取首行节点值开始的位置
        rightArrowIdx = getFirstNonBlankIndex(head.join(""));
        const rightArrowArr = new Array(rightLen).fill(" ");
        if (rightArrowIdx === 0) {
          // 节点值在最前，需要增加宽度
          rightStrArr.forEach((ele) => ele.unshift(" "));
          rightLen++;
          rightArrowArr.unshift(" ");
        } else rightArrowIdx--;
        rightArrowArr[rightArrowIdx] = rightArrow;

        rightStrArr.unshift(rightArrowArr);
      }
      // 只有左节点的情况
      if (node.left && !node.right) {
        const firstRow = new Array(leftArrowIdx + 1).fill(" ");
        const firstLen = firstRow.push(...nodeValueStrArr);
        const diffLen = firstLen - leftLen;
        if (diffLen > 0) {
          // 首行很长，其它行需要增加宽度
          leftStrArr.forEach((ele) =>
            ele.push(...new Array(diffLen).fill(" "))
          );
        } else if (diffLen < 0) {
          // 首行比较短，需要自行增加宽度
          firstRow.push(...new Array(-diffLen).fill(" "));
        }
        leftStrArr.unshift(firstRow);
        return leftStrArr.map((v) => v.join("")).join("\n");
      }
      // 只有右节点的情况
      if (node.right && !node.left) {
        const firstRow = new Array(rightLen - rightArrowIdx).fill(" ");
        const firstLen = firstRow.unshift(...nodeValueStrArr);
        const diffLen = firstLen - rightLen;
        if (diffLen > 0) {
          // 首行很长，其它行需要增加宽度
          rightStrArr.forEach((ele) =>
            ele.unshift(...new Array(diffLen).fill(" "))
          );
        } else if (diffLen < 0) {
          // 首行比较短，需要自行增加宽度
          firstRow.unshift(...new Array(-diffLen).fill(" "));
        }
        rightStrArr.unshift(firstRow);
        return rightStrArr.map((v) => v.join("")).join("\n");
      }
      // 二者都有
      if (node.right && node.left) {
        // 行数差异
        const diff = leftStrArr.length - rightStrArr.length;
        // 补充空白
        if (diff > 0)
          rightStrArr.push(
            ...new Array(diff).fill(0).map(() => new Array(rightLen).fill(" "))
          );
        else if (diff < 0)
          leftStrArr.push(
            ...new Array(-diff).fill(0).map(() => new Array(leftLen).fill(" "))
          );
        // 左箭头和右箭头中间空白间距
        const spacing = rightArrowIdx + leftLen - leftArrowIdx - 1;
        // 左子树和右子树之间的最小空白距离
        const minDistance = getArrDistance(leftStrArr, rightStrArr);
        // 节点值占用宽度
        const nodeValueLen = nodeValueStrArr.length;
        // 箭头中间空白和节点值的差
        let spacingDiff = spacing - nodeValueLen;
        // 分情况考虑拼接情况
        if (minDistance <= 1) {
          // 不可去除空白，至少增加1 - minDistance个空白
          if (spacingDiff >= 0) {
            // 是否增加由1 - minDistance和 spaceingDiff % 2 决定
            let addLen = 1 - minDistance;
            spacingDiff += addLen;
            spacingDiff % 2 === 1 ? addLen++ : null;
            // 计算 nodeValueStrArr
            const nVAddLen = Math.ceil(spacingDiff / 2);
            return jointStrArrWithBlank(
              leftStrArr,
              rightStrArr,
              nodeValueStrArr,
              leftArrowIdx,
              rightArrowIdx,
              addLen,
              nVAddLen
            );
          } else {
            // spacingDiff小于0，一定要增加空白宽度
            return jointStrArrWithBlank(
              leftStrArr,
              rightStrArr,
              nodeValueStrArr,
              leftArrowIdx,
              rightArrowIdx,
              -spacingDiff // 子树增加宽度，节点值增加宽度为0
            );
          }
        } else {
          // minDistance大于1，最多可以收缩minDistance - 1个空格
          if (spacingDiff <= 0) {
            // spacingDiff不大于0，一定不能收缩
            return jointStrArrWithBlank(
              leftStrArr,
              rightStrArr,
              nodeValueStrArr,
              leftArrowIdx,
              rightArrowIdx,
              -spacingDiff // 子树增加宽度，节点值增加宽度为0
            );
          } else {
            // spacingDiff大于0，可以收缩Math.min(spacingDiff, minDistance - 1)个
            let removeLen = Math.min(spacingDiff, minDistance - 1);
            spacingDiff -= removeLen;
            if (spacingDiff % 2 === 1) {
              removeLen--;
              spacingDiff++;
            }
            return jointStrArrWithReduce(
              leftStrArr,
              rightStrArr,
              nodeValueStrArr,
              leftArrowIdx,
              rightArrowIdx,
              removeLen,
              spacingDiff / 2
            );
          }
        }
      }
    };
    const getFirstNonBlankIndex = (str, flag = true) => {
      // flag表示从头还是从尾部开始遍历
      const strTrim = str.trim();
      return flag
        ? str.indexOf(strTrim[0])
        : str.indexOf(strTrim[strTrim.length - 1]);
    };
    const getArrDistance = (leftStrArr, rightStrArr) => {
      const leftLen = leftStrArr[0].length;
      const rightLen = rightStrArr[0].length;
      const n = leftStrArr.length;
      let res = leftLen + rightLen;
      for (let i = 0; i < n; i++) {
        const leftStr = leftStrArr[i];
        const rightStr = rightStrArr[i];
        let leftIdx = leftLen - 1;
        while (leftIdx >= 0 && leftStr[leftIdx] === " ") {
          leftIdx--;
        }
        let rightIdx = 0;
        while (rightIdx < rightLen && rightStr[rightIdx] === " ") {
          rightIdx++;
        }
        res = Math.min(res, rightIdx + leftLen - leftIdx - 1);
      }
      return res;
    };
    /**
     * @description 拼接左右子树
     * @param {string[][]} leftStrArr 左子树字符串数组
     * @param {string[][]} rightStrArr 右子树字符串数组
     * @param {string[]} nodeValueStrArr 节点值字符数组\
     * @param {number} leftArrowIdx 左箭头位置
     * @param {number} rightArrowIdx 右箭头位置
     * @param {number} addLen 子树拼接增加的空白长度
     * @param {number} nVAddLen 节点值额外增加的左右空白长度
     * @returns
     */
    const jointStrArrWithBlank = (
      leftStrArr,
      rightStrArr,
      nodeValueStrArr,
      leftArrowIdx,
      rightArrowIdx,
      addLen = 0,
      nVAddLen = 0
    ) => {
      const rightLen = rightStrArr[0].length;
      nodeValueStrArr.unshift(
        // 左边空白
        ...new Array(leftArrowIdx + 1 + nVAddLen).fill(" ")
      );
      nodeValueStrArr.push(
        // 右边空白
        ...new Array(rightLen - rightArrowIdx + nVAddLen).fill(" ")
      );
      // 拼接leftStrArr和rightStrArr
      leftStrArr.forEach((v, i) => {
        v.push(...new Array(addLen).fill(" "));
        v.push(...rightStrArr[i]);
      });
      leftStrArr.unshift(nodeValueStrArr);
      return leftStrArr.map((v) => v.join("")).join("\n");
    };
    /**
     * @description 拼接左右子树
     * @param {string[][]} leftStrArr 左子树字符串数组
     * @param {string[][]} rightStrArr 右子树字符串数组
     * @param {string[]} nodeValueStrArr 节点值字符数组
     * @param {number} leftArrowIdx 左箭头位置
     * @param {number} rightArrowIdx 右箭头位置
     * @param {number} removeLen 子树拼接减少的空白长度
     * @param {number} nVAddLen 节点值额外增加的左右空白长度
     * @returns
     */
    const jointStrArrWithReduce = (
      leftStrArr,
      rightStrArr,
      nodeValueStrArr,
      leftArrowIdx,
      rightArrowIdx,
      removeLen = 0,
      nVAddLen = 0
    ) => {
      const len = leftStrArr.length;
      while (removeLen > 0) {
        for (let i = 0; i < len; i++) {
          const leftArr = leftStrArr[i];
          const rightArr = rightStrArr[i];
          if (leftArr[leftArr.length - 1] === " ") {
            leftArr.pop();
          } else {
            rightArr.shift();
            if (i === 0)
              // 这里的rightArrowIdx会因为rightStrArr[0]的改变而发生改变
              rightArrowIdx--;
          }
        }
        removeLen--;
      }
      const res = jointStrArrWithBlank(
        leftStrArr,
        rightStrArr,
        nodeValueStrArr,
        leftArrowIdx,
        rightArrowIdx,
        0,
        nVAddLen
      );
      return res;
    };
    return dfs(this.root);
  }
}

module.exports = { BinarySearchTree, BinaryTreeNode };
