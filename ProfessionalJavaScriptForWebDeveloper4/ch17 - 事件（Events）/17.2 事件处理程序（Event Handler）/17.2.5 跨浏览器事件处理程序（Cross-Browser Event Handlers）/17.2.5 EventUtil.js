/*
 * @Author: mangwu                                                             *
 * @File: 17.2.5 EventUtil.js                                                  *
 * @Date: 2023-02-07 11:12:32                                                  *
 * @LastModifiedDate: 2023-02-07 11:31:06                                      *
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
};

const btn = document.querySelector("button");
const handler = function () {
  console.log("Clicked");
};
const removeBtn = document.querySelector("#remove");
EventUtil.addHandler(btn, "click", handler);

const removeClick = function () {
  EventUtil.removeHandler(btn, "click", handler);
};

EventUtil.addHandler(removeBtn, "click", removeClick);
