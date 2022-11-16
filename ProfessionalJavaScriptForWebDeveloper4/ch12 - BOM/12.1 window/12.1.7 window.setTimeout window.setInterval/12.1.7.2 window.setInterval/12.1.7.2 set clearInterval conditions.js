/*
 * @Author: mangwu                                                             *
 * @File: 12.1.7.2 set clearInterval condiation.js                             *
 * @Date: 2022-11-16 10:57:55                                                  *
 * @LastModifiedDate: 2022-11-16 11:27:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 使用setInterval务必设定循环定时器终止条件

function cycle(times, callback, delay, ...args) {
  let interval = null;
  const wrapperCallback = () => {
    times--;
    callback(...args);
    if (times == 0) {
      clearInterval(interval);
      console.log("done", new Date() - last);
    }
  };
  interval = setInterval(wrapperCallback, delay);
}

let num = 0;
let last = new Date();
cycle(500, () => console.log(num++), 20);

// 使用setTimeout实现上述的情况下
function cycle2(times, callback, delay, ...args) {
  if (times <= 0) {
    console.log("done", new Date() - last2);
    return;
  }
  setTimeout(() => {
    callback(...args);
    cycle2(--times, callback, delay, ...args);
  }, delay);
}
let num2 = 0;
let last2 = new Date();
cycle2(500, () => console.log(num2++), 20);