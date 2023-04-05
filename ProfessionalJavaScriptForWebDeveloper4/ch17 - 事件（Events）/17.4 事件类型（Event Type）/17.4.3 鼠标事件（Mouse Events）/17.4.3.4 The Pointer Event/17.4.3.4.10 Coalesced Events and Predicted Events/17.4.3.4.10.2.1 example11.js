/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.11 example11.js                                             *
 * @Date: 2023-04-05 03:10:53                                                  *
 * @LastModifiedDate: 2023-04-05 17:17:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const canvas = document.querySelector("#drawing");
const rect = canvas.getBoundingClientRect();
canvas.height = rect.height * window.devicePixelRatio;
canvas.width = rect.width * window.devicePixelRatio;

const context = canvas.getContext("2d");

let predicted_points = [];

canvas.addEventListener("pointermove", (event) => {
  for (let e of predicted_points.reverse()) {
    clearPoint(e);
  }
  for (let e of event.getCoalescedEvents()) {
    drawPoint(e);
  }
  predicted_points = event.getPredictedEvents();
  for (let e of predicted_points) {
    drawPoint(e);
  }
});

function clearPoint(e) {
  if (e.buttons > 0) {
    context.fillStyle = "#ffffff";
    context.fillRect(
      e.clientX * window.devicePixelRatio,
      e.clienY * window.devicePixelRatio,
      5,
      5
    );
  }
}
function drawPoint(e) {
  if (e.buttons > 0) {
    context.fillStyle = "#000000";
    context.fillRect(
      e.clientX * window.devicePixelRatio,
      e.clientY * window.devicePixelRatio,
      5,
      5
    );
  }
}
