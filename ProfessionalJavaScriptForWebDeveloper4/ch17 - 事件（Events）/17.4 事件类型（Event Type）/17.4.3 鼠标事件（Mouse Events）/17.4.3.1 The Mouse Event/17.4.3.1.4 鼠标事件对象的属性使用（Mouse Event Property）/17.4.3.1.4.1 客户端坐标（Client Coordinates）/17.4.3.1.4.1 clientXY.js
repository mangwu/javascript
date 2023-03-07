/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.1.4.2 clientXY.js                                             *
 * @Date: 2023-03-07 22:49:06                                                  *
 * @LastModifiedDate: 2023-03-08 00:31:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
const body = document.querySelector("body");
const width = (document.documentElement.clientWidth - 17) / 10;
new Array(15).fill(0).forEach((_v, index) => {
  const ele = document.createElement("div");
  ele.style.backgroundColor = "#df99aa";
  ele.style.height = "100px";
  ele.style.position = "relative";
  ele.innerHTML = `<span style="position: absolute">↑${
    100 * index + "px"
  }</span>`;
  new Array(10).fill(0).forEach((_v2, index2) => {
    const ele2 = document.createElement("div");
    ele2.style.width = `${width}px`;
    ele2.style.textAlign = "right";
    ele2.textContent = Math.round((index2 + 1) * width) + "px→";
    ele2.style.height = "100%";
    ele2.style.display = "inline-block";
    ele2.style.borderRight = "1px solid gray";
    ele.appendChild(ele2);
  });
  ele.style.borderBottom = "1px solid gray";
  ele.style.cursor = "pointer";
  ele.style.userSelect = "none";
  body.appendChild(ele);
});

body.addEventListener("click", (e) => {
  alert(`客户端坐标：${e.clientX}, ${e.clientY}`);
});
