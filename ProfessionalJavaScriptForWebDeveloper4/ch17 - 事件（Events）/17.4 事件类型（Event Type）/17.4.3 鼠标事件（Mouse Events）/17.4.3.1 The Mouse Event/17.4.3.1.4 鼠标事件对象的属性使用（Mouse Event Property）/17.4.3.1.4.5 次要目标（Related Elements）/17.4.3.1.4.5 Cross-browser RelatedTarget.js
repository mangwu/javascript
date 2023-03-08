/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.1.4.5 Cross-browser RelatedTarget.js                          *
 * @Date: 2023-03-08 14:12:30                                                  *
 * @LastModifiedDate: 2023-03-08 14:20:05                                      *
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
  getRelatedTarget: function (event) {
    if (event.relatedTarget) return event.relatedTarget;
    else if (event.toElement) return event.toElement;
    else if (event.fromElement) return event.fromElement;
    return null;
  },
};

const div = document.createElement("div");
EventUtil.addHandler(div, "mouseout", (event) => {
  let target = EventUtil.getTarget(event);
  let relatedTarget = EventUtil.getRelatedTarget(event);
  console.log(`Moused out of ${target.tagName} to ${relatedTarget.tagName}`);
});
