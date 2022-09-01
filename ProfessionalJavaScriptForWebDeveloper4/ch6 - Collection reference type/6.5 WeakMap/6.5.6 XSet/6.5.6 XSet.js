/*
 * @Author: mangwu                                                             *
 * @File: 6.5.6 XSet.js                                                        *
 * @Date: 2022-09-01 11:21:19                                                  *
 * @LastModifiedDate: 2022-09-01 15:24:26                                      *
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
}
