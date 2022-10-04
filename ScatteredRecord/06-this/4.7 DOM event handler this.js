/*
 * @Author: mangwu                                                             *
 * @File: 4.7 DOM event handler this.js                                        *
 * @Date: 2022-10-04 22:50:11                                                  *
 * @LastModifiedDate: 2022-10-04 22:53:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// dom元素的事件处程序的this指向触发事件的元素
const h = document.querySelector("#as_a_dom_event_handler");
h.addEventListener("click", function (e) {
  console.log(e.currentTarget === this); // true
  console.log(e.target === this); // 可能是true
  console.log(this);
  console.log(e.target);
  console.log(e.currentTarget);
});
