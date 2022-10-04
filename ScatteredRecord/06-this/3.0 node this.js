/*
 * @Author: mangwu                                                             *
 * @File: 3.0 node this.js                                                     *
 * @Date: 2022-10-02 23:03:35                                                  *
 * @LastModifiedDate: 2022-10-02 23:05:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// a不会挂载到全局对象上
var a = 3;
// 因为node环境下的文件中的代码以如下方式被执行
(function (exports, require, module, __filename, __dirname) {
  //打印一出，所有模块的类型和值一目了然
  console.log("exports：", exports === module.exports);
  console.log("__dirname：", __dirname);
  console.log("__filename：", __filename);
  console.log("require：", require);
  console.log("module：", module);
})(exports, require, module, __filename, __dirname);
// console.log(__filename, require);
// this被指定为module.exports
console.log(this === module.exports);

// 解决方法
age = 3;
console.log(global.age);
