/*
 * @Author: mangwu                                                             *
 * @File: 8.4.4.5 class mixin.js                                               *
 * @Date: 2022-09-22 14:21:32                                                  *
 * @LastModifiedDate: 2022-09-22 14:34:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 类混入

class Vehicle {}

let FooMin = (superclass) =>
  class extends superclass {
    foo() {
      console.log("foo");
    }
  };
let BarMin = (superclass) =>
  class extends superclass {
    bar() {
      console.log("bar");
    }
  };
let BazMin = (superclass) =>
  class extends superclass {
    baz() {
      console.log("Baz");
    }
  };

class Bus extends FooMin(BarMin(BazMin(Vehicle))) {}
const bus = new Bus();
bus.foo();
bus.bar();
bus.baz();

// 辅助函数
function mix(BaseClass, ...mixins) {
  return mixins.reduce((pre, cur) => cur(pre), BaseClass);
}

class Car extends mix(Vehicle, BazMin, BarMin, FooMin) {}
const car = new Car();
car.foo();
car.bar();
car.baz();

