/*
 * @Author: mangwu                                                             *
 * @File: 9.1.1 null proxy.js                                                  *
 * @Date: 2022-09-23 14:09:09                                                  *
 * @LastModifiedDate: 2022-09-23 14:15:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 空代理
const target = {
  id: "target",
};

// 无操作转发代理
const proxy = new Proxy(target, {});

// 在proxy上的对象操作会转发到target上
console.log(proxy.id);
console.log(target.id);

proxy.id = "foo";

console.log(proxy.id);
console.log(target.id);

// 使用方法判断代理是否包含id属性，代理会将改判断操作转发到目标对象上
console.log(target.hasOwnProperty("id"));
console.log(proxy.hasOwnProperty("id"));

// Proxy.prototype是undefined,因此不能使用instanceof 判断代理
// 代理实例的原型[[Prototype]]是Object.prototype(这也是能使用hasOwnProperty的原因)
try {
  console.log(proxy instanceof Proxy);
} catch (error) {
  console.log(error.toString());
}
console.log(proxy.__proto__ === Object.prototype);

// 代理和源对象是两个不同的对象，只是操作空代理能将操作转发到源对象上
console.log(target === proxy);
