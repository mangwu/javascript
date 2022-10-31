/*
 * @Author: mangwu                                                             *
 * @File: 11.3.3.2 .js                                                         *
 * @Date: 2022-10-31 00:56:44                                                  *
 * @LastModifiedDate: 2022-10-31 01:12:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 并行优化
async function randomDelay(id) {
  const delay = Math.random() * 1000;
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`${id} finished: ${delay}ms`);
      resolve();
    }, delay)
  );
}

async function foo1() {
  const t0 = Date.now();
  await randomDelay(0);
  await randomDelay(1);
  await randomDelay(2);
  await randomDelay(3);
  await randomDelay(4);
  console.log(`${Date.now() - t0}ms elapsed`);
}

foo1();

async function foo2() {
  const t0 = Date.now();
  for (let i = 0; i < 5; i++) {
    await randomDelay(i);
  }
  console.log(`${Date.now() - t0}ms elapsed`);
}
foo2();

async function foo3() {
  const t0 = Date.now();
  const p0 = randomDelay(0);
  const p1 = randomDelay(1);
  const p2 = randomDelay(2);
  const p3 = randomDelay(3);
  const p4 = randomDelay(4);

  await p0;
  await p1;
  await p2;
  await p3;
  await p4;

  console.log(`${Date.now() - t0}ms elapsed`);
}

foo3();

async function foo4() {
  const t0 = Date.now();
  const promises = new Array(5).fill(0).map((v, i) => randomDelay(i));
  for (const promise of promises) {
    await promise;
  }
  console.log(`${Date.now() - t0}ms elapsed`);
}

foo4();
