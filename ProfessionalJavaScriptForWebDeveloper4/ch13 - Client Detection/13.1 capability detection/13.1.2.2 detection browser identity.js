/*
 * @Author: mangwu                                                             *
 * @File: 13.1.2.2 detection browser identity.js                               *
 * @Date: 2022-12-23 13:35:23                                                  *
 * @LastModifiedDate: 2022-12-23 20:09:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class BrowserDetetor {
  constructor() {
    // 测试条件编译
    // IE6~10支持
    this.isIE_Gte6Lte10 = /*@cc_on!@*/ false;

    // 测试documentMode
    // IE7~11支持
    this.isIE_Gte7Lte11 = !!document.documentMode;

    // 测试StyleMedia构造函数
    // Edge 20 及以上版本
    this.isEdge_Gte20 = !!window.StyleMedia;

    // 测试火狐专有扩展安装api
    // 所有火狐版本都支持
    this.isFirefox_Gte1 = typeof InstallTrigger !== "undefined";

    // 测试chrome对象及其webstore属性
    // Opera某些版本有chrome对象，但是没有chrome.webstore
    // 所有谷歌版本都支持
    this.isChrome_Gte1 = !!window.chrome && !!window.chrome.webstore;

    // Safari早期版本会给构造函数的标签追加“Constructor”字样
    // window.Element.toString(); // [object ElementConctructor]
    // Safari3~9.1 支持
    this.isSafari_Gte3Lte9_1 = /constructor/i.test(window.Element);

    // 推送通知API暴露在window对象上
    // 使用默认参数值避免对undefined调用toString()
    // Safari 7.1 及以上版本支持
    this.isSafari_Gte7_1 = (({ pushNotification = {} } = {}) =>
      pushNotification.toString() === "[object SafariRemoteNotification]")(
      window.safari
    );

    // 测试addons属性
    // Opera 20及以上版本支持
    this.isOpera_Gte20 = !!window.opr && !!window.opr.addons;
  }
  isIE() {
    return this.isIE_Gte6Lte10 || this.isIE_Gte7Lte11;
  }
  isEdge() {
    return this.isEdge_Gte20 && !this.isIE();
  }
  isFirefox() {
    return this.isFirefox_Gte1;
  }
  isChrome() {
    return this.isChrome_Gte1;
  }
  isSafari() {
    return this.isSafari_Gte7_1 || this.isSafari_Gte3Lte9_1;
  }
  isOpera() {
    return this.isOpera_Gte20;
  }
}

const bd = new BrowserDetetor();
console.log("chrome:", bd.isChrome());
console.log("firefox:", bd.isFirefox());
console.log("ie:", bd.isIE());
console.log("edge:", bd.isEdge());
console.log("opera:", bd.isOpera());
console.log("safari:", bd.isSafari());


