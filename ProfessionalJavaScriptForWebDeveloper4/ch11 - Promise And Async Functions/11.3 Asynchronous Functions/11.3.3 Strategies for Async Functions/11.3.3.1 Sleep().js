/*
 * @Author: mangwu                                                             *
 * @File: 11.3.3.1 Sleep().js                                                  *
 * @Date: 2022-10-31 00:24:08                                                  *
 * @LastModifiedDate: 2022-10-31 00:26:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 非阻塞暂停 线程
async function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function foo() {
  const t0 = Date.now();
  await sleep(1500); // 暂停约1500毫秒
  console.log(Date.now() - t0);
}
foo();
