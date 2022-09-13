/**
 * @description  8.2.2. Factory Pattern.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-09-13 15:35:29
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

function Person(age, name, job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayHello = function () {
    console.log(`Hello, I'm ${this.name}`);
  };
  return o;
}
const p = Person(23, "mangwu", "software engineer");
console.log(p);
p.sayHello();
