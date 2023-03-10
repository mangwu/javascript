/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.2.2 wheel.js                                                  *
 * @Date: 2023-03-10 15:49:10                                                  *
 * @LastModifiedDate: 2023-03-10 17:09:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

box1.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
  },
  { passive: true }
);

box2.addEventListener("wheel", (e) => {
  e.preventDefault();
});

box3.addEventListener(
  "scroll",
  (e) => {
    e.preventDefault();
  },
  { passive: false }
);
