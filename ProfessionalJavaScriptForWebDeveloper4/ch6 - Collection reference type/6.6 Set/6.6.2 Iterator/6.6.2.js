/*
 * @Author: mangwu                                                             *
 * @File: 6.6.2.js                                                             *
 * @Date: 2022-09-01 00:18:23                                                  *
 * @LastModifiedDate: 2022-09-01 00:22:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 迭代
// 顺序为插入顺序
const set = new Set().add(0).add(1).add(2);
// 使用keys()一样
for (const val of set.values()) {
  console.log(val);
}
// 删除后添加会更新顺序
set.delete(1);
set.add(1);
for (const [val, subval] of set.entries()) {
  console.log(val, subval); // 相同的值
}
// 使用回调的迭代方法
set.forEach((val, subval, _set) => {
  console.log(val, subval);
});
