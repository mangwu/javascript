/*
 * @Author: mangwu                                                             *
 * @File: 10.10.3 Function.prototype.call and apply.js                         *
 * @Date: 2022-10-09 21:18:18                                                  *
 * @LastModifiedDate: 2022-10-09 21:33:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function sum(num1, num2) {
  console.log(this);
  return num1 + num2;
}

console.log(sum.apply(this, [1, 2])); // 3 通过数组调用
const o = {
  applySum: function (num1 = 3, num2 = 4) {
    arguments[0] = num1;
    arguments[1] = num2;
    arguments.length = 2;
    return sum.apply(this, arguments);
  },
};
console.log(o.applySum()); // 7 通过传递arguments对象调用

console.log(sum.call(this, 7, 8)); // 15

// 控制函数作用域中的this值
globalThis.color = "red";
this.color = "green";
const obj = {
  color: "blue",
};
function sayColor() {
  console.log(this.color);
}
sayColor.call(global);
sayColor.call(this);
sayColor.call(obj);

