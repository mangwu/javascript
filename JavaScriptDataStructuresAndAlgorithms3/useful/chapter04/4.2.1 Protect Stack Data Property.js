/*
 * @Author: mangwu                                                             *
 * @File: 4.2.1 Protect Stack Data Property.js                                 *
 * @Date: 2022-11-01 14:04:10                                                  *
 * @LastModifiedDate: 2022-11-01 14:42:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 保存数据结构内部元素

// 下划线约定
class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }
}

const _items = Symbol("stackItems");
class Stack2 {
  constructor() {
    this[_items] = [];
  }
  push(...ele) {
    this[_items].push(...ele);
  }
}

const stack = new Stack2();
stack.push(1, 2, 3);
console.log(stack);

const objSymbols = Object.getOwnPropertySymbols(stack);
console.log(objSymbols);
stack[objSymbols[0]][0] = 4;
console.log(stack);

// WeakMap实现键值对保存 私有属性
let SafeStack = null;
{
  const items = new WeakMap();
  SafeStack = class {
    constructor() {
      items.set(this, []);
    }
    push(...ele) {
      const s = items.get(this);
      s.push(...ele);
    }
    size() {
      return items.get(this).length;
    }
    isEmpty() {
      return this.size() === 0;
    }
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      const s = items.get(this);
      return s[s.length - 1];
    }
    pop() {
      const s = items.get(this);
      return s.pop();
    }
    clear() {
      items.set(this, []);
    }
    toString() {
      if (this.isEmpty()) {
        return "";
      }
      const s = items.get(this);
      let str = `${s[0]}`;
      for (let i = 1; i < s.length; i++) {
        str += `,${s[i]}`;
      }
      return str;
    }
  };
}

const safeStack = new SafeStack();
safeStack.push(1, 2, 3);
console.log(safeStack);
console.log(safeStack.toString());

console.log(safeStack.pop());
console.log(safeStack.size());
console.log(safeStack.isEmpty());

safeStack.clear();
safeStack.push(3, 8, 5);
console.log(safeStack);
console.log(safeStack.toString());
