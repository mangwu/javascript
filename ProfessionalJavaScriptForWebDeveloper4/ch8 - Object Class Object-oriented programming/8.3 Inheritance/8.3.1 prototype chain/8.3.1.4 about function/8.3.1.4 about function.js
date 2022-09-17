/*
 * @Author: mangwu                                                             *
 * @File: 8.3.1.4 about function.js                                            *
 * @Date: 2022-09-17 17:32:16                                                  *
 * @LastModifiedDate: 2022-09-17 17:35:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function SuperType() {
  this.property = true;
}
SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}
SubType.prototype = new SuperType(); // 继承Supertype
// 在继承后添加方法
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};
// 覆盖方法
SubType.prototype.getSuperValue = function () {
  return this.subproperty && this.property;
};
