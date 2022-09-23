/*
 * @Author: mangwu                                                             *
 * @File: 9.1.0 mdn- Proxy.js                                                  *
 * @Date: 2022-09-22 17:12:58                                                  *
 * @LastModifiedDate: 2022-09-23 11:25:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 创建空代理对象

const target = {
  message1: "hello",
  message2: "everyone",
};

const proxy = new Proxy(target, {});
console.log(proxy);
console.log(proxy.message1);
console.log(proxy.message2);

proxy.message2 = "world";
console.log(target);
console.log(target.message1);
console.log(target.message2);

console.log(proxy === target);

const handler2 = {
  get(t, prop, receiver) {
    console.log(t === target);
    console.log(prop);
    console.log(receiver);
    return "不管访问什么属性都被返回的值";
  },
};

const proxy2 = new Proxy(target, handler2);
console.log(proxy2);
console.log(proxy2.message1);
console.log(proxy2.message2);

const handler3 = {
  get(target, prop, receiver) {
    if (prop == "message1") {
      return "message1访问操作被拦截并重定义";
    }
    return Reflect.get(...arguments);
  },
};
const proxy3 = new Proxy(target, handler3);
console.log(proxy3);
console.log(proxy3.message1);
console.log(proxy3.message2);

var crypto = require("crypto");
// 加密方法
getEncAse192 = function (str, secret) {
  var cipher = crypto.createCipher("aes192", secret); //设置加密类型 和 要使用的加密密钥

  var enc = cipher.update(str, "utf8", "hex"); //编码方式从utf-8转为hex;

  enc += cipher.final("hex"); //编码方式从转为hex;

  return enc; //返回加密后的字符串
};
// 无操作转发，不能转发私有属性
class Secret {
  #secret;
  constructor(secret) {
    this.#secret = secret;
  }
  get secret() {
    return getEncAse192(this.#secret, "kkk");
  }
}
const aSecret = new Secret("Secret");
console.log(aSecret.secret);

// 声明代理
const proxyS = new Proxy(aSecret, {});
try {
  console.log(proxyS.secret);
} catch (error) {
  console.log(error.toString());
}

const proxyS2 = new Proxy(aSecret, {
  get(target, prop, receiver) {
    return target[prop];
  },
});

console.log(proxyS2.secret);
