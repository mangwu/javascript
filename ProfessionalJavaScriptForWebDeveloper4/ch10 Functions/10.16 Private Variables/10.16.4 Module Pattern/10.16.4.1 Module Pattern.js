/*
 * @Author: mangwu                                                             *
 * @File: 10.16.4 Module Pattern.js                                            *
 * @Date: 2022-10-13 14:32:15                                                  *
 * @LastModifiedDate: 2022-10-13 14:56:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 模块模式

let singleton = function () {
  // 私有变量和私有函数
  let privateVariable = 10;
  function privateFunction() {
    return false;
  }
  // 单例对象
  return {
    // 公共方法和属性
    publicProp: true,
    publciMethod() {
      privateVariable++;
      return privateFunction();
    },
  };
};

class BaseComponent {}
class Component extends BaseComponent {
  constructor(name) {
    super();
    this.name = name;
  }
}

let application = (function () {
  // 私有变量
  let components = new Array();
  // 初始化
  components.push(new BaseComponent());
  // 公共接口
  return {
    getComponetLength() {
      return components.length;
    },
    registerComponent(component) {
      if (component instanceof Component) {
        components.push(component);
        return true;
      }
      return false;
    },
  };
})();

application.registerComponent(new Component("mangwu"));
console.log(application);
console.log(application.getComponetLength());

