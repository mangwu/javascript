/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-08 11:09:43                                                  *
 * @LastModifiedDate: 2022-09-08 16:59:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const obj = {
  log: ["a", "c", "e", "e"],
  get latest() {
    if (this.log.length) {
      return this.log[this.log.length - 1];
    }
    return undefined;
  },
  set latest(value) {
    this.log.push(value);
  },
  get 1() {
    if (this.log.length) {
      return this.log[0];
    }
    return undefined;
  },
};
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(obj[1]);
console.log(obj.latest);

// 修改增加访问器属性
Object.defineProperty(obj, "length", {
  configurable: true,
  enumerable: true,
  get() {
    return this.log.length;
  },
});
console.log(obj);
console.log(obj.length);
console.log("------");
// 静态的getter
class MyConstants {
  static get UnitCircle() {
    return {
      radius: 1,
      area: Math.PI,
      perimeter: 2 * Math.PI,
    };
  }
  static get UnitTriangle() {
    return {
      side: 1,
      perimeter: 3,
      area: Math.sqrt(3) / 4,
    };
  }
}
console.log(Object.getOwnPropertyDescriptors(MyConstants));
console.log(MyConstants.UnitCircle, MyConstants.UnitTriangle);
MyConstants.UnitCircle.area = 123;
// 自我覆写
console.log("自我覆写");
const obj2 = {
  get notifier() {
    delete this.notifier;
    return (this.notifier = obj.latest);
  },
};
console.log(obj2);
console.log(obj2.notifier);
obj.latest = "kk";
console.log(obj.latest);
console.log(obj2);
console.log(obj2.notifier);
