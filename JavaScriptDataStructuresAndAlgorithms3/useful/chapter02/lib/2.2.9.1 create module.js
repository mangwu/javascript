"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.squareArea = exports["default"] = exports.circleArea = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
var circleArea = function circleArea(r) {
  return Math.PI * Math.pow(r, 2);
};
exports.circleArea = circleArea;
var squareArea = function squareArea(s) {
  return s * s;
};
exports.squareArea = squareArea;
// 这就是创建的一个模块，可被其它文件使用
// 导出默认值
var Book = /*#__PURE__*/function () {
  function Book(title) {
    _classCallCheck(this, Book);
    this.title = title;
  }
  _createClass(Book, [{
    key: "printTitle",
    value: function printTitle() {
      console.log(this.title);
    }
  }]);
  return Book;
}();
exports["default"] = Book;