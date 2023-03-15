/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.3.9 example.js                                                *
 * @Date: 2023-03-15 17:09:32                                                  *
 * @LastModifiedDate: 2023-03-15 17:18:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const table = document.querySelector(".table");

const randomId = () => {
  const res = [];
  const astart = "a".charCodeAt();
  const nstart = "0".charCodeAt();
  let idx = 8;
  while (idx) {
    if (Math.random() > 0.27) {
      let a = Math.floor(Math.random() * 26);
      res.push(String.fromCharCode(astart + a));
    } else {
      let n = Math.floor(Math.random() * 10);
      res.push(String.fromCharCode(nstart + n));
    }
    idx--;
  }
  return res.join("");
};

const createEle = (tag) => {
  return document.createElement(tag);
};

const rows = new Array(10).fill(0).forEach((v, i) => {
  const id = randomId();
  const div = createEle("div")
  const divId = document.craete;
  div.className = "row";
});
