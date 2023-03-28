/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.4.1 pointerover.js                                          *
 * @Date: 2023-03-23 22:06:57                                                  *
 * @LastModifiedDate: 2023-03-28 16:40:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const log = document.querySelector(".log");

TouchList.prototype.map = function (callback) {
  const len = this.length;
  let res = [];
  for (let i = 0; i < len; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};

function handler(e) {
  const item = document.createElement("div");
  item.className = "event-info";
  item.innerHTML = `<span class="base">事件类型：${e.type}</span>
    <span class="base">事件目标：${e.target.className}</span>
    <span class="base">当前事件目标：${
      e.currentTarget && e.currentTarget.className
    }</span>
    <span class="base">detail：${e.detail}</span>
  `;
  if (e instanceof TouchEvent) {
    item.innerHTML += `
      <span class="base">接触点：${e.touches
        .map(
          (v) =>
            `${v.target.className}(${v.clientX.toFixed(2)}
            /${v.clientY.toFixed(2)})`
        )
        .join(" ")}</span>
      <span class="base">接触目标：${e.targetTouches
        .map(
          (v) =>
            `${v.target.className}(${v.clientX.toFixed(2)}
          /${v.clientY.toFixed(2)})`
        )
        .join(" ")}</span>
  `;
  }
  if (e instanceof MouseEvent) {
    item.innerHTML += `
      <span class="base">次要事件目标：${
        e.relatedTarget && e.relatedTarget.className
      }</span>
      <span class="base">屏幕位置：${e.screenX.toFixed(2)}/${e.screenY.toFixed(
      2
    )}</span>
      <span class="base">客户端位置：${e.clientX.toFixed(
        2
      )}/${e.clientY.toFixed(2)}</span>
      <span class="base">引发按键：${e.button}</span>
      <span class="base">按键状态：${e.buttons}</span>
    `;
  }
  if (e instanceof PointerEvent) {
    item.innerHTML += `<span class="base">pointerId：${e.pointerId}</span>
    <span class="base">主指针：${e.isPrimary}</span>
    <span class="base">倾斜角度：${e.tiltX}/${e.tiltY}</span>
    <span class="base">压力：${e.pressure}</span>
    <span class="base">切向压力：${e.tangentialPressure}</span>
    <span class="base">扭动度：${e.twist}</span>
    <span class="base">俯仰角：${e.altitudeAngle}</span>
    <span class="base">方位角：${e.azimuthAngle}</span>
    `;
  }
  log.appendChild(item);
}

let capturePointerId = null;

const a = document.querySelector(".A");
const c = document.querySelector(".C");

a.addEventListener("pointerdown", (e) => {
  handler(e);
  a.setPointerCapture(e.pointerId);
  capturePointerId = e.pointerId;
  a.addEventListener("gotpointercapture", handler);
});
a.addEventListener("lostpointercapture", (e) => {
  if (e.pointerId === capturePointerId && !e.pointerIsDown) {
    capturePointerId = null;
  }
  handler(e);
});
a.addEventListener("pointermove", (e) => {
  if (e.pointerId === capturePointerId) {
    let rect = c.getBoundingClientRect();
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      // 在element2内部移动，手动触发pointerenter事件
      console.log("手动触发c元素的pointerenter事件");
      let enterEvent = new PointerEvent("pointerenter", e);
      c.dispatchEvent(enterEvent);
    }
  }
});

c.addEventListener("pointerenter", (e) => {
  if (capturePointerId === e.pointerId) {
    a.releasePointerCapture(capturePointerId);
    c.setPointerCapture(capturePointerId);
    handler(e);
    c.addEventListener("gotpointercapture", handler);
  }
});
c.addEventListener("lostpointercapture", (e) => {
  if (e.pointerId === capturePointerId && !e.pointerIsDown) {
    capturePointerId = null;
  }
  handler(e);
});