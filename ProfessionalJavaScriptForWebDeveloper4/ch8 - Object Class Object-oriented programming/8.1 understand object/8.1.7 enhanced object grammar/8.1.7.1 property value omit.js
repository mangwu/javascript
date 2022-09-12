/*
 * @Author: mangwu                                                             *
 * @File: 8.1.7.1.js                                                           *
 * @Date: 2022-09-12 03:46:11                                                  *
 * @LastModifiedDate: 2022-09-12 04:13:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 属性值简写
let name = "mangwu";
const person = {
  name: name,
};
const person2 = {
  name,
};
console.log(person, person2);

function makePerson(name) {
  return {
    name,
  };
}
const p = makePerson("mangwu");
console.log(p.name);
// 压缩
function makePerson(a) {
  return {
    name: a,
  };
}
const p_ = makePerson("mangwu");
console.log(p_.name);
