/*
 * @Author: mangwu                                                             *
 * @File: Dictionary.js                                                        *
 * @Date: 2023-07-21 14:00:08                                                  *
 * @LastModifiedDate: 2023-07-21 15:21:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @description 默认字符串转换方法
 * @param {any} item
 * @returns {string}
 */
function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {}; // 保存字典的地方
    this.count = 0;
  }
  set(key, value) {
    const keyStr = this.toStrFn(key);
    if (!this.has(key)) this.count++;
    this.table[keyStr] = value;
    return this;
  }
  has(key) {
    const keyStr = this.toStrFn(key);
    return Object.prototype.hasOwnProperty.call(this.table, keyStr);
  }
  delete(key) {
    if (this.has(key)) {
      const keyStr = this.toStrFn(key);
      delete this.table[keyStr];
      this.count--;
      return true;
    }
    return false;
  }
  get(key) {
    if (this.has(key)) return this.table[this.toStrFn(key)];
    return undefined;
  }
  clear() {
    this.table = {};
    this.count = 0;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  keys() {
    return Object.keys(this.table);
  }
  values() {
    return Object.values(this.table);
  }
  entries() {
    return Object.entries(this.table);
  }
  forEach(callback) {
    const keyValues = this.entries();
    keyValues.forEach(([key, value], index, arr) =>
      callback(key, value, index, arr)
    );
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
  toString() {
    let res = `Dictionary {`;
    this.forEach((key, value, index) => {
      if (index !== this.size() - 1) res += ` ${key}: ${value}, `;
      else res += ` ${key}: ${value} `;
    });
    res += "}";
    return res;
  }
}

module.exports = Dictionary;
