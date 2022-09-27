/**
 * @description  9.2.1 get().js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-09-27 20:49:39
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// get 捕获器，对应Relfect.get()

const target = { foo: "bar" };
const proxy = new Proxy(target, {
  get() {
    console.log(arguments);
    return Reflect.get(...arguments);
  },
});
proxy.foo;
