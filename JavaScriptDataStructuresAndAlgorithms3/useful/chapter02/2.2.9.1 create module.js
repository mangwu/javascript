/*
 * @Author: mangwu                                                             *
 * @File: 2.2.8.1 create module.js                                             *
 * @Date: 2022-10-31 16:17:02                                                  *
 * @LastModifiedDate: 2022-10-31 16:49:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 创建模块
const circleArea = (r) => Math.PI * r ** 2;
const squareArea = (s) => s * s;

export { circleArea, squareArea }; // 这就是创建的一个模块，可被其它文件使用

// 导出默认值
export default class Book {
  constructor(title) {
    this.title = title;
  }
  printTitle() {
    console.log(this.title);
  }
}
