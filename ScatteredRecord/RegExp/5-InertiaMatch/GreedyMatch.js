/**
 * @description 贪婪性匹配：重复类量词表现未弱贪婪性和强贪婪性
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-23 13:47:35
 * @copyright © 2021 wangzhihao, All rights reserved.
 */


const html = "<html><head><title></title></head><body></body></html>";

// 前面一个尽量匹配多的
const reg = /(<.*>)(<.*>)/;

const a = html.match(reg);
console.log(a);


