/*
 * @Author: mangwu                                                             *
 * @File: 17.4.8.5.3 popstate.js                                               *
 * @Date: 2023-10-10 15:30:30                                                  *
 * @LastModifiedDate: 2023-10-10 15:39:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", () => {
  navigation.back();
});
btn2.addEventListener("click", () => {
  navigation.navigate("/test2.html", { history: "replace" });
});
btn3.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 1000);
  history.pushState("hello" + random, "");
});

window.addEventListener("popstate", (e) => {
  alert("popstate");
  console.log(e.state);
});

// navigation.addEventListener("currententrychange", () => {
//   alert("currententrychange");
//   console.log(navigation.currentEntry);
// });
