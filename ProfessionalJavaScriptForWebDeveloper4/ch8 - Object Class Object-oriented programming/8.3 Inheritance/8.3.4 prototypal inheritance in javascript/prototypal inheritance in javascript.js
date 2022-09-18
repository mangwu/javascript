/**
 * @description  prototypal inheritance in javascript.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-09-18 18:43:03
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 原型式继承
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

let person = {
  name: "mangwu",
  friends: ["wumang", "mangmang", "wuwu"],
};
person.__proto__.sayFriends = function () {
  console.log(this.friends.join(","));
};

let anotherPerson = object(person);
anotherPerson.name = "mangwugo";
anotherPerson.friends.push("gomangwu");

let yetAnotherPerson = object(person);
yetAnotherPerson.name = "manggowu";
yetAnotherPerson.friends.push("wugomang");

console.log(person.friends);
anotherPerson.sayFriends();
