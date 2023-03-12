/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.3.1 introduce-dragStart.js                                    *
 * @Date: 2023-03-10 22:41:53                                                  *
 * @LastModifiedDate: 2023-03-11 01:15:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const internalDNDType = "text"; // 指定数据类型
const ol = document.querySelector("ol");
const div = document.querySelector("div");
ol.addEventListener("dragstart", (e) => {
  if (e.target instanceof HTMLLIElement) {
    // 获取元素的data-value数据
    e.dataTransfer.setData(internalDNDType, e.target.dataset.value);
    e.dataTransfer.effectAllowed = "move"; // 只允许移动
  } else {
    e.preventDefault();
  }
});
div.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData(internalDNDType);
  e.target.textContent = data;
});

ol.addEventListener("dragover", (e) => e.preventDefault());
div.addEventListener("dragover", (e) => e.preventDefault());
