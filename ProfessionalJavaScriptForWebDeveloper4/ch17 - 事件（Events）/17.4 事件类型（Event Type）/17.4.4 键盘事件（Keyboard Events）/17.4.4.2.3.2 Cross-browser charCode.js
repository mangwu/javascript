/**
 * @description  17.4.4.2.3.2 charCode.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2023-05-30 23:18:55
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const EventUtil = {
  addHandler: function (ele, type, handler) {
    if (ele.addEventListener) {
      ele.addEventListener(type, handler, false);
    } else if (ele.attachEvent) {
      ele.attachEvent("on" + type, handler);
    } else {
      ele["on" + type] = handler;
    }
  },
  removeHandler: function (ele, type, handler) {
    if (ele.addEventListener) {
      ele.removeEventListener(type, handler, false);
    } else if (ele.attachEvent) {
      ele.detachEvent("on" + type, handler);
    } else {
      ele["on" + type] = null;
    }
  },
  getEvent: function (event) {
    return event ? event : window.event;
  },
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  getRelatedTarget: function (event) {
    if (event.relatedTarget) return event.relatedTarget;
    else if (event.toElement) return event.toElement;
    else if (event.fromElement) return event.fromElement;
    return null;
  },
  // 其他代码
  getCharCode: function (event) {
    if (typeof event.charCode === "number") {
      return event.charCode;
    } else {
      return event.keyCode;
    }
  },
};

let input = document.getElementById("input");
EventUtil.addHandler("keypress", (e) => {
  console.log(EventUtil.getCharCode(e));
});
