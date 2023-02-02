/*
 * @Author: mangwu                                                             *
 * @File: 10.5.2 ES6 default parameter values.js                               *
 * @Date: 2022-10-06 20:48:37                                                  *
 * @LastModifiedDate: 2022-10-06 22:55:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// ES6默认参数值

function sayGreetings(greeting = "Hello", name = "mangwu") {
  console.log(`${greeting}, ${name}`);
}
sayGreetings();
sayGreetings("How are you", "wumang");
sayGreetings(undefined, "wumang");

console.log("---------");
// 严格模式
(function () {
  "use strict";
  function syncNamedArguments(num = 3) {
    // arguments[0] = 5;
    // console.log(num);
    num = 7;
    // console.log(arguments[0]);
    return arguments[0];
  }
  // 二者相互独立
  console.log(syncNamedArguments(1));
})();

// 默认值为其他函数调用获取
let romanNumerals = ["I", "II", "III", "IV", "V", "VI"];
let idx = 0;
function getRomanNum() {
  return romanNumerals[idx++];
}

function makeKing(name = "Henry", numerals = getRomanNum()) {
  return `King ${name} ${numerals}`;
}
console.log(makeKing()); // King Henri I
console.log(makeKing("Louis", "XVI")); // King Louis XVI
console.log(makeKing()); // King Henri II
console.log(makeKing()); // King Henri III

const makeKing2 = (name = "Henry") => `King ${name}`;
