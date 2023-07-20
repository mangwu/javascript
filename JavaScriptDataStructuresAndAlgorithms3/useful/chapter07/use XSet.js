/*
 * @Author: mangwu                                                             *
 * @File: use XSet.js                                                          *
 * @Date: 2023-07-20 15:25:53                                                  *
 * @LastModifiedDate: 2023-07-20 17:30:14                                      *
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
