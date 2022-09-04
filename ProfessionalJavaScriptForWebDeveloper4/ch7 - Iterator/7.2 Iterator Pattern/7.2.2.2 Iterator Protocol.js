/*
 * @Author: mangwu                                                             *
 * @File: 7.2.2.2.1 .js                                                        *
 * @Date: 2022-09-03 17:58:16                                                  *
 * @LastModifiedDate: 2022-09-04 21:17:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 迭代器协议
const arr = {
  [Symbol.iterator]: function* (value) {
    yield value + 1;
    yield value + 2;
    yield value + 3;
  },
};
const iterator = arr[Symbol.iterator](2);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 迭代中途关联的可迭代对象被更改
let a = [1, 2, 3, 4];
const iterator2 = a.values();
console.log(iterator2.next());
// 修改迭代器关联的可迭代数组的元素
a.splice(0, 2, 5, 6);
console.log(iterator2.next());
console.log(iterator2.next());
a = [9, 9, 9, 9, 9];
console.log(iterator2.next());
console.log(iterator2.next());
console.log("------------------");
// return 方法
const obj = {
  [Symbol.iterator](start = 0, end = 3) {
    let i = start;
    return {
      next() {
        i++;
        if (i > end) return { done: true, value: undefined };
        return { done: false, value: i };
      },
      return(value) {
        console.log("Closing");
        return { done: true, value };
      },
    };
  },
};
const [b] = obj; // 解构语法
console.log(b);
const [c, d, e, f] = obj; // 解构语法
console.log(c, d, e, f);
const iterator3 = obj[Symbol.iterator]();
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());

for (const item of obj) {
  console.log(item);
}
for (const item of obj) {
  console.log(item);
  break;
}

// throw方法
const obj2 = {
  [Symbol.iterator](start = 0, end = 3) {
    let i = start;
    return {
      next() {
        i++;
        if (i > end) return { done: true, value: undefined };
        return [];
      },
      return(value) {
        console.log("Closing");
        return { done: true, value };
      },
      throw(error) {
        throw error;
      },
    };
  },
};

const iterator4 = obj2[Symbol.iterator]();
for (const item of obj2) {
  console.log(item);
}
