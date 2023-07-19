/*
 * @Author: mangwu                                                             *
 * @File: use Set.js                                                           *
 * @Date: 2023-07-19 17:13:32                                                  *
 * @LastModifiedDate: 2023-07-19 17:33:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const MySet = require("./Set.js");

const set = new MySet();
set.add(65).add("asuch").add(8451).add("mangwu");
set.add("ashcgas").add("asc").add([1, 2, 3]).add([1, 2, 3]).add(false).add("65")
console.log(set.has(65));
console.log(set.size());
console.log(set.delete(65));
for (const item of set) {
  console.log(item);
}
const set2 = new Set();
set2.add([1, 2, 3]).add([1, 2, 3]);
console.log(set2);
