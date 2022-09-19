/*
 * @Author: mangwu                                                             *
 * @File: 8.4.2.2.3 class is a Function object.js                              *
 * @Date: 2022-09-19 23:49:40                                                  *
 * @LastModifiedDate: 2022-09-19 23:52:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 类是JavaScript的一等公民，可以像对待其他对象或函数引用一样把类作为参数传递
let classList = [
  class {
    constructor(id) {
      this.id_ = id;
      console.log(`instance ${this.id_}`);
    }
  },
];
function createInstance(classDefinition, id) {
  return new classDefinition(id);
}
let foo = createInstance(classList[0], 2415);
