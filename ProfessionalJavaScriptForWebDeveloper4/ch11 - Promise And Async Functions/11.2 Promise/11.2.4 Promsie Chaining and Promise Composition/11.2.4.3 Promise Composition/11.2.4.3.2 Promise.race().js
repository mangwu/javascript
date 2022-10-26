/*
 * @Author: mangwu                                                             *
 * @File: 11.2.4.3.2 Promise.race().js                                         *
 * @Date: 2022-10-26 15:54:01                                                  *
 * @LastModifiedDate: 2022-10-26 17:10:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Promise.race() 返回一组包含的期约中最先落地状态的期约的镜像期约
let promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.reject("reason"),
];
let p1 = Promise.race(promises);
console.log(p1);
setTimeout(() => {
  console.log(p1);
  console.log(p1 === promises[0]);
}, 0);

// 参数
let p2 = Promise.race([5, 3, 4]);
p2.then((res) => {
  console.log(res);
});

let p3 = Promise.race([]);
setTimeout(() => {
  console.log(p3);
}, 0);

let p4 = Promise.race();
p4.catch((reason) => {
  console.log(reason.toString());
});
