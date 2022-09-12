/*
 * @Author: mangwu                                                             *
 * @File: 8.1.7.2 computed property.js                                         *
 * @Date: 2022-09-12 04:24:02                                                  *
 * @LastModifiedDate: 2022-09-12 04:32:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 可计算属性
let nameKey = "name";
let ageKey = "age";
let uniqueId = 0;
var getUniqueKey = (key, id) => {
  return `${key}_${id}`;
};
const person = {
  [getUniqueKey(nameKey, uniqueId++)]: "mangwu",
  [getUniqueKey(ageKey, uniqueId++)]: 23,
};
console.log(person);

// 错误不能回滚
let p = null;
try {
  p = {
    [getUniqueKey(nameKey, uniqueId++)]: "mangwu",
    [getUniqueKey(ageKey, uniqueId++) - a]: 23,
  };
} catch (error) {
  console.log(error.message);
}
console.log(p, uniqueId);
