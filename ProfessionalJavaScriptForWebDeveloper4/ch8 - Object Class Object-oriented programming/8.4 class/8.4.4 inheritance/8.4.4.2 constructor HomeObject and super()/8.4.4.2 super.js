/*
 * @Author: mangwu                                                             *
 * @File: 8.4.4.2 super.js                                                     *
 * @Date: 2022-09-21 14:36:47                                                  *
 * @LastModifiedDate: 2022-09-21 14:52:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class Vehicle {
  constructor() {
    this.hasEngine = true;
  }
}
Vehicle.prototype.speed = 0;

class Bus extends Vehicle {
  constructor() {
    super(); // 相当于super.constructor
    console.log(this);
  }
  static logSuper() {
    console.log(super.constructor === Vehicle.constructor);
    console.log(super.prototype === Vehicle.prototype);
  }
}
Bus.logSuper();
const bus = new Bus();
