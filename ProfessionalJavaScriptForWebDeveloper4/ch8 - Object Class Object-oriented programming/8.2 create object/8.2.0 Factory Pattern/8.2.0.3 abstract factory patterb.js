/*
 * @Author: mangwu                                                             *
 * @File: 8.2.0.3 abstract factory patterb.js                                  *
 * @Date: 2022-09-13 14:19:44                                                  *
 * @LastModifiedDate: 2022-09-13 15:23:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 抽象工厂模式

class AbstractSportsFactory {
  constructor() {
    if (new.target === AbstractSportsFactory) {
      throw new Error("抽象类不能直接实例化！");
    }
  }
  // 抽象方法
  createBall() {
    throw new Error("抽象方法不能调用");
  }
  createShoes() {
    throw new Error("抽象方法不能调用");
  }
  createBats() {
    throw new Error("抽象方法不能调用");
  }
}
class SportsFactory extends AbstractSportsFactory {
  constructor() {
    super();
  }
  createBall(type) {
    switch (type) {
      case "Pingpong":
        return new Pingpong();
      case "Tennis":
        return new Tennis();
      case "Basketball":
        return new Basketball();
      case "Football":
        return new Football();
      default:
        throw new Error(`本店不提供${type}球`);
    }
  }
  createShoes(type) {
    switch (type) {
      case "Pingpong":
        return new PingpongShoes();
      case "Tennis":
        return new TennisShoes();
      case "Basketball":
        return new BasketballShoes();
      case "Football":
        return new FootballShoes();
      default:
        throw new Error(`本店不提供${type}鞋`);
    }
  }
  createBats(type) {
    switch (type) {
      case "Pingpong":
        return new PingpongBats();
      case "Tennis":
        return new TennisBats();
      default:
        throw new Error(`本店不提供${type}拍`);
    }
  }
}
class AbstractBall {
  constructor() {
    if (new.target === AbstractBall) {
      throw new Error("抽象产品不能直接实例化");
    }
    this.type = "球";
  }
  play() {
    throw new Error("抽象方法不能直接调用");
  }
}
class AbstractShoes {
  constructor() {
    if (new.target === AbstractShoes) {
      throw new Error("抽象产品不能直接实例化");
    }
    this.type = "球鞋";
  }
  wear() {
    throw new Error("抽象方法不能直接调用");
  }
}
class AbstractBats {
  constructor() {
    if (new.target === AbstractShoes) {
      throw new Error("抽象产品不能直接实例化");
    }
    this.type = "球拍";
  }
  test() {
    throw new Error("抽象方法不能直接调用");
  }
}

class PingpongShoes extends AbstractShoes {
  constructor() {
    super();
  }
  wear() {
    console.log("穿上了乒乓球鞋");
  }
}
class TennisShoes extends AbstractShoes {
  constructor() {
    super();
  }
  wear() {
    console.log("穿上了网球鞋");
  }
}
class BasketballShoes extends AbstractShoes {
  constructor() {
    super();
  }
  wear() {
    console.log("穿上了篮球鞋");
  }
}
class FootballShoes extends AbstractShoes {
  constructor() {
    super();
  }
  wear() {
    console.log("穿上了足球鞋");
  }
}
class Football extends AbstractBall {
  constructor() {
    super();
  }
  play() {
    console.log("踢足球真好玩，可是不会踢");
  }
}
class Tennis extends AbstractBall {
  constructor() {
    super();
  }
  play() {
    console.log("讨厌网球，不喜欢打网球");
  }
}
class Basketball extends AbstractBall {
  constructor() {
    super();
  }
  play() {
    console.log("很想打篮球，但是打的很烂");
  }
}
class Pingpong extends AbstractBall {
  constructor() {
    super();
  }
  play() {
    console.log("会打乒乓球，乒乓球很好玩");
  }
}
class PingpongBats extends AbstractBats {
  constructor() {
    super();
  }
  test() {
    console.log("这个乒乓球拍质量怎么样啊");
  }
}
class TennisBats extends AbstractBats {
  constructor() {
    super();
  }
  test() {
    console.log("网球拍好重啊");
  }
}

const sf = new SportsFactory();
const pingpong = sf.createBall("Pingpong");
const basketballshoes = sf.createShoes("Basketball");
const tennisbats = sf.createBats("Tennis");

console.log(pingpong);
pingpong.play();
console.log(basketballshoes);
basketballshoes.wear();
console.log(tennisbats);
tennisbats.test();
try {
  const basketballbats = sf.createBats("Basketball");
} catch (error) {
  console.log(error.message);
}
try {
  const a = new AbstractSportsFactory();
} catch (error) {
  console.log(error.message);
}
