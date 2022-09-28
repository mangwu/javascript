/*
 * @Author: mangwu                                                             *
 * @File: 9.3.4 construct and functon parameter validation.js                  *
 * @Date: 2022-09-28 16:40:32                                                  *
 * @LastModifiedDate: 2022-09-28 16:54:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 函数和构造函数的参数验证

function average(...nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum / nums.length;
}

const proxy = new Proxy(average, {
  apply(target, thisArg, argArray) {
    for (const arg of argArray) {
      if (typeof arg !== "number") {
        throw "需要数字数组";
      }
    }
    return Reflect.apply(...arguments);
  },
});
console.log(proxy(4, 2, 5, 8, 6, 4, 1, 2, 4, 3)); //3.9
try {
  console.log(proxy(4, 2, 5, 8, 6, "4", 1, 2, 4, 3)); //
} catch (error) {
  console.log(error.toString());
}

function User(id) {
  this.id = id;
}
const proxy2 = new Proxy(User, {
  construct(target, argArray, newTarget) {
    if (argArray[0] === undefined) {
      throw "User 构造函数必须传递id";
    }
    return Reflect.construct(...arguments);
  },
});

new proxy2(1);
try {
  console.log(new proxy2()); //
} catch (error) {
  console.log(error.toString());
}
