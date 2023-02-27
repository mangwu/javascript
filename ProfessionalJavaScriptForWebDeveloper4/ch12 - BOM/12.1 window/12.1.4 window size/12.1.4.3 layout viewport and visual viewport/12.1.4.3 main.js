/*
 * @Author: mangwu                                                             *
 * @File: 12.1.4.3 main.js                                                     *
 * @Date: 2023-02-27 14:47:39                                                  *
 * @LastModifiedDate: 2023-02-27 16:29:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function getClientSize(ele) {
  return [ele.clientWidth, ele.clientHeight];
}
function getOffsetSize(ele) {
  return [ele.offsetWidth, ele.offsetHeight];
}

function getWindowSize() {
  return [innerWidth, innerHeight];
}

function getInfomation() {
  const infomation = {
    "&lt;html&gt;的clientSize": getClientSize(document.documentElement),
    "&lt;html&gt;的offsetSize": getOffsetSize(document.documentElement),
    "&lt;body&gt;的clientSize": getClientSize(document.body),
    "&lt;body&gt;的offsetSize": getOffsetSize(document.body),
    window的innerSize: getWindowSize(),
  };
  const lis = [];
  for (const key in infomation) {
    lis.push(`<li>${key}：${infomation[key].join("x")}</li>`);
  }
  return `<ul>${lis.join("")}</ul>`;
}

const info = document.querySelector(".info");
info.innerHTML = getInfomation();

window.addEventListener("resize", () => {
  info.innerHTML = getInfomation();
  setVisualInfo();
  setLayoutInfo();
});

function getVisualSize() {
  let pageWidth = innerWidth;
  let pageHeight = innerHeight;
  if (typeof pageWidth !== "number") {
    if (document.compatMode === "CSS1Compat") {
      pageHeight = document.documentElement.clientHeight;
      pageWidth = document.documentElement.clientWidth;
    } else {
      pageHeight = document.body.clientHeight;
      pageWidth = document.body.clientWidth;
    }
  }
  return [pageWidth, pageHeight];
}
function setVisualInfo() {
  const widthDiv = document.querySelector(".visual-info .width");
  const [pageWidth, pageHeight] = getVisualSize();
  widthDiv.textContent = pageWidth;
  const heightDiv = document.querySelector(".visual-info .height");
  heightDiv.textContent = pageHeight;
}
setVisualInfo();

function setLayoutInfo() {
  const widthDiv = document.querySelector(".layout-info .width");
  const [layoutWidth, layoutHeight] = getClientSize(document.documentElement);
  widthDiv.textContent = layoutWidth;
  const heightDiv = document.querySelector(".layout-info .height");
  heightDiv.textContent = layoutHeight;
}
setLayoutInfo();