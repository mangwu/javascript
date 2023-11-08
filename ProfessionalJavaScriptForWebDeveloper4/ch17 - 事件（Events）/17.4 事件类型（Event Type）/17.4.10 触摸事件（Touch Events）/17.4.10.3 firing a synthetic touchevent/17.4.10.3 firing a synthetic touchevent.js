const btn = document.querySelector(".btn");
let identifier = 5;
let touchEvent;
btn.addEventListener("click", (e) => {
  if (Touch.length < 1 || TouchEvent.length < 1)
    // 检测是否支持触摸和触摸事件
    throw "TouchEvent constructor not supported";
  const touch = new Touch({
    identifier: identifier++,
    target: document.body,
    clientX: 200,
    clientY: 200,
    screenX: 300,
    screenY: 300,
    pageX: 200,
    pageY: 200,
    radiusX: 5,
    radiusY: 5,
  });

  touchEvent = new TouchEvent("touchstart", {
    cancelable: true,
    bubbles: true,
    composed: true,
    touches: [touch],
    targetTouches: [touch],
    changedTouches: [touch],
  });
  console.log("-----派发合成的触摸事件----");
  document.body.dispatchEvent(touchEvent);
});

document.addEventListener("touchstart", (e) => {
  console.log(e === touchEvent, e);
});
