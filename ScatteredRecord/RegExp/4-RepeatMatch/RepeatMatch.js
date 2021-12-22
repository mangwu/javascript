/**
 * @description 重复匹配
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-22 19:00:47
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 匹配手机号码
let reg =
  /1((3\d)|(8\d)|(5[0-35-9])|(9[0-35-9])|7([0-8])|(4[014-9])|(6[2567]))\d{8}/;

console.log(reg.test("13451142805"));
console.log(reg.test("15451142805"));
console.log(reg.test("17951142805"));

