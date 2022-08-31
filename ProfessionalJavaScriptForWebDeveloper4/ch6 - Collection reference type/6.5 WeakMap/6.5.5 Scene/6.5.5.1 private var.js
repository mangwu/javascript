/*
 * @Author: mangwu                                                             *
 * @File: 6.5.5.1 private var.js                                               *
 * @Date: 2022-08-31 15:44:49                                                  *
 * @LastModifiedDate: 2022-08-31 17:49:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 私有变量
const User = (() => {
  const wm = new WeakMap();
  class User {
    constructor(id) {
      this.idProperty = Symbol("id");
      this.setId(id);
    }
    setPrivate(property, value) {
      const privateMembers = wm.get(this) || {};
      privateMembers[property] = value;
      wm.set(this, privateMembers);
    }
    getPrivate(property) {
      return wm.get(this)[property];
    }
    setId(value) {
      this.setPrivate(this.idProperty, value);
    }
    getId() {
      return this.getPrivate(this.idProperty);
    }
  }
  return User;
})();
const user = new User(123);
console.log(user.getId());
user.setId(456);
console.log(user.getId());
console.log(user);

let Person;
{
  const privateScope = new WeakMap();
  Person = function (name, id) {
    this.name = name;
    this.setIDNum(id);
  };
  Person.prototype.getIDNum = function () {
    return privateScope.get(this)["id"];
  };
  Person.prototype.setIDNum = function (val) {
    const privateMembers = privateScope.get(this) || {};
    privateMembers["id"] = val;
    privateScope.set(this, privateMembers);
  };
}
console.log(typeof privateScope);

const person = new Person("mangwu", "421023yyyymmdd1234");
console.log(person);
// 公共属性可以直接句点调用修改
person.name = "wumang";
person.setIDNum("421023yyyymmdd4567");
console.log(person.getIDNum());
