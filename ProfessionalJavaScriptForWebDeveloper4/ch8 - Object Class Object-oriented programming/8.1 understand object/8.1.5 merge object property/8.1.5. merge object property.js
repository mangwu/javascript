/**
 * @description  8.1.5. merge object property.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-09-09 10:41:12
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 合并属性
const target = {
  logs: [1, 2, 3],
  get current() {
    if (this.logs.length) {
      return this.logs[this.logs.length - 1];
    }
    return undefined;
  },
  /**
   * @description setter current
   * @param {number} val
   */
  set current(val) {
    this.logs.push(val);
  },
};
// Object.defineProperty(target, "test", {
//   value: 1,
//   configurable: true,
//   writable: false,
//   enumerable: true,
// });
const source1 = {};
Object.defineProperties(source1, {
  current: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 5,
  },
  first: {
    configurable: false,
    enumerable: true,
    set(val) {
      this.current = val;
    },
  },
  test: {
    value: 1,
    configurable: false,
    enumerable: true,
    writable: false,
  },
});
console.log(target, source1);
Object.assign(target, source1);
console.log(target);
console.log(Object.getOwnPropertyDescriptors(target));
