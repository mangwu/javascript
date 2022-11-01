/*
 * @Author: mangwu                                                             *
 * @File: 4.2.2 private property.js                                            *
 * @Date: 2022-11-01 14:45:29                                                  *
 * @LastModifiedDate: 2022-11-01 21:20:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// class的私有属性

class Stack {
  #items = {};
  #count = 0;
  push(...eles) {
    for (const ele of eles) {
      this.#items[this.#count++] = ele;
    }
  }
  isEmpty() {
    return this.#count === 0;
  }
  size() {
    return this.#count;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#items[this.#count - 1];
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.#items[--this.#count];
    delete this.#items[this.#count];
    return res;
  }
  clear() {
    this.#count = 0;
    this.#items = {};
  }
  valueOf() {
    return "123";
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let str = `${this.#items[0]}`;
    for (let i = 1; i < this.#count; i++) {
      str += `,${this.#items[i]}`;
    }
    return str;
  }
}

// const safeStack = new Stack();
// safeStack.push(1, 3, 4, 5);
// console.log(safeStack.pop());
// console.log(safeStack.pop());
// safeStack.push(8);

// console.log(safeStack);
// console.log(safeStack.toString());
// console.log(safeStack.size());

// safeStack.clear();
// console.log(safeStack.isEmpty());

module.exports = { Stack };
