/*
 * @Author: mangwu                                                             *
 * @File: XSet.js                                                              *
 * @Date: 2023-07-20 15:03:44                                                  *
 * @LastModifiedDate: 2023-07-21 09:52:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @description 将集合b合入到a中
 * @param {XSet} a
 * @param {XSet} b
 */
function unionTwo(a, b) {
  b.forEach((element) => {
    a.add(element);
  });
}

class XSet extends Set {
  /**
   * @description 多个集合的并集，返回一个新集合
   * @param  {XSet[]} args
   * @returns {XSet}
   */
  union(...args) {
    const newXSet = new XSet(this);
    for (const arg of args) unionTwo(newXSet, arg);
    return newXSet;
  }
  /**
   * @description 多个集合合并到当前集合，返回当前集合
   * @param  {XSet[]} args
   * @returns {XSet}
   */
  unite(...args) {
    for (const arg of args) unionTwo(this, arg);
    return this;
  }
  /**
   * @description 多个集合的交集，返回一个新的交集集合
   * @param  {XSet[]} args
   * @returns {XSet}
   */
  intersection(...args) {
    const newXSet = new XSet(this);
    for (const arg of args) {
      for (const ele of newXSet.values()) {
        if (!arg.has(ele)) newXSet.delete(ele);
      }
    }
    return newXSet;
  }
  /**
   * @description 当前集合与其它集合的差集，返回一个新的差集集合
   * @param  {...any} args
   * @returns {XSet}
   */
  difference(...args) {
    const newXSet = new XSet(this);
    for (const arg of args) {
      for (const ele of newXSet.values()) {
        if (arg.has(ele)) newXSet.delete(ele);
      }
    }
    return newXSet;
  }
  /**
   * @description 当前集合减去与其它集合相同的元素，返回当前集合
   * @param  {...any} args
   * @returns {XSet}
   */
  subtraction(...args) {
    for (const arg of args) {
      for (const ele of [...this]) {
        if (arg.has(ele)) this.delete(ele);
      }
    }
    return this;
  }
  /**
   * @description 当前集合是否是传入集合的子集
   * @param {XSet} xSet
   * @returns {boolean}
   */
  isSubsetOf(xSet) {
    return [...this].every((v) => xSet.has(v));
  }
  /**
   * @description 传入的集合是否是当前集合的子集
   * @param {XSet} xSet
   * @returns {boolean}
   */
  hasSubsetOf(xSet) {
    return [...xSet].every((v) => this.has(v));
  }
}

module.exports = XSet;
