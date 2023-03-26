/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.4.1 pointerover.js                                          *
 * @Date: 2023-03-23 22:06:57                                                  *
 * @LastModifiedDate: 2023-03-26 01:22:13                                      *
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

const a = document.querySelector(".A");

function debounce(func, delay = 100) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
const debounceHander = debounce(handler);
let pointerrawupdate = 0;
let pointermove = 0;
a.addEventListener("pointerrawupdate", (e) => {
  // const coalescedEvents = e.getCoalescedEvents();
  // // const item = document.createElement("div");
  // // item.className = "base";
  // // item.textContent = `coalescedEvents长度：${coalescedEvents.length}`;
  // // log.appendChild(item);
  // console.log(coalescedEvents);
  // for (let i = 0; i < coalescedEvents.length; i++) {
  //   debounceHander(coalescedEvents[i]);
  // }
  handler(e);
  pointerrawupdate++;
});

a.addEventListener("pointermove", (e) => {
  handler(e);
  pointermove++;
});

setInterval(() => {
  console.log(`pointerrawupdate:${pointerrawupdate}`);
  console.log(`pointermove:${pointermove}`);
}, 1000);
