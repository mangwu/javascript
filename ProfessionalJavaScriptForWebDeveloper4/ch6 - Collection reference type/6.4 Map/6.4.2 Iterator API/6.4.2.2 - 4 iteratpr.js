/*
 * @Author: mangwu                                                             *
 * @File: 6.4.2.2 - 4 iteratpr.js                                              *
 * @Date: 2022-08-30 23:56:59                                                  *
 * @LastModifiedDate: 2022-08-31 10:18:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 迭代器
const map = new Map().set("a", 1).set("b", 2).set("c", 3);
console.log(map.entries === map[Symbol.iterator]); // 同一个迭代生成器
for (const [key, val] of map.entries()) {
  console.log(key, val);
}
for (const [key, val] of map[Symbol.iterator]()) {
  console.log(key, val);
}
map.set("b", "newB");
for (const key of map.keys()) {
  console.log(key);
}
for (const val of map.values()) {
  console.log(val);
}
map.forEach((v, k, _m) => {
  console.log(v, k);
});

// 扩展操作符
const map2 = new Map().set("a", 1).set("b", 2).set("c", 3);
console.log([...map2]);

// 遍历修改映射
// for (const [key, val] of map2.entries()) {
//   map2.delete(key);
//   map2.set(key, val + 1);
//   console.log(map2);
//   if (val == 100) {
//     map2.clear();
//   }
// }

for (const [key, val] of [...map2]) {
  map2.delete(key);
  map2.set(key, val + 1);
  console.log(map2);
}
