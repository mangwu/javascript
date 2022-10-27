/*
 * @Author: mangwu                                                             *
 * @File: 11.2.5.1 Promise Canceling.js                                        *
 * @Date: 2022-10-27 14:44:17                                                  *
 * @LastModifiedDate: 2022-10-27 15:41:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 取消令牌 模板，用于实现期约取消
// class CancelToken {
//   constructor(cancelFn) {
//     this.promise = new Promise((resolve, reject) => {
//       cancelFn(resolve);
//     });
//   }
// }

class CancelToken {
  static {
    this.id = 0;
  }
  constructor(cancelFn) {
    this.id = CancelToken.id++;
    this.promise = new Promise((resolve, reject) => {
      cancelFn(() => {
        setTimeout(console.log, 0, "delay cancelled");
        resolve();
      });
    });
  }
}

const startBtn = document.querySelector("#start");
const cancelBtn = document.querySelector("#cancel");
const delayInput = document.querySelector("#delay");
const time = document.querySelector("#time");
delayInput.addEventListener("change", (e) => {
  time.innerText = e.target.value;
});

function cancellableDelayedResolved(delay) {
  setTimeout(() => console.log("set delay"), 0);
  startRequest(delay);
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => {
      setTimeout(console.log, 0, "delayed resolved");
      endRequest();
      resolve();
      cancelBtn.removeEventListener("click", listener);
    }, delay);
    let listener = null;
    const cancelToken = new CancelToken((cancelCallback) => {
      listener = () => {
        console.log(cancelToken.id);
        cancelCallback();
        cancelRequest();
      };
      cancelBtn.addEventListener("click", listener);
    });
    cancelToken.promise.then(() => {
      clearTimeout(id);
      // 移除当前的事件处理程序
      cancelBtn.removeEventListener("click", listener);
    });
  });
}

startBtn.addEventListener("click", () =>
  cancellableDelayedResolved(delayInput.value * 1000)
);

const ul = document.querySelector(".log");

function createLi(text) {
  let a = document.createElement("li");
  a.textContent = text;
  return a;
}
function startRequest(time) {
  ul.append(createLi(`开始了一次Promise请求,时效${time}`));
}
function cancelRequest() {
  ul.append(createLi(`取消了一次Promise`));
  ul.append(createLi(`-----------------`));
}
function endRequest() {
  ul.append(createLi(`完成了一次Promise异步操作`));
  ul.append(createLi(`-----------------`));
}
