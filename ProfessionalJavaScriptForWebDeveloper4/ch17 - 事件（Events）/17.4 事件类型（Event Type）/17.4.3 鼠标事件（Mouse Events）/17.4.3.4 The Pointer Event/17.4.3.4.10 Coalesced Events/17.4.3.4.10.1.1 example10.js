/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.10.1.1 example10.js                                         *
 * @Date: 2023-04-01 00:14:22                                                  *
 * @LastModifiedDate: 2023-04-01 00:36:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const canvas = document.querySelector("#drawSurface");
const rect = canvas.getBoundingClientRect();
console.log(rect);
const context = canvas.getContext("2d");

canvas.addEventListener("pointermove", (e) => {
  if (e.getCoalescedEvents) {
    // 能力检测
    for (let coalescedEvent of e.getCoalescedEvents()) {
      paint(coalescedEvent); // 对所有事件进行绘画
    }
  } else {
    paint(e);
  }
});
function paint(e) {
  if (e.buttons > 0) {
    // 按下按键状态x
    context.fillRect((e.clientX * 3) / 5, (e.clientY * 3) / 10, 5, 5);
    // 在位置上绘制5 * 5 大小黑色框
  }
}
// 500 500
// 300 150
