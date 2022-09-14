/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.2.2 getPrototypeOf.js                                          *
 * @Date: 2022-09-14 10:05:31                                                  *
 * @LastModifiedDate: 2022-09-14 10:07:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function Person() {}
const person = new Person();
console.log(Object.getPrototypeOf(person) === person.__proto__);
console.log(Object.getPrototypeOf(person) === Person.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);
