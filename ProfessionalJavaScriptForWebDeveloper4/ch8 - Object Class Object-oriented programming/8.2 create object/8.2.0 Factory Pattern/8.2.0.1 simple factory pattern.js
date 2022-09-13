/*
 * @Author: mangwu                                                             *
 * @File: 8.2.0.1 simple factory mode.js                                       *
 * @Date: 2022-09-13 09:58:45                                                  *
 * @LastModifiedDate: 2022-09-13 10:06:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 简单工厂模式
// 篮球基类
var Basketball = function () {
  this.info = "篮球盛行于美国";
};
Basketball.prototype = {
  getMember() {
    console.log("每个队伍需要5名球员");
  },
};
// 足球基类
var Football = function () {
  this.info = "足球在世界上很受欢迎";
};
Football.prototype = {
  getMember() {
    console.log("每个队伍需要11名球员");
  },
};
// 网球基类
var Tennis = function () {
  this.info = "李娜在中国网球界内是顶尖高手";
};
Tennis.prototype = {
  getMember() {
    console.log("每个队伍需要1名球员");
  },
};
// 运动工厂
var SportsFactory = function (name) {
  switch (name) {
    case "篮球":
      return new Basketball();
    case "网球":
      return new Tennis();
    case "足球":
      return new Football();
    default:
      console.log("请传递正确的参数");
      break;
  }
};
let basketball = SportsFactory("篮球");
console.log(basketball);
basketball.getMember();
