/*
 * @Author: mangwu                                                             *
 * @File: 8.1.8.3 obm.js                                                       *
 * @Date: 2022-09-12 22:20:24                                                  *
 * @LastModifiedDate: 2022-09-12 22:25:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 部分赋值
const person = {
  age: 22,
  name: "mangwu",
};
let age, foo, name;
try {
  ({
    age: age,
    foo: { foo: foo },
    name: name,
  } = person);
} catch (error) {
  console.log(error.message);
}
console.log(age, foo, name);
