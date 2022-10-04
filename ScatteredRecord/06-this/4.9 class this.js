/*
 * @Author: mangwu                                                             *
 * @File: 4.9 class this.js                                                    *
 * @Date: 2022-10-05 00:25:33                                                  *
 * @LastModifiedDate: 2022-10-05 02:35:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 类中的this

// 普通方法的this由调用值决定
globalThis.prop = "global";
const a = function () {
  console.log(this.prop);
};
const obj = { prop: "obj" };
// bind会设置boundA的this永久固定
const boundA = a.bind(obj);
boundA(); // obj
const newObj = { boundA, prop: "newObj" };
// 即使使用其他对象调用，this也是obj
newObj.boundA(); // obj

// 在类中应用bind
class Car {
  constructor() {
    // Bind sayBye but not sayHi to show the difference
    this.sayBye = this.sayBye.bind(this);
  }
  sayHi() {
    console.log(`Hello from ${this.name}`);
  }
  sayBye() {
    console.log(`Bye from ${this.name}`);
  }
  get name() {
    return "Ferrari";
  }
}

class Bird {
  get name() {
    return "Tweety";
  }
}

const car = new Car();
const bird = new Bird();

// 实例方法的this取决于调用它的对象
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// 对于绑定了类实例的方法，this不再取决于调用它的对象
bird.sayBye = car.sayBye;
bird.sayBye(); // Bye from Ferrari
