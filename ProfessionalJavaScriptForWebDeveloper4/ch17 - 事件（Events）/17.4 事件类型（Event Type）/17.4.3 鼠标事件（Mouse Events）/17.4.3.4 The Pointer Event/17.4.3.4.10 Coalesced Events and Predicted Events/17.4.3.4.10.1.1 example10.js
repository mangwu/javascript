/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.10.1.1 example10.js                                         *
 * @Date: 2023-04-01 00:14:22                                                  *
 * @LastModifiedDate: 2023-04-03 23:14:42                                      *
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
const context = canvas.getContext("2d");
const devicePixelRatio = window.devicePixelRatio || 1;
canvas.width = rect.width * devicePixelRatio;
canvas.height = rect.height * devicePixelRatio;
const inputColor = document.querySelector("input[name='color']");
const inputRange = document.querySelector("input[name='range']");

inputColor.addEventListener("change", (e) => {
  context.fillStyle = e.target.value;
});
let thickness = 1;
inputRange.addEventListener("change", (e) => {
  thickness = e.target.value;
});
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
    const canvasRect = canvas.getBoundingClientRect();
    const x = e.clientX - canvasRect.left;
    console.log(e.clientX);
    const y = e.clientY - canvasRect.top;
    context.fillRect(x * devicePixelRatio, y * devicePixelRatio, thickness, thickness);
  }
}
// 500 500
// 300 150
