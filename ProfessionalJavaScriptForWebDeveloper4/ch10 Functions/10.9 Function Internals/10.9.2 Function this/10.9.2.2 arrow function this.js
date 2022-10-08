/*
 * @Author: mangwu                                                             *
 * @File: 10.9.2.2 arrow function this.js                                      *
 * @Date: 2022-10-08 07:22:05                                                  *
 * @LastModifiedDate: 2022-10-08 22:10:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 箭头函数this
this.color = "red";
color = "green";
const obj = {
  color: "blue",
  sayColor: () => {
    console.log(this.color);
  },
  createSayColor: function () {
    const sayColor = () => {
      console.log(this.color);
    };
    return sayColor;
  },
};

// 箭头函数的this值和调用对象无关
obj.sayColor(); // red
// 箭头函数的this值是定义时所在作用域的this值
obj.createSayColor()(); // blue
const fn = obj.createSayColor;
fn()(); // green

// 回调函数
function Queen() {
  this.name = "Elizabeth";
  setTimeout(function () {
    console.log(this.name);
  }, 1000);
}

function King() {
  this.name = "Henry";
  setTimeout(() => {
    console.log(this.name);
  }, 1000);
}

new Queen();
new King();
