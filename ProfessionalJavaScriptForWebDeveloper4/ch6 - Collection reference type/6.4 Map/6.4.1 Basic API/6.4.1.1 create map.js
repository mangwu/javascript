/**
 * @description  6.4.1.1 create map.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-08-30 15:23:07
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 创建新映射
const m0 = new Map();
const m1 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
const m2 = new Map({
  [Symbol.iterator]: function* () {
    yield ["k1", "v1"];
    yield ["k2", "v2"];
    yield ["k3", "v3"];
  },
});
console.log(m0);
console.log(m1);
console.log(m2);

const m3 = new Map([
  ["key1", "value1", 2],
  ["key2", "value2", 1],
]);
console.log(m3);

const m4 = new Map([["key1"], ["key2"]]);
console.log(m4);

const m5 = new Map([[,], []]);
console.log(m5);

