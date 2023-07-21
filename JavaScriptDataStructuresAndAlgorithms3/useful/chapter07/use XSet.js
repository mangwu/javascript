/*
 * @Author: mangwu                                                             *
 * @File: use XSet.js                                                          *
 * @Date: 2023-07-20 15:25:53                                                  *
 * @LastModifiedDate: 2023-07-21 09:59:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const XSet = require("./XSet.js");

const xSet1 = new XSet([1, 2, 3, 5, 7, 8]);
const xSet2 = new XSet([1, 3, 4, 6, 7, 9, 10]);
console.log("xSet1:", xSet1, "xSet2:", xSet2);
console.log("________调用union，合并两个集合，得到一个并集_______");
console.log(xSet1.union(xSet2));
console.log("xSet1:", xSet1, "xSet2:", xSet2);
console.log("________调用unite，将传入集合合入当前集合_______");
console.log(xSet1.unite(xSet2));
console.log("xSet1:", xSet1, "xSet2:", xSet2);
console.log("________调用intersection，返回集合交集_______");
console.log(xSet1.intersection(xSet2));
console.log("xSet1:", xSet1, "xSet2:", xSet2);
console.log("________调用difference，返回集合差集_______");
console.log(xSet1.difference(xSet2));
console.log("xSet1:", xSet1, "xSet2:", xSet2);
console.log("________调用subtraction，返回当前减去其它集合元素后的集合_______");
console.log(xSet1.subtraction(xSet2));
console.log("xSet1:", xSet1, "xSet2:", xSet2);
console.log(
  "________调用isSubsetOf，判断当前集合是否是传入的集合的子集_______"
);
const xSet3 = new XSet([1, 9, 10]);
console.log(
  "xSet1 is sub set of xSet2:",
  xSet1.isSubsetOf(xSet2),
  ", xSet3 is sub set of xSet2:",
  xSet3.isSubsetOf(xSet2)
);
console.log("xSet1:", xSet1, "xSet2:", xSet2, "xSet3:", xSet3);
console.log(
  "________调用hasSubsetOf，判断传入的集合是否是当前集合的子集_______"
);
console.log(
  "xSet2 has sub set of xSet1:",
  xSet2.hasSubsetOf(xSet1),
  ", xSet2 has sub set of xSet3:",
  xSet2.hasSubsetOf(xSet3)
);
console.log("xSet1:", xSet1, "xSet2:", xSet2, "xSet3:", xSet3);
