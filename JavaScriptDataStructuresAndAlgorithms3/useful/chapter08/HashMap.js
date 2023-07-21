/*
 * @Author: mangwu                                                             *
 * @File: HashMap.js                                                           *
 * @Date: 2023-07-21 17:24:10                                                  *
 * @LastModifiedDate: 2023-07-21 17:29:20                                      *
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

class HashTable1 {
  constructor(toStrFn = defaultToString) {
    this.count = 0;
    this.table = {};
    this.toStrFn = toStrFn;
  }
  loseloseHashCode(key) {
    
    if (typeof key === "number") {
      return key;
    }
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
}
