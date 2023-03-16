/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.2.4 example4.js                                             *
 * @Date: 2023-03-16 17:16:17                                                  *
 * @LastModifiedDate: 2023-03-16 17:17:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const event1 = new PointerEvent("pointerover", {
  bubbles: true,
  cancelable: true,
  composed: true,
  pointerId: 42,
  pointerType: "pen",
  clientX: 300,
  clientY: 300,
});

eventTarget.dispatchEvent(event1);

let pointerEventInitDict =
{
  bubbles: true,
  cancelable: true,
  composed: true,
  pointerId: 42,
  pointerType: "pen",
  clientX: 300,
  clientY: 500,
};
const p1 = new PointerEvent("pointermove", pointerEventInitDict);
pointerEventInitDict.clientX += 10;
const p2 = new PointerEvent("pointermove", pointerEventInitDict);
pointerEventInitDict.coalescedEvents = [p1, p2];
const event2 = new PointerEvent("pointermove", pointerEventInitDict);
eventTarget.dispatchEvent(event2);
