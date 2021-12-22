/**
 * @description 对用户输入进行转义
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-22 16:24:59
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const input = document.querySelector("input");
input.addEventListener("change", (_e) => {
  let str = input.value;
  let reg = /\"|\'|\<|\>|\&/g;
  let a = str.replace(reg, (m) => "&#" + m.charCodeAt() + ";");
  console.log(a);
  document.write(a);
});
