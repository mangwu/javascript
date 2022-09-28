/*
 * @Author: mangwu                                                             *
 * @File: 9.3.5 data binding and obersvables.js                                *
 * @Date: 2022-09-28 17:04:59                                                  *
 * @LastModifiedDate: 2022-09-28 17:25:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const userList = [];
class User {
  constructor(name) {
    this.name = name;
  }
}
var proxy2 = new Proxy(userList, {
  set(target, property, newValue, receiver) {
    const res = Reflect.set(...arguments);
    if (res && property !== "length") {
      // 判断是否插入成功
      emit(Reflect.get(target, property));
    }
    return res;
  },
});
function emit(newValue) {
  console.log(`create a new User named ${newValue.name}`);
}

const proxy = new Proxy(User, {
  construct() {
    const newUser = Reflect.construct(...arguments);
    proxy2.push(newUser);
    return newUser;
  },
});
new proxy("mang");
new proxy("wu");
new proxy("mangwu");

console.log(userList);
