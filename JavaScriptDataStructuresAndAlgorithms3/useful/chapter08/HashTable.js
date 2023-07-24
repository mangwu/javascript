/*
 * @Author: mangwu                                                             *
 * @File: HashTable.js                                                           *
 * @Date: 2023-07-21 17:24:10                                                  *
 * @LastModifiedDate: 2023-07-24 14:11:22                                      *
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
class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
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
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (const ch of tableKey) {
      hash += ch.charCodeAt();
    }
    return hash % 37;
  }
  hashCode(key) {
    return this.loseloseHashCode(key);
  }
  put(key, value) {
    if (key !== null && value !== null) {
      const postion = this.hashCode(key);
      this.table[postion] = new ValuePair(key, value);
      this.count++;
      return true;
    }
    return false;
  }
  get(key) {
    const postion = this.hashCode(key);
    const valuePair = this.table[postion];
    return valuePair == null ? undefined : valuePair.value;
  }
  has(key) {
    return Object.prototype.hasOwnProperty.call(this.table, this.hashCode(key));
  }
  delete(key) {
    const postion = this.hashCode(key);
    const valuePair = this.table[postion];
    if (valuePair != null) {
      delete this.table[postion];
      this.count--;
      return true;
    }
    return false;
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
const {
  LinkedNodeList,
  Node,
} = require("../chapter06/6.1.1 LinkedNodeList.js");

class HashTable2 extends HashTable1 {
  constructor(toStrFn = defaultToString) {
    super(toStrFn);
  }
  put(key, value) {
    if (key != null && value != null) {
      const postion = this.hashCode(key);
      if (super.has(key)) {
        // 有相同的keyCode
        const list = this.table[postion];
        if (this.has(key)) {
          // 相同的key
          const target = list.getNodeAt(list.indexOf(key));
          target.value.value = value;
        } else {
          list.push(new Node(new ValuePair(key, value)));
        }
      } else {
        this.table[postion] = new LinkedNodeList(
          (cur, pass) => cur.value.key === pass
        );
        this.table[postion].push(new Node(new ValuePair(key, value)));
      }
      this.count++;
      return true;
    }
    return false;
  }
  has(key) {
    // 有相同的keyCode
    if (super.has(key)) return this.get(key) != undefined;
    return false;
  }
  get(key) {
    const postion = this.hashCode(key);
    const list = this.table[postion];
    const idx = list.indexOf(key);
    if (list && idx !== -1) return list.getNodeAt(idx).value.value;
    return undefined;
  }
  delete(key) {
    if (this.has(key)) {
      const postion = this.hashCode(key);
      const list = this.table[postion];
      list.remove(key);
      if (list.isEmpty()) delete this.table[postion];
      this.count--;
      return true;
    }
    return false;
  }
}

class HashTable3 extends HashTable1 {
  constructor(toStrFn = defaultToString) {
    super(toStrFn);
  }
  put(key, value) {
    if (key !== null && value !== null) {
      let cur = this.hashCode(key);
      while (this.table[cur]) {
        if (this.table[cur].key === key) {
          this.table[cur].value = value;
          return true;
        }
        cur++;
      }
      this.count++;
      this.table[cur] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  get(key) {
    let cur = this.hashCode(key);
    while (this.table[cur]) {
      if (this.table[cur].key === key) return this.table[cur].value;
      cur++;
    }
    return undefined;
  }
  delete(key) {
    let cur = this.hashCode(key);
    while (this.table[cur]) {
      if (this.table[cur].key === key) {
        this.count--;
        delete this.table[cur];
        this.verifyRemoveSideEffect(key, cur);
        return true;
      }
      cur++;
    }
    return false;
  }
  verifyRemoveSideEffect(key, removePos) {
    const hash = this.hashCode(key);
    let index = removePos + 1;
    while (this.table[index]) {
      const curPos = this.hashCode(this.table[index].key);
      if (curPos <= hash || curPos <= removePos) {
        this.table[removePos] = this.table[index];
        delete this.table[index];
        removePos = index;
      }
      index++;
    }
  }
}

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.count = 0;
    this.table = {};
    this.toStrFn = toStrFn;
  }
  djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (const ch of tableKey) {
      hash = hash * 33 + ch.charCodeAt();
    }
    return hash % 1013;
  }
  hashCode(key) {
    return this.djb2HashCode(key);
  }
  put(key, value) {
    if (key !== null && value !== null) {
      const postion = this.hashCode(key);
      if (this.has(key)) {
        this.table[postion].value = value;
        return true;
      }
      this.table[postion] = new ValuePair(key, value);
      this.count++;
      return true;
    }
    return false;
  }
  get(key) {
    const postion = this.hashCode(key);
    const valuePair = this.table[postion];
    return valuePair == null ? undefined : valuePair.value;
  }
  has(key) {
    return Object.prototype.hasOwnProperty.call(this.table, this.hashCode(key));
  }
  delete(key) {
    const postion = this.hashCode(key);
    const valuePair = this.table[postion];
    if (valuePair != null) {
      delete this.table[postion];
      this.count--;
      return true;
    }
    return false;
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

module.exports = { HashTable1, HashTable2, HashTable3, HashTable };
