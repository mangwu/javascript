/*
 * @Author: mangwu                                                             *
 * @File: 6.7.2.1 create.js                                                    *
 * @Date: 2022-09-02 10:43:36                                                  *
 * @LastModifiedDate: 2022-09-02 10:52:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 创建弱集合
try {
  const ws = new WeakSet([{ a: "1" }, 2]);
} catch (error) {
  console.log(error.message);
}

const ws = new WeakSet({
  [Symbol.iterator]: function* () {
    yield { a: 1 };
    yield { b: 1 };
    yield { c: 1 };
  },
});
console.log(ws);

