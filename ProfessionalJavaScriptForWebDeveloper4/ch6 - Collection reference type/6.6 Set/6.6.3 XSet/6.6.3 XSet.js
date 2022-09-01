/*
 * @Author: mangwu                                                             *
 * @File: 6.5.6 XSet.js                                                        *
 * @Date: 2022-09-01 11:21:19                                                  *
 * @LastModifiedDate: 2022-09-01 20:17:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 实现一个XSet集合，就有Set所有特性，且能合并，求差，求幂集等

class XSet extends Set {
  static union(xseta, ...xsets) {
    const ans = new XSet(xseta);
    for (const xset of xsets) {
      for (const val of xset) {
        ans.add(val);
      }
    }
    return ans;
  }
  union(...xsets) {
    return XSet.union(this, ...xsets);
  }
  static intersection(xseta, ...xsets) {
    const ans = new XSet(xseta);
    for (const val of ans) {
      for (const xset of xsets) {
        if (!xset.has(val)) {
          ans.delete(val);
          break;
        }
      }
    }
    return ans;
  }
  intersection(...xsets) {
    return XSet.intersection(this, ...xsets);
  }
  static difference(xseta, ...xsets) {
    const ans = new XSet(xseta);
    for (const val of ans) {
      for (const xset of xsets) {
        if (xset.has(val)) {
          ans.delete(val);
          break;
        }
      }
    }
    return ans;
  }
  difference(...xsets) {
    return XSet.difference(this, ...xsets);
  }
  static symmetricDifference(seta, setb) {
    return seta.union(setb).difference(seta.intersection(setb));
  }
  symmetricDifference(setb) {
    return XSet.symmetricDifference(this, setb);
  }
  static cartesianProduct(seta, setb) {
    const cb = [];
    for (const vala of seta) {
      for (const valb of setb) {
        cb.push([vala, valb]);
      }
    }
    return cb;
  }
  cartesianProduct(setb) {
    return XSet.cartesianProduct(this, setb);
  }
  static powerSet(set) {
    // 初始保存空集
    const powerSet = new XSet().add(new XSet());
    for (const addVal of set) {
      for (const addSet of new XSet(powerSet)) {
        powerSet.add(new XSet(addSet).add(addVal));
      }
    }
    return powerSet;
  }
  powerSet() {
    return XSet.powerSet(this);
  }
}

const xseta = new XSet([1, 3, 5, 7]);
const xsetb = new XSet([3, 4, 7]);
console.log(xseta.union(xsetb)); // 并集
console.log(xseta.intersection(xsetb)); // 交集
console.log(xseta.difference(xsetb)); // 差集
console.log(xseta.symmetricDifference(xsetb)); // 对称差集
console.log(xseta.cartesianProduct(xsetb)); // 笛卡尔积
console.log(xseta.powerSet()); // 幂集
