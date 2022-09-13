/*
 * @Author: mangwu                                                             *
 * @File: 8.2.0.2 factory function mode.js                                     *
 * @Date: 2022-09-13 11:10:29                                                  *
 * @LastModifiedDate: 2022-09-13 13:51:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 工厂方法模式

// 工厂是一个类，包含所有的构造函数
let SportsFactory = function (name) {
  if (this instanceof SportsFactory) {
    console.log("name:", name);
    var s = new this[name]();
    return s;
  } else {
    return new SportsFactory(name);
  }
};
SportsFactory.prototype = {
  Basketball: function () {
    this.info = "篮球盛行于美国";
    this.getMember = function () {
      console.log("篮球队员5人");
    };
  },
  Football: function () {
    this.info = "足球在全世界都很流行";
    this.getMember = function () {
      console.log("足球队需要11人");
    };
  },
  Tennis: function () {
    this.info = "李娜是中国网球的顶尖选手";
    this.getMember = function () {
      console.log("网球是单人项目");
    };
  },
  Pingpang: function () {
    this.info = "中国的乒乓球是世界霸主";
    this.getMember = function () {
      console.log("乒乓球由单人和双人项目");
    };
  },
};

const football = SportsFactory("Football");
console.log(football);
football.getMember();
SportsFactory = function () {};
SportsFactory.prototype = {
  Basketball: function () {
    this.info = "篮球盛行于美国";
    this.getMember = function () {
      console.log("篮球队员5人");
    };
  },
  Football: function () {
    this.info = "足球在全世界都很流行";
    this.getMember = function () {
      console.log("足球队需要11人");
    };
  },
  Tennis: function () {
    this.info = "李娜是中国网球的顶尖选手";
    this.getMember = function () {
      console.log("网球是单人项目");
    };
  },
  Pingpang: function () {
    this.info = "中国的乒乓球是世界霸主";
    this.getMember = function () {
      console.log("乒乓球有单人和双人项目");
    };
  },
};
const sf = new SportsFactory();
const pingpang = new sf.Pingpang();
console.log(pingpang);
pingpang.getMember();
