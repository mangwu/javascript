/*
 * @Author: mangwu                                                             *
 * @File: 02-memory-management.js                                              *
 * @Date: 2022-06-21 17:23:16                                                  *
 * @LastModifiedDate: 2022-06-21 17:32:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 内存管理
// 全局变量和全局对象的属性如果是不必要的应该解除引用，方法是设置为null

let globalPerson = { name: "mangwu", age: 22 };

function printPerson(person) {
  let localName = person.name;
  let localAge = person.age;
  console.log(`${localName} is ${localAge} years old`);
}
printPerson(globalPerson);
globalPerson = null; // 解除引用
