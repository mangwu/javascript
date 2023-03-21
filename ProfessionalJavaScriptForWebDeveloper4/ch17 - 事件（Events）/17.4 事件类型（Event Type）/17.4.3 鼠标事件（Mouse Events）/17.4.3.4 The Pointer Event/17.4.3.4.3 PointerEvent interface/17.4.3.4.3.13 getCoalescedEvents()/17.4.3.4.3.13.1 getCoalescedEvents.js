/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.3.13.1 getCoalescedEvents.js                                *
 * @Date: 2023-03-21 11:15:16                                                  *
 * @LastModifiedDate: 2023-03-21 11:17:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const div = document.querySelector("div");

div.addEventListener("pointerdown", (e) => {
  console.log(e.getCoalescedEvents());
});
div.addEventListener("pointerup", (e) => {
  console.log(e.getCoalescedEvents(), e.getCoalescedEvents().length);
});
