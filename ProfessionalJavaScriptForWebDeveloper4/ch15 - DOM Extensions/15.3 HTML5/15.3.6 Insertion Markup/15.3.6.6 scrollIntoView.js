/*
 * @Author: mangwu                                                             *
 * @File: 15.3.6.6 scrollIntoView.js                                           *
 * @Date: 2023-01-09 15:52:45                                                  *
 * @LastModifiedDate: 2023-01-10 10:45:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let el = document.querySelector(".special");
const arg1Value = document.querySelector(".arg1-value");
const arg2Value = document.querySelector(".arg2-value");

const args = document.querySelectorAll("input[name='arg']");
let arg = {
  type: "arg1",
  value1: true,
  value2: {
    behavior: "auto",
    block: "start",
    inline: "nearest",
  },
};
args.forEach((v) =>
  v.addEventListener("change", (e) => {
    if (e.target.checked) {
      arg.type = e.target.value;
      if (e.target.value === "arg1") {
        arg1Value.style.display = "block";
        arg2Value.style.display = "none";
      } else {
        arg1Value.style.display = "none";
        arg2Value.style.display = "block";
      }
    }
  })
);

const arg1Options = arg1Value.querySelectorAll("input[type='radio']");
arg1Options.forEach((v) => {
  v.addEventListener("change", (e) => {
    if (e.target.checked) {
      arg.value1 = e.target.value === "true" ? true : false;
    }
  });
});

const arg2Options = document.querySelectorAll(".arg2-value > span");
arg2Options.forEach((v) => {
  let type = v.dataset["type"];
  v.querySelectorAll("input[type='radio']").forEach((ele) => {
    ele.addEventListener("change", (e) => {
      if (e.target.checked) {
        arg.value2[type] = e.target.value;
      }
    });
  });
});

const submit = document.querySelector("input[type='submit']");
submit.addEventListener("click", () => {
  if (arg.type === "arg1") {
    el.scrollIntoView(arg.value1);
  } else {
    el.scrollIntoView(arg.value2);
  }
});
// document.body.addEventListener("click", function () {
//   el.scrollIntoView({
//     behavior: "smooth",
//     block: "center",
//     inline: "center",
//   });
// });
