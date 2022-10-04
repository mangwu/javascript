/*
 * @Author: mangwu                                                             *
 * @File: 3.3 class context.js                                                 *
 * @Date: 2022-10-02 20:40:57                                                  *
 * @LastModifiedDate: 2022-10-02 21:22:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class Person {
  constructor() {
    // this就是一个新创建的对象
    console.log(this);
  }
  sayHello() {
    console.log(this);
    console.log(this === Person.prototype);
    console.log(this === person);

    console.log("Hello");
  }
  static breathe() {
    console.log(this);
    console.log(this === Person);
  }
}
const person = new Person();

Person.breathe();
Person.prototype.sayHello();

person.sayHello();

class Base {}

class Good extends Base {} // 不使用构造函数

class AlsoGood extends Base {
  constructor() {
    return { a: 1 }; // 使用构造函数并返回对象
  }
}

class Bad extends Base {
  constructor() {} // 使用构造函数如果不返回对象必须使用super()
}
new Good();
new AlsoGood();
try {
  new Bad(); // ReferenceError
} catch (error) {
  console.log(error.toString());
}
