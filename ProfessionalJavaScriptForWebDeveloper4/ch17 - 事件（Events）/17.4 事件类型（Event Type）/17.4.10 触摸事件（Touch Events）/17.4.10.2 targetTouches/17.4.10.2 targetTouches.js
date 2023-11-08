const touchableEle = document.getElementById("touchable");
touchableEle.addEventListener(
  "touchstart",
  (ev) => {
    console.log(ev);
    if (ev.touches.item(0) === ev.targetTouches.item(0)) {
      /**
       * 如果在触摸平面上的第一次触摸的目标元素就是 "可触摸" 元素，
       * 则应执行以下代码。由于 targetTouches 是覆盖整个触摸平面的
       * touches 的子集，因此 TouchEvent.touches >= TouchEvents.targetTouches
       * 始终为 true 。
       */
      document.write("Hello Touch Events!");
    } else if (ev.touches.length === ev.targetTouches.length) {
      /**
       * 如果所有活跃触摸点都在 "可触摸" 元素上，
       * 则长度属性应相同。
       */
      document.write("All points are on target element");
    } else if (ev.touches.length > 1) {
      /**
       * 在单点触摸输入设备上，触摸平面上只能有一个接触点，
       * 因此只有当终端支持多点触摸时，
       * 才能执行以下代码。
       */
      document.write("Hello Multiple Touch!");
    }
  },
  false
);
