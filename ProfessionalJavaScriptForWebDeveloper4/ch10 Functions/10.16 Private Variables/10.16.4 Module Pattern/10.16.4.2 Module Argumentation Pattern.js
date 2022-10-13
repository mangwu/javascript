/*
 * @Author: mangwu                                                             *
 * @File: 10.16.4.2 Module Argumentation Pattern.js                            *
 * @Date: 2022-10-13 15:34:40                                                  *
 * @LastModifiedDate: 2022-10-13 15:58:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 模块增强模式

class CustomType {}

let singleton = (function () {
  // 私有变量和私有函数
  let privateVariable = 10;
  function privateFunction() {
    return false;
  }
  // 创建实例
  let o = new CustomType();
  // 增强对象，添加公共方法和属性
  o.publicProp = true;
  o.publicMethod = function () {
    privateVariable++;
    return privateFunction();
  };
  return o;
})();

class BaseComponent {}
class Component extends BaseComponent {
  constructor(name) {
    super();
    this.name = name;
  }
}

const application = (function () {
  // 私有变量和私有函数
  let components = new Array();
  // 初始化私有变量
  components.push(new BaseComponent());

  // 创建实例
  const o = new BaseComponent();
  // 增强实例,公共接口
  o.getComponentLength = function () {
    return components.length;
  };
  o.registerComponent = function (component) {
    if (component instanceof BaseComponent) {
      components.push(component);
      return true;
    }
    return false;
  };
  return o;
})();

application.registerComponent(new Component("mangwu"));
console.log(application.getComponentLength());
console.log(application);
