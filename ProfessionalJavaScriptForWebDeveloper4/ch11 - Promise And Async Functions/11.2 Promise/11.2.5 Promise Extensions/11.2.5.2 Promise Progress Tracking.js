/*
 * @Author: mangwu                                                             *
 * @File: 11.2.5.2 Promise Progress Tracing.js                                 *
 * @Date: 2022-10-27 16:36:02                                                  *
 * @LastModifiedDate: 2022-10-28 11:10:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 进度跟踪
class TrackablePromise extends Promise {
  constructor(executor) {
    const notifyHandlers = [];
    super((resolve, reject) => {
      return executor(resolve, reject, (status) => {
        notifyHandlers.map((handler) => handler(status));
      });
    });
    this.notifyHandlers = notifyHandlers;
  }
  notify(notifyHandler) {
    this.notifyHandlers.push(notifyHandler);
    return this;
  }
}

let p = new TrackablePromise((resolve, reject, notify) => {
  function countDown(x) {
    if (x > 0) {
      notify(`${20 * x} % remainin`);
      setTimeout(() => countDown(x - 1), 1000);
    } else {
      resolve();
    }
  }
  countDown(5);
});

let p1 = new TrackablePromise((resolve, reject, notify) => {
  function countDown(x) {
    if (x > 0) {
      notify(x);
      setTimeout(() => countDown(x - 1), 1000);
    } else {
      console.log(`p1 promise resolved`);
      resolve();
    }
  }
  countDown(5);
});

p1.notify((x) => setTimeout(console.log, 0, `progress: ${x * 20}% remaining`, ));
p1.notify((x) => setTimeout(console.log, 0, `${x} seconds later, the execution is complete`));


