/*
 * @Author: mangwu                                                             *
 * @File: 10.16.3 Static Private Variables.js                                  *
 * @Date: 2022-10-12 22:18:15                                                  *
 * @LastModifiedDate: 2022-10-12 22:27:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

(function () {
  let name = "";
  const hash = new WeakMap();
  let idx = 0;
  Person = function (value) {
    name = value;
    hash.set(this, idx++);
  };
  Person.prototype.getName = function () {
    return name;
  };
  Person.prototype.setName = function (value) {
    name = value;
  };
  Person.prototype.getId = function () {
    return hash.get(this);
  };
})();

const person1 = new Person("mangwu");
console.log(person1.getName());
person1.setName("mangmang")
console.log(person1.getName());
console.log(person1.getId());

const person2 = new Person("wumang");
console.log(person2.getId());
console.log(person1.getName());


