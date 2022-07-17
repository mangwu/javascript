/**
 * @description  6.2.2.2 .js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-07-17 21:57:08
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 迭代器方法
const arr = [1, 2, 3, , , 4];
const keysIterator = arr.keys();
console.log(Array.from(keysIterator));
console.log(keysIterator.next());
console.log(keysIterator.next());
console.log(keysIterator.next());
console.log(keysIterator.next());
console.log(keysIterator.next());
console.log(keysIterator.next());

const valuesIterator = arr.values();
console.log(Array.from(valuesIterator));
for (const item of valuesIterator) {
  console.log(item);
}

const entriesIterator = arr.entries();
console.log(entriesIterator.next());
for (const [key, val] of entriesIterator) {
  console.log(key + "-" + val);
}
