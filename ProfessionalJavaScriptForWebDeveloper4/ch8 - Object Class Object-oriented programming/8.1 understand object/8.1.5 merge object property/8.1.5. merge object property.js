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

// 源对象十种不同属性
const source_data_1 = {};
Object.defineProperties(source_data_1, {
  s_data_1: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "sd1",
  },
});
const source_data_2 = {};
Object.defineProperties(source_data_2, {
  s_data_2: {
    configurable: true,
    enumerable: true,
    writable: false,
    value: "sd2",
  },
});
const source_data_3 = {};
Object.defineProperties(source_data_3, {
  s_data_3: {
    configurable: false,
    enumerable: true,
    writable: true,
    value: "sd3",
  },
});
const source_data_4 = {};
Object.defineProperties(source_data_4, {
  s_data_4: {
    configurable: false,
    enumerable: true,
    writable: false,
    value: "sd4",
  },
});

const source_accesor_1 = {};
Object.defineProperties(source_accesor_1, {
  s_data_v: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "sa1",
  },
  s_accesor_1: {
    configurable: true,
    enumerable: true,
    set(val) {
      this.s_data_v = val;
    },
    get() {
      return this.s_data_v;
    },
  },
});
const source_accesor_2 = {};
Object.defineProperties(source_accesor_2, {
  s_data_v: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "sa2",
  },
  s_accesor_2: {
    configurable: true,
    enumerable: true,
    set(val) {
      this.s_data_v = val;
    },
  },
});
const source_accesor_3 = {};
Object.defineProperties(source_accesor_3, {
  s_data_v: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "sa3",
  },
  s_accesor_3: {
    configurable: true,
    enumerable: true,
    get() {
      return this.s_data_v;
    },
  },
});
const source_accesor_4 = {};
Object.defineProperties(source_accesor_1, {
  s_data_v: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "sa1",
  },
  s_accesor_1: {
    configurable: true,
    enumerable: true,
    set(val) {
      this.s_data_v = val;
    },
    get() {
      return this.s_data_v;
    },
  },
});
const source_accesor_5 = {};
Object.defineProperties(source_accesor_2, {
  s_data_v: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "sa2",
  },
  s_accesor_2: {
    configurable: true,
    enumerable: true,
    set(val) {
      this.s_data_v = val;
    },
  },
});
const source_accesor_6 = {};
Object.defineProperties(source_accesor_3, {
  s_data_v: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "sa3",
  },
  s_accesor_3: {
    configurable: true,
    enumerable: true,
    get() {
      return this.s_data_v;
    },
  },
});
// s_data_2: {
//   configurable: true,
//   enumerable: true,
//   writable: false,
//   value: "s2",
// },
// accessor_1_val: {
//   configurable: true,
//   enumerable: true,
//   writable: true,
//   value: "s_accessor_1",
// },
// s_accessor_1: {
//   configurable: true,
//   enumerable: true,
//   set(val) {
//     this.accessor_1_val = val;
//   },
//   get() {
//     return this.accessor_1_val;
//   },
// },
// accessor_2_val: {
//   configurable: true,
//   enumerable: true,
//   writable: true,
//   value: "s_accessor_2",
// },
// s_accessor_2: {
//   configurable: true,
//   enumerable: true,
//   get() {
//     return this.accessor_1_val;
//   },
// },
// accessor_3_val: {
//   configurable: true,
//   enumerable: true,
//   writable: true,
//   value: "s_accessor_3",
// },
// s_accessor_3: {
//   configurable: true,
//   enumerable: true,
//   set(val) {
//     this.accessor_1_val = val;
//   },
// },
