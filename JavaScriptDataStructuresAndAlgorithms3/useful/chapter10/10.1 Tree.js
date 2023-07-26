/*
 * @Author: mangwu                                                             *
 * @File: 10.1 Tree.js                                                         *
 * @Date: 2023-07-25 09:27:31                                                  *
 * @LastModifiedDate: 2023-07-26 17:36:32                                      *
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
  // 一个toString例子
  //      8
  //    ↙   ↘
  //   2     11
  //  ↙ ↘      ↘
  // 0   3      12
  //      ↘       ↘
  //       4       21
  //        ↘     ↙
  //         7  15
  toString() {
    if (!this.root) return "null tree";
    const dfs = (node) => {
      if (!node.left && !node.right) return node.value.toString();
      const resStrArr = [node.value.toString()];
      // 左箭头位置
      let leftArrowIdx = 0;
      // 右箭头位置
      let rightArrowIdx = 0;
      // 左结果字符串数组
      let leftStrArr = [];
      // 右结果字符串数组
      let rightStrArr = [];
      // 处理左节点
      if (node.left) {
        let leftArrow = "↙";
        const left = dfs(node.left);
        leftStrArr = left.split("\n");
        const head = leftStrArr[0];
        const n = head.length;
        for (let i = 0; i < n; i++) {
          if (head[i] === " ") continue;
          else {
            while (head[i] !== " " && i < n) i++;
            leftArrowIdx = i;
            leftArrow = " ".repeat(i) + leftArrow;
            break;
          }
        }
        if (n > leftArrow.length) leftArrow += " ".repeat(n - leftArrow.length);
        else
          leftStrArr.forEach(
            (ele, i) => (leftStrArr[i] = ele + " ".repeat(leftArrow.length - n))
          );
        leftStrArr.unshift(leftArrow);
      }
      // 无右节点
      if (!node.right) {
        resStrArr.push(...leftStrArr);
        resStrArr[0] = " ".repeat(leftArrowIdx + 1) + resStrArr[0];
        const diff = resStrArr[0].length - resStrArr[1].length;
        if (diff > 0) {
          for (let i = 1; i < resStrArr.length; i++)
            resStrArr[i] += " ".repeat(diff);
        } else if (diff < 0) resStrArr[0] += " ".repeat(-diff);
        return resStrArr.join("\n");
      }
      if (node.right) {
        const right = dfs(node.right);
        rightStrArr = right.split("\n");
        const head = rightStrArr[0];
        const n = head.length;
        let rightArrow = "↘";
        for (let i = 0; i < n; i++) {
          if (head[i] === " ") continue;
          else if (i === 0) {
            // 特殊情况
            rightArrow += " ".repeat(n);
            rightStrArr.forEach((v, i) => (rightStrArr[i] = " " + v));
          } else {
            rightArrow = " ".repeat(i - 1) + rightArrow + " ".repeat(n - i);
            rightArrowIdx = i - 1;
          }
        }
        rightStrArr.unshift(rightArrow);
        if (node.left) {
          // 有左节点
          const leftLen = leftStrArr[0].length;
          const rightLen = rightStrArr[0].length;
          const diff = leftStrArr.length - rightStrArr.length;
          const commonLen = Math.max(leftStrArr.length, rightStrArr.length);
          if (diff > 0)
            rightStrArr.push(...new Array(diff).fill(" ".repeat(rightLen)));
          else if (diff < 0)
            leftStrArr.push(...new Array(-diff).fill(" ".repeat(leftLen)));
          const spacing = rightArrowIdx + leftLen - leftArrowIdx - 1;
          const minDistance = getArrDistance(leftStrArr, rightStrArr);
          const diffspacing = resStrArr[0].length - spacing;
          if (diffspacing > 0) {
            // 间距太小，需要扩大
            resStrArr[0] =
              " ".repeat(leftArrowIdx + 1) +
              resStrArr[0] +
              " ".repeat(rightLen - rightArrowIdx);
            for (let i = 0; i < commonLen; i++) {
              resStrArr.push(
                leftStrArr[i] + " ".repeat(diffspacing) + rightStrArr[i]
              );
            }
            return resStrArr.join("\n");
          } else if (diffspacing === 0) {
            if (minDistance === 0) {
              // 需要间距两格
              resStrArr[0] =
                " ".repeat(leftArrowIdx + 1) +
                " " +
                resStrArr[0] +
                " " +
                " ".repeat(rightLen - rightArrowIdx);
              for (let i = 0; i < commonLen; i++) {
                resStrArr.push(leftStrArr[i] + " ".repeat(2) + rightStrArr[i]);
              }
            } else {
              // 直接拼接
              resStrArr[0] =
                " ".repeat(leftArrowIdx + 1) +
                resStrArr[0] +
                " ".repeat(rightLen - rightArrowIdx);
              for (let i = 0; i < commonLen; i++) {
                resStrArr.push(leftStrArr[i] + rightStrArr[i]);
              }
            }
          } else {
            if (minDistance === 0) {
              // 需要间距两格
              resStrArr[0] =
                " ".repeat(leftArrowIdx + 1) +
                " " +
                resStrArr[0] +
                " " +
                " ".repeat(rightLen - rightArrowIdx);
              for (let i = 0; i < commonLen; i++) {
                resStrArr.push(leftStrArr[i] + " ".repeat(2) + rightStrArr[i]);
              }
            } else {
              // 可以缩小，但是直接拼接
              let leftAddLen = Math.floor(-diffspacing / 2);
              let rightAddLen = Math.floor(-diffspacing / 2);
              -diffspacing % 2 === 1 ? leftAddLen++ : null;
              resStrArr[0] =
                " ".repeat(leftArrowIdx + 1 + leftAddLen) +
                resStrArr[0] +
                " ".repeat(rightLen - rightArrowIdx + rightAddLen);
              for (let i = 0; i < commonLen; i++) {
                resStrArr.push(leftStrArr[i] + rightStrArr[i]);
              }
            }
          }
          return resStrArr.join("\n");
        } else {
          // 无左节点
          const diff = resStrArr[0].length - rightArrowIdx;
          resStrArr[0] += " ".repeat(n - rightArrowIdx);
          if (diff > 0) {
            rightArrowIdx += diff;
            rightStrArr.forEach(
              (v, i) => (rightStrArr[i] = " ".repeat(diff) + v)
            );
          } else if (diff < 0) resStrArr[0] = " ".repeat(-diff) + resStrArr[0];
          resStrArr.push(...rightStrArr);
          return resStrArr.join("\n");
        }
      }
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
    return dfs(this.root);
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

function toString() {
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
      leftStrArr = left.split("\n").split("");
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
      rightStrArr = right.split("\n").split("");
      const head = rightStrArr[0];
      rightLen = head.length;
      // 获取首行节点值开始的位置
      rightArrowIdx = getFirstNonBlankIndex(head.join(""));
      const rightArrowArr = new Array(leftLen).fill(" ");
      if (rightArrowIdx === 0) {
        // 节点值在最前，需要增加宽度
        leftStrArr.forEach((ele) => ele.unshift(" "));
        leftLen++;
        rightArrowArr.unshift(rightArrow);
      } else rightArrowArr[rightArrowIdx] = rightArrow;
      rightStrArr.unshift(rightArrow);
    }
    // 只有左节点的情况
    if (node.left && !node.right) {
      const firstRow = new Array(leftArrowIdx + 1).fill(" ");
      const firstLen = firstRow.push(...nodeValueStrArr);
      const diffLen = firstLen - leftLen;
      if (diffLen > 0) {
        // 首行很长，其它行需要增加宽度
        leftStrArr.forEach((ele) => ele.push(...new Array(diffLen).fill(" ")));
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
      const diffLen = firstLen - leftLen;
      if (diffLen > 0) {
        // 首行很长，其它行需要增加宽度
        leftStrArr.forEach((ele) =>
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
      const commonLen = Math.max(leftStrArr.length, rightStrArr.length);
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
      const spacingDiff = spacing - nodeValueLen;
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
            addLen,
            nVAddLen
          );
        } else {
          // spacingDiff小于0，一定要增加空白宽度
          return jointStrArrWithBlank(
            leftStrArr,
            rightStrArr,
            nodeValueStrArr,
            -spacingDiff // 子树增加宽度，节点值增加宽度为0
          );
        }
      } else {
        // minDistance大于1，最多可以收缩minDistance - 1个空格
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
  const jointStrArrWithBlank = (
    leftStrArr,
    rightStrArr,
    nodeValueStrArr,
    addLen = 0,
    nVAddLen = 0
  ) => {
    nodeValueStrArr.unshift(
      // 左边空白
      ...new Array(leftArrowIdx + 1 + nVAddLen).fill(" ")
    );
    nodeValueStrArr.push(
      // 右边空白
      ...new Array(rightLen - rightArrowIdx + nVAddLen).fill(" ")
    );
    // 拼接leftStrArr和rightStrArr
    leftStrArr.foreEach((v, i) => {
      v.push(...new Array(addLen).fill(" "));
      v.push(...rightStrArr[i]);
    });
    leftStrArr.unshift(nodeValueStrArr);
    return leftStrArr.map((v) => v.join("")).join("\n");
  };
  return dfs(this.root);
}
