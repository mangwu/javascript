/*
 * @Author: mangwu                                                             *
 * @File: 6.4.2.1 .js                                                          *
 * @Date: 2022-08-30 23:24:49                                                  *
 * @LastModifiedDate: 2022-08-30 23:56:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 迭代顺序
const obj = {
  get() {
    return 1;
  },
  [Symbol.isConcatSpreadable]: false,
  jh: 1,
  k: 1,
  b: 2,
  12: 7,
  1: 5,
  0: 6,
  3: 2,
  toString() {
    return 1;
  },
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
  },
};
obj["new"] = "new";
obj.jh = "modify";
for (const key in obj) {
  console.log(key);
}
const map = new Map().set("a", 1).set("b", 2).set("c", 3).set("d", 4);
for (const [key, val] of map) {
  console.log(key, val);
}
map.set("c", "c3");
map.delete("b");
map.set("b", "b3");
for (const [key, val] of map) {
  console.log(key, val);
}

