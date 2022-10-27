/*
 * @Author: mangwu                                                             *
 * @File: 11.2.5.2 Promise Progress Tracing.js                                 *
 * @Date: 2022-10-27 16:36:02                                                  *
 * @LastModifiedDate: 2022-10-27 17:07:03                                      *
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

