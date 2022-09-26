/*
 * @Author: mangwu                                                             *
 * @File: 9.1.9.1 this.js                                                      *
 * @Date: 2022-09-26 23:03:56                                                  *
 * @LastModifiedDate: 2022-09-26 23:44:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 代理中的this

const target = {
  thisValEqualProxy() {
    return this === proxy;
  },
};
const proxy = new Proxy(target, {});
console.log(target.thisValEqualProxy()); // false
console.log(proxy.thisValEqualProxy()); // true

// this值产生的问题
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

const proxyPerson = new Proxy(person, {});
try {
  console.log(proxyPerson.getIDNum()); // 因为this指向proxy本身，所以不存在id
} catch (error) {
  // 报错原因是privateScope.get(this)的结果是undefined，再访问其中的id必然出错
  console.log(error.toString());
}
proxyPerson.setIDNum("321421yyyymmdd1234"); // 因为this指向proxy本身相当于重写添加了一个新id
console.log(proxyPerson.getIDNum()); // 这个id是proxy又再wm中作为键新建的id
console.log(person.getIDNum()); // 实例本身的id其实并没有改变

// 解决方法，直接代理构造函数
const PersonProxy = new Proxy(Person, {});
const proxyPerson2 = new PersonProxy("mangwu", "321421yyyymmdd1234");
console.log(proxyPerson2);
console.log(proxyPerson2.getIDNum());

