/*
 * @Author: mangwu                                                             *
 * @File: 17.3.3 EventUtil.js                                                  *
 * @Date: 2023-02-12 01:21:02                                                  *
 * @LastModifiedDate: 2023-02-12 01:42:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
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
};

// 使用
const btn = document.querySelector("button");
btn.onclick = function (event) {
  event = EventUtil.getEvent(event);
  let target = EventUtil.getTarget(event);
};

btn.onclick = function (event) {
  event = EventUtil.getEvent(event);
  EventUtil.preventDefault(event);
};


btn.onclick = function (event) {
  event = EventUtil.getEvent(event);
  EventUtil.stopPropagation(event);
};
