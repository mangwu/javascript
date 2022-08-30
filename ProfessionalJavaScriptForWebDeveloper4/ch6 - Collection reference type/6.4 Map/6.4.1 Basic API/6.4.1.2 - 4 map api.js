/*
 * @Author: mangwu                                                             *
 * @File: 6.4.1.2 - 4 map api.js                                               *
 * @Date: 2022-08-30 16:11:51                                                  *
 * @LastModifiedDate: 2022-08-30 17:23:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设置值 set
const map = new Map();
console.log(map.set(+0, 3)); // 新增
console.log(map.set(-0, -3)); // 修改
console.log(map.set(NaN, "NaN")); // 新增
console.log(map.set(NaN, "nan")); // 修改

// 判断键 has
console.log(map.has(0n));
console.log(map.has(NaN));

// 获取键 get
const map2 = new Map([["key"], ["key1", "value1"], []]);
console.log(map2);
console.log(map2.get("key"));
console.log(map2.get("key1"));
console.log(map2.get("k"));
console.log(map2.get());
console.log(map2.has());

// 删除单个
console.log(map2.delete());
console.log(map2);
// 删除全部
map2.clear();
console.log(map2);

// set技巧
const map3 = new Map().set(1, 2).set(3, 4);
console.log(map3);
map3.set(5, 6).set(7, 8).set(9, 10);
console.log(map3);

// 可以使用任意类型的键值对
console.log(
  new Map()
    .set(Symbol.iterator, function* () {
      yield 1;
      yield 2;
    })
    .set(function getName() {
      return "mangwu";
    }, "functionValue")
    .set(new Set([1, 2]), new Date())
);

// 改变对象或值
const date = new Date();
const arr = [1, 2];
const map4 = new Map().set(date, arr);
console.log(map4);
date.setTime(Date.parse("2022-08-30 12:00:22.456 GMT+0800"))
arr.push(3)
console.log(map4.get(date));

