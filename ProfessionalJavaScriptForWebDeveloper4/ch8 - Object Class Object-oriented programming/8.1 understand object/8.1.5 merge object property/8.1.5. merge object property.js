/**
 * @description  8.1.5. merge object property.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-09-09 10:41:12
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
// "use strict";
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
const getObj = (idx) => {
  switch (idx) {
    case 0:
      const source_data_1 = {};
      Object.defineProperties(source_data_1, {
        same_property: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: "sd1",
        },
      });
      return source_data_1;
    case 1:
      const source_data_2 = {};
      Object.defineProperties(source_data_2, {
        same_property: {
          configurable: true,
          enumerable: true,
          writable: false,
          value: "sd2",
        },
      });
      return source_data_2;
    case 5:
      const source_data_3 = {};
      Object.defineProperties(source_data_3, {
        same_property: {
          configurable: false,
          enumerable: true,
          writable: true,
          value: "sd3",
        },
      });
      return source_data_3;
    case 6:
      const source_data_4 = {};
      Object.defineProperties(source_data_4, {
        same_property: {
          configurable: false,
          enumerable: true,
          writable: false,
          value: "sd4",
        },
      });
      return source_data_4;

    case 2:
      const source_accesor_1 = {};
      Object.defineProperties(source_accesor_1, {
        s_data_v1: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: "sa1",
        },
        same_property: {
          configurable: true,
          enumerable: true,
          set(val) {
            this.s_data_v1 = val;
          },
          get() {
            return this.s_data_v1;
          },
        },
      });
      return source_accesor_1;
    case 3:
      const source_accesor_2 = {};
      Object.defineProperties(source_accesor_2, {
        s_data_v2: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: "sa2",
        },
        same_property: {
          configurable: true,
          enumerable: true,
          set(val) {
            this.s_data_v2 = val;
          },
        },
      });
      return source_accesor_2;
    case 4:
      const source_accesor_3 = {};
      Object.defineProperties(source_accesor_3, {
        s_data_v3: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: "sa3",
        },
        same_property: {
          configurable: true,
          enumerable: true,
          get() {
            return this.s_data_v3;
          },
        },
      });
      return source_accesor_3;
    case 7:
      const source_accesor_4 = {};
      Object.defineProperties(source_accesor_4, {
        s_data_v4: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: "sa4",
        },
        same_property: {
          configurable: false,
          enumerable: true,
          set(val) {
            this.s_data_v4 = val;
          },
          get() {
            return this.s_data_v4;
          },
        },
      });
      return source_accesor_4;
    case 8:
      const source_accesor_5 = {};
      Object.defineProperties(source_accesor_5, {
        s_data_v5: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: "sa5",
        },
        same_property: {
          configurable: false,
          enumerable: true,
          set(val) {
            this.s_data_v5 = val;
          },
        },
      });
      return source_accesor_5;
    case 9:
      const source_accesor_6 = {};
      Object.defineProperties(source_accesor_6, {
        s_data_v6: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: "sa6",
        },
        same_property: {
          configurable: false,
          enumerable: true,
          get() {
            return this.s_data_v6;
          },
        },
      });
      return source_accesor_6;
    default:
      return {};
  }
};
// 源对象十种不同属性

console.log("目标对象：空对象，源对象：十种不同属性特性的对象");
for (let i = 0; i < 10; i++) {
  console.log(Object.getOwnPropertyDescriptors(Object.assign({}, getObj(i))));
}
console.log("100次循环");
for (let i = 0; i < 10; i++) {
  console.log(`${i}----------目标对象：`, getObj(i), "-------------");
  for (let j = 0; j < 10; j++) {
    try {
      console.log(
        Object.getOwnPropertyDescriptors(Object.assign(getObj(i), getObj(j)))
      );
    } catch (error) {
      console.log(error.message);
    }
  }
}

const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

console.log(Object.assign({}, v1, null, v2, undefined, v3, v4));
console.log(Object.assign("456", null, v2, undefined, v3, v4));
