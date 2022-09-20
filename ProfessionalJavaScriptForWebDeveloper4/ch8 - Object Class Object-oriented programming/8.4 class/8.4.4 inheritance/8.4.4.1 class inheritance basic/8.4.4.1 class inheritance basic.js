/*
 * @Author: mangwu                                                             *
 * @File: 8.4.4.1 class inheritance basic.js                                   *
 * @Date: 2022-09-21 00:26:14                                                  *
 * @LastModifiedDate: 2022-09-21 00:33:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 类的继承使用extends
// 其底层原理仍然是原型链

class Vehicle {
  constructor(speed) {
    // 速度 km/h
    this.speed = speed;
  }
  saySpeed() {
    console.log(this.speed);
  }
}

class Bus extends Vehicle {
  constructor(speed, fuel) {
    super(speed);
    // 耗油 l/km
    this.fuel = fuel;
  }
  makeSound() {
    console.log("呜呜呜，呜呜呜");
  }
}
const vehicle = new Vehicle(0);
const bus = new Bus(40, 0.1);
bus.saySpeed();
bus.makeSound();
console.log(bus instanceof Bus);
console.log(bus instanceof Vehicle);
