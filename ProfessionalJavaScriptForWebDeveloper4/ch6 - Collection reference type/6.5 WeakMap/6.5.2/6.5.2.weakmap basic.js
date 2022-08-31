/*
 * @Author: mangwu                                                             *
 * @File: 6.5.1.1.js                                                           *
 * @Date: 2022-08-31 11:10:58                                                  *
 * @LastModifiedDate: 2022-08-31 14:19:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const a = { a: 0 };
const weakmap = new WeakMap([[{ label: "hello" }, "value"]]).set(a, "1");
console.log(weakmap);
try {
  console.log([...weakmap]);
} catch (error) {
  console.log(error.message);
}
console.log(weakmap.get(a));
weakmap.delete(a);
